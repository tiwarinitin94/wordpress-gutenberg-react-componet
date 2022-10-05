import { somename, somenamemulti, addNewItem } from "../common/media";
import ContentComponent from "../components/ContentComponent";
import ContentComponentMulti from "../components/ContentComponentMulti";
const { InspectorControls } = wp.blockEditor;
import { setattribute } from "../common/media";
import MediaControl from "../components/PanelControl/MediaControl";
import MediaSource from "../components/MediaSource";
import { Icon } from '@wordpress/components';

const moveSlide = (e, side, props) => {
	let value = e.target.getAttribute('index');

	console.log(value);
	if (value <= 0 && side === "up") {
		console.log("Can't go more up");
	} else if (value >= props.attributes.attribute.length - 1 && side == "down") {
		console.log("Can't go more down");
	} else {
		let attribstate = [...props.attributes.attribute];
		let temp = null
		if (side === "up") {
			temp = attribstate[value - 1];
			attribstate[value - 1] = attribstate[value];
		} else {
			temp = attribstate[parseInt(value) + 1];

			attribstate[parseInt(value) + 1] = attribstate[value];
		}

		attribstate[value] = temp;
		setattribute(attribstate, props);

	}
}
const edit = (props) => {


	return (


		<div class="wp-block-ngblockplugin-timeline-box timeline-box">
			<InspectorControls>
				<MediaControl props={props} text={"Upload Hero Image here"} />
			</InspectorControls>
			<div class="content-wrapper">

				<MediaSource media={props.attributes.mediaSize} title={props.attributes.mediaTITLE} />
				<div class="headline-wrapper">

					<h4><ContentComponent props={props} value={props.attributes.heading} onchangevalue={(value) => { somename(props, value, "heading") }} /></h4>
				</div>
			</div>
			<div class="timeline-wrapper">
				{
					props.attributes.attribute.map((item, i) => {
						return (
							<div>
								<div class="timeline-item">
									<div class="col-left">
										<p><ContentComponentMulti props={props} item={item} value={item.col_left} onchangevalue={(value) => { somenamemulti(value, i, props, "col_left") }} /></p>
									</div>
									<div class="col-right">
										<p><ContentComponentMulti props={props} item={item} value={item.col_right} onchangevalue={(value) => { somenamemulti(value, i, props, "col_right") }} /></p>
									</div>

								</div>


								<button className="button button-primary" style={{ margin: "5px" }} index={i} onClick={(e) => {
									moveSlide(e, "up", props);
								}}><Icon icon="arrow-up" /></button>
								<button className="button button-primary" style={{ margin: "5px" }} index={i} onClick={(e) => {
									moveSlide(e, "down", props);
								}}> <Icon icon="arrow-down" /></button>
								<button className="button button-primary" style={{ margin: "5px" }} index={i} onClick={(e) => {
									let value = e.target.getAttribute('index');
									let attribstate = [...props.attributes.attribute];
									attribstate.splice(value, 1);
									setattribute(attribstate, props);
								}}><Icon icon="trash" /></button>
							</div>

						)
					})
				}

			</div>
			<button className="button button-primary" onClick={() => {
				addNewItem(props, {
					author_name: "",
					company: "",
					text: "",
				})
			}}><Icon icon="plus" /></button>
		</div >


	);
}

export default edit;

