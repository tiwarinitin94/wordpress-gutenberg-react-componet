import { somename, somenamemulti, moveSlide, addNewItem } from "../common/media";
import ContentComponent from "../components/ContentComponent";
import ContentComponentMulti from "../components/ContentComponentMulti";
import ContentControl from "../components/PanelControl/ContentControl";
const { InspectorControls } = wp.blockEditor;
import { setattribute } from "../common/media";
import { Icon } from '@wordpress/components';



const edit = (props) => {


	return (


		<div class="wp-block-ngblockplugin-slider-box1 slider-box1" style={{ background: props.attributes.contentBackgroundColor }}>
			<InspectorControls>
				<ContentControl props={props} fontColor={false} text={"Change Background Color "} />
				<ContentControl props={props} backgroundColor={false} text={"Change Text Color of Content"} index="textFontColor" />
			</InspectorControls>
			<div class="content-wrapper">
				<div class="content">
					<h4><ContentComponent props={props} value={props.attributes.heading} onchangevalue={(value) => { somename(props, value, "heading") }} /></h4>
					<div class="slider-wrapper">
						<div class="slider">
							{
								props.attributes.attribute.map((item, i) => {
									return (
										<div class="slide">
											<p style={{ color: props.attributes.textFontColor }}><ContentComponentMulti props={props} item={item} i={i} value={item.text} onchangevalue={(value) => { somenamemulti(value, i, props, "text") }} /></p>
											<div class="author"><ContentComponentMulti props={props} item={item} i={i} value={item.author_name} onchangevalue={(value) => { somenamemulti(value, i, props, "author_name") }} /></div>
											<div class="company"><ContentComponentMulti props={props} item={item} i={i} value={item.company} onchangevalue={(value) => { somenamemulti(value, i, props, "company") }} /></div>
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
							<button className="button button-primary" onClick={() => {
								addNewItem(props, {
									author_name: "",
									company: "",
									text: "",
								})
							}}><Icon icon="plus" /></button>
						</div>
						<div class="custom-button flickity-prev-next-button-previous">
							<div class="icon-wrapper">
								<svg class="effect" width="87" height="87" viewBox="0 0 87 78" style={{ backgroundColor: props.attributes.textBackgroundColor }}>
									<path d="M85.9,31.6c-0.1-0.3-0.1-0.2-0.1-0.2C86,31.8,85.9,31.6,85.9,31.6 M87,36.8L87,36.8l0,0.7L87,36.8z M85.9,41.8
							c0.4-0.8,0.7-1.7,0.8-2.6l0.1-0.1l0-0.4C86.6,39.7,86.3,40.8,85.9,41.8 M84.5,44.1c0.1-0.1-0.2,0.5,0.3-0.5l-0.1,0.1
							C84.6,43.7,84.6,43.9,84.5,44.1 M84.7,43.6C84.9,43.2,84.5,43.9,84.7,43.6 M83.5,45.8l0.3-0.6c-0.1,0.1-0.5,0.6-0.4,0.4
							C83.1,46.2,83.2,46.1,83.5,45.8 M83.3,46.4l0.2-0.3C83.4,46.2,83.3,46.3,83.3,46.4 M83.8,45.4l-0.3,0.7c0.1-0.1,0.2,0,0.2-0.3
							C83.7,45.9,83.7,45.7,83.8,45.4 M84.1,45.1c0.2-0.3,0.5-0.8,0.2-0.1C84.9,43.8,84.7,43.9,84.1,45.1 M86,42.1l0.2-0.5l0.1-0.5
							C86.3,41.4,85.9,42.1,86,42.1 M80.9,49.3c0,0.1,0.3-0.1,0.3-0.1l0.3-0.4C81.3,48.9,81,49.3,80.9,49.3 M81.2,49.2l-0.4,0.7
							C81.3,49.3,81.3,49.2,81.2,49.2 M83.4,46.7l0.5-1.2c-0.2,0.5-0.4,0.9-0.7,1.4L83.4,46.7z M78.9,51.5l0.2-0.4l-0.4,0.7L78.9,51.5z
							 M77.6,53c0.1-0.3-0.5,0.2-0.3-0.1c-0.3,0.4-0.6,0.7-0.8,1.2C76.8,53.7,77.2,53.3,77.6,53 M76.1,54.7c0.1-0.1,0.2-0.4,0.4-0.6
							C76.4,54.3,76.3,54.5,76.1,54.7 M79.9,50.8c-0.2,0.1-0.4,0.2-0.5,0.4l0.3-0.1C79.8,51,79.9,50.9,79.9,50.8 M79.7,51.1L79.7,51.1
							l-0.5,0.5C79.3,51.5,79.5,51.3,79.7,51.1 M80,50.8L80,50.8C80,50.8,80,50.8,80,50.8 M82.2,48.3c-0.2,0.4-0.7,1.2-0.1,0.6
							C82.3,48.5,81.9,48.9,82.2,48.3 M80.4,50.6l0.6-0.6c0,0-0.2,0.1-0.1-0.1L80.4,50.6z M80.2,50.9l0.2-0.3l-0.2,0.2L80.2,50.9z
							 M77.3,53.7c-0.2,0.3-0.5,0.7-0.8,0.9c0.4-0.3,0.7-0.7,1-1C77.5,53.6,77.6,53.4,77.3,53.7 M78.5,52.5L78.5,52.5
							C78.5,52.5,78.5,52.5,78.5,52.5 M73.4,57.8L73.4,57.8L73.4,57.8L73.4,57.8z M77.6,53.6c0.2-0.2,0.4-0.4,0.5-0.6
							C77.9,53.2,77.7,53.5,77.6,53.6C77.5,53.7,77.5,53.7,77.6,53.6 M75.4,55.6c0.2-0.1,0.3-0.3,0.5-0.4C75.7,55.3,75.4,55.5,75.4,55.6
							 M78.3,52.6L78.3,52.6C78.2,52.6,78.3,52.6,78.3,52.6 M78.3,52.6c-0.1,0.1-0.2,0.3-0.2,0.4c0.1-0.2,0.2-0.3,0.4-0.5L78.3,52.6
							 M73.3,59.6c-0.1-0.2,0.5-0.9,1.2-1.4c0.5-0.7-0.3-0.7-1.1-0.5c0,0.1,0.1,0.1-0.4,0.8c0.3-0.1,1.5-1.1,1.1-0.5
							c-0.7,0.9-0.7,0.6-1.1,0.9c0.5-0.1-0.8,1.2-0.4,1.3l0.6-0.8C73.3,59.5,73.1,59.8,73.3,59.6 M74.6,56.7l0.2-0.3
							c-0.3,0.3-0.6,0.5-1,0.7c-0.3,0.5-0.4,0.6-0.4,0.7L74.6,56.7L74.6,56.7z M75.9,55.3c0,0.3-0.6,1-0.1,0.7c0.7-0.7,0.4-0.6,0.7-1.1
							C75.5,56.2,76.8,54.6,75.9,55.3c0.3-0.3,0.4-0.5,0.6-0.7l-0.6,0.6l0,0l0,0c0.1,0,0.1,0,0,0L75.9,55.3C75.9,55.3,75.9,55.3,75.9,55.3
							C75.6,55.7,75.8,55.4,75.9,55.3l0-0.1l0,0l-1.1,1.2C75.2,56.1,75.6,55.7,75.9,55.3 M81.9,49.7C81.8,49.8,81.8,49.8,81.9,49.7
							C81.8,49.9,81.8,49.9,81.9,49.7 M81.4,50.2c0.1-0.2,0.2-0.4,0.3-0.5c0.2-0.2,0.1,0,0.1,0.1c0.1-0.2,0.4-0.7-0.1-0.2l-0.1,0.1
							c-0.3,0.4-0.7,0.7-1.1,0.9C80.9,50.5,81.2,50.4,81.4,50.2 M78.7,52.9L77.9,54l0.6-0.4l-0.1,0C78.9,53,78.7,53,78.7,52.9 M73.2,57.8
							l0-0.3l-0.4,0.7L73.2,57.8z M72,59l-0.1-0.2l-0.3,0.4L72,59z M3.9,44.3L4,43.9C4,44.1,3.9,44.2,3.9,44.3 M2.6,46.9L2.6,46.9
							C2.6,46.9,2.6,46.8,2.6,46.9 M33.4,75.1c-0.6-0.1-1.2-0.4-1.2-0.1l0.2,0.2C32.8,75.1,33.1,75,33.4,75.1 M6,69l0.1,0.2
							c0.1,0.1,0.3,0.1,0.4,0.2C6.3,69.2,6.2,69.1,6,69 M5.3,69.2l-0.4-0.7C4.9,68.7,5.1,68.9,5.3,69.2 M12.3,30.9l0.2-0.4
							C12.1,31,12.3,30.8,12.3,30.9 M57.3,68.7c-0.4,0.1-0.8,0.2-1.2,0.4C56.7,68.9,57.3,68.9,57.3,68.7 M4,45.7c0-0.1,0.1-0.2,0.1-0.3
							C4,45.6,4,45.7,4,45.7 M54.8,69.5c0.1,0,0.2,0,0.3,0c0.3-0.2,0.7-0.3,1.1-0.5C55.7,69.1,55.2,69.2,54.8,69.5 M61,2.5h0.1
							C61.1,2.4,61.1,2.4,61,2.5 M77.6,0.8c-0.2,0-0.4,0.1-0.7,0.1C77.1,0.9,77.2,0.9,77.6,0.8 M66.5,63.3C66.8,63.1,66.6,63.2,66.5,63.3
							 M68.5,62.9c0,0.1-0.1,0.1-0.1,0.2C68.4,63,68.4,63,68.5,62.9 M51.9,72.3L51.9,72.3C52,72.3,52,72.3,51.9,72.3 M67,63l-0.4,0.2
							C66.7,63.2,66.8,63.1,67,63 M66.9,63c0.1-0.1,0.2-0.1,0.3-0.2C67.2,62.8,67.1,62.8,66.9,63 M66.1,63.6c0.2-0.1,0.3-0.2,0.5-0.3
							c-0.1,0-0.1,0-0.1,0C66.4,63.3,66.3,63.4,66.1,63.6 M32.2,13.3L32.2,13.3C32.6,12.9,32.4,13,32.2,13.3 M23.8,77.8L23.8,77.8
							L23.8,77.8L23.8,77.8z M22.4,77.8c0.4-0.2,0.9-0.2,1.4,0l-0.4-0.7L22.4,77.8z M7.3,38.3L6.8,39c0.5-1,1-1.7,0.4-1
							c0.1,0.2-1.9,3.1-1.8,3.4l-0.4,0.5c0.1-0.1,0.1-0.2,0.2-0.3c-0.7,1-0.3,0.9-1.1,2.2c-0.3,0.5-0.5,0.8-0.3,0.5l-0.5,1.1
							c-0.2,0.3-0.2,0.2,0-0.1c-0.3,0.6-0.5,1.1-0.8,1.7v0c-0.1,0.3-0.3,0.9-0.3,1.1c-0.2,0.4,0.1-0.2,0-0.1l-0.3,1
							c-0.2,0.4,0-0.5,0.3-1.1c-0.6,0.8-0.3,0.8-1.1,2.7l0.3-0.9C1,50.4,0.7,51.2,0.5,52c0.1-0.3,0.8-2.1,0.6-1c-0.2,0.4-0.3,0.9-0.3,1.3
							c-0.2,0.4-0.3,0.9-0.3,1.3l-0.1-0.1c-0.1,0.4-0.1,0.8,0,1.2c0,0.5-0.1,0.9-0.3,1.3c-0.1,1.5,0.2-1,0.2,0.7c0,1.2,0.1,2.4,0.5,3.5
							c0.1,0.8-0.1-0.1-0.1,0.2c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0,0.1,0,0.1c0.2,0.6,0.2,0,0.5,0.9c0.3,0.2,0.4,2,1.3,3
							c0.1,0.3-0.2-0.1-0.2,0.1c0.5,0.8,1.1,1.5,1.8,2.2l0.6,1c-0.4-0.8,0.4,0,1.2,0.5c-0.2-0.3-0.3-0.5-0.3-0.7c0.4,0.3,0.7,0.7,1.1,1
							c0.1,0.2-0.1,0.1-0.3,0c0.1,0.1,0.2,0.1,0.2,0.1c0.3,0.4,0,0.3-0.4,0.2c-0.1-0.2-0.2-0.3-0.3-0.5C5.8,69,5.4,68.8,5.4,69
							c0.1,0.1,0.3,0.2,0.4,0.3c-0.1,0-0.2-0.1-0.2,0s0.2,0.1,0.4,0.3L6,70l0.1,0c0.4,0.5,0.9,1,1.4,1.5c1.3,0.7,2.5,1.1,4.6,2.1
							c-0.6-0.1-0.3,0.3-0.4,0.5c-0.4-0.6-1.6-0.8-2.5-1.6c0.5,0.4,0.3,0.4,0.1,0.4c0.6,0.3,1.3,0.7,1.9,0.9c-0.1,0.2,0.3,0.4,0.8,0.7
							c-0.2-0.6,1.5,0.5,2.4,0.6c0,0.2-0.3,0.2-1.2-0.2c0.9,0.8,1.6,0.1,2.5,0.8c-0.2-0.1-0.4-0.2-0.5-0.1c0.6,0.1,2,0.6,1.6,0.7l-0.2-0.1
							c1.6,0.6,5.1,1.2,5.4,0.7c-0.1,0.2-0.2,0.4-0.4,0.6c1.1-0.3,2.1-0.7,3.1-1.2c-0.3,0.4,0.7,1.3-0.7,1.4c0.6,0.1,1.2,0.2,1.8,0.1
							c-0.3-0.1-0.7-0.6-0.3-0.6c0.6,0.3,1.3,0.5,2,0.6c-0.4-0.1,0-0.7,0.7-0.7c-0.1,0.1,0.1,0.6-0.2,0.7c0.5-0.2,1.1-0.4,1.6-0.6
							c-0.4,0.1,0,0.5,0.3,0.7c-0.2-0.1,1.4-0.1,1.8-0.2l-0.7-0.1c1.8,0,1.7-1,3.5-1.2c-0.2,0.2-0.4,0.9,0.5,0.8c0.8-1,1.9-1.8,3.1-2.4
							l0.3,0.1l1.1-0.5c-1.1,1-2.3,1.9-3.6,2.6c0.7,0,0.2,0.2,1.2,0c0.4,0.1-0.5,0.4-0.8,0.4l2.4-0.3c-0.2-0.4,1.7-0.7,1.5-1l-2.4,0.9
							c-0.2-0.3,1.3-1.4,2.9-1.6c0.4,0.1-0.2,0.7-0.1,0.9c0.5-0.3,1.1-0.4,1.7-0.5l-0.6,0.4c0.9-0.1,1.4-0.8,2.5-0.7
							c0.4-0.1,1.2,0.2,1.3,0c-0.7-0.3-1.2-1.6-0.8-2c0.8,0,1.7,0,2.5,0c0.7,0.2-0.7,1.1-0.1,1.2c0-0.1,0.3-0.3,0.4-0.4
							c0.4,0-0.1,0.4,0.8,0.1c0-0.4,1.7-0.5,0.3-0.4c0.6-0.2,1.2-0.4,1.9-0.5c-0.4-0.2,0.6-1.1,1.4-1.5c0,0.1,0.2,0.2,0.3,0.2
							c1.7-0.5,2.6-0.7,4.1-1.3c0.2,0,1-0.2,0.7,0.1c0.2-0.2,0.5-0.4,0.8-0.6c1-0.1-1,0.5-0.2,0.6c0-0.2,1.1-0.8,1.7-1.3
							c-0.4-0.2-1.5,0.6-2.2,1.1c-0.2-0.5,0.7-1.4,2.2-2.3c1.1-0.7,0.7,0,0.8-0.2c2.3-1.1,1.5-1.7,3.5-2.5c0.9-0.2,0.3,0.5,0.6,0.6
							c-0.7,0.4-1.4,0.8-2.2,1.1l0.9-0.3c-0.4,0.4-0.8,0.6-1.3,0.8c0.8-0.1,3.7-2.1,5.5-3.1c0.2-0.3,0.7-0.7,0.4-0.6l-0.5,0.4
							c-0.6,0.1,0.8-0.9,0.1-0.6c0.6-0.8,1.3-1.4,2.2-2l0.4,0.1c-0.4,0.1-0.7,0.3-0.9,0.6c0.3-0.4,1.7-0.8,1.8-1.5l-0.8,0.4
							c0.6-0.8,1.2-1.5,1.9-2.1c-0.5,0.1-0.1,0.2-0.9,0.4c0.8-0.1-2,1.6-1,1.3c-0.8,0.2-1.1,0.7-2.1,1c0.1,0.1,0.4,0-0.3,0.4
							c0,0.1-0.1,0.1-0.1,0.2L67,63l0,0c0,0,0,0,0,0c0.1-0.1,0.3-0.1,0.5-0.1c-0.5,0.6-1,1.1-1.6,1.6c-0.5,0.2,0.1-0.2-0.2-0.2l-0.5,0.5
							c-0.2-0.2-1.3,0.4-0.4-0.4l-0.9,0.6c-0.6,0.2-1.3,0.5-1.8,0.9c-0.5,0.2-1,0.9-0.7,0.5L60,67.4l0-0.1c-1.5,0.7-2.9,1.9-4.9,2.1
							c-0.6,0.3-1.2,0.6-1.9,0.8l-0.2-0.2c-0.7,0.3-2.1,0.5-2.3,0.8c-0.9-0.4-3.4,0.9-4.7,1.1l0,0.3c-0.9,0.2-1.6,0.5-2.7,0.9l0.1,0.2
							c-0.9,0.4-2.4,0.4-3.9,0.7c0.1-0.1,0.5-0.2,0.7-0.2c-1.9-0.2-3.6,1.2-5.3,1c-0.3,0.1-0.6,0.2-1,0.1l0.1,0l-0.2,0
							c-0.2,0-0.4,0-0.6-0.1c0.2,0,0.3,0.1,0.5,0.1c-0.3,0-0.8,0.2-1.2,0.3l-0.2-0.2l-0.1,0c-0.5,0-0.3,0.2-0.1,0.3
							c-0.2,0.1-0.4,0.1-0.6,0.2c-0.4-0.4-1.2,0.3-1.7-0.2c-0.3,0.3-2.3,0.3-2.5,0.7c0-0.1-0.2-0.1,0.1-0.1c-0.5-0.1-1-0.1-1.5,0l-0.2-0.3
							l-1.1,0.4c-0.7-0.2-0.9-0.4-0.3-0.6c-1.6,0.3-1.3,0-2.7,0.3l0.1-0.2c-0.5-0.1-1.3,0.1-1.6-0.1c-1-0.5-5.3-1.3-7.7-2.9
							c0.2,0.7-1-0.8-1.3-0.5c-0.1-0.2-0.4-0.5,0.1-0.3c-1.3-0.6-1.7-1.3-2.6-1.6C8.6,70.1,9,70.4,9,70.2c-0.1-0.1-0.4-0.2-0.5-0.3
							s0.2,0.1,0.4,0.2c-1.1-0.9-1.4-0.8-1.7-0.6c-0.3-0.5-0.7-0.9-1.2-1.1c-0.1-0.3-0.3-0.6,0.3,0c-0.4-0.3-1.9-2.5-2.1-2.4
							c-0.1-0.3-0.3-0.5-0.5-0.7c-0.4-0.7-0.8-1.4-1.1-2.1l0.1,0.3c-0.4-0.3-0.4-0.8-0.8-1.7l0,0c-0.3-0.9-0.5-1.9-0.6-2.9l-0.1,0.1
							c-0.3-0.2-0.1-1.8-0.1-3L1,56.3c0.1-0.8,0.2-1.7,0.5-2.5c0-0.1,0,0.2,0,0.4c0.4-1.7-0.1-0.2,0.1-1.5c0.1-0.2,0.1,0.3,0.3-0.5
							c0.2-1.2,0.5-2.4,1-3.6c-0.1,0.2-0.3,0.5-0.1-0.1C3,47.6,3.8,46.3,4,45.5c0-0.1,0.1-0.1,0.1-0.1c0.3-0.6,0.7-1.5,1.2-2.5
							c0.5-0.5,2.1-3.9,2.4-3.7l1.2-1.8l0,0.1c0.5-0.6,0.9-1.3,1.2-2.1c0.2-0.3,0.1,0,0.1,0c0.8-1,1.6-2.1,2.3-3.2l0.2-0.1
							c0.2-0.4,2-2.2,3.2-3.7c0,0.1-0.1,0.1-0.1,0.2c1.3-1.9,4.1-3.5,4.3-4.5l1-1.1c-1.4,1.3,0-0.4-0.6,0.1c0.5-0.6,1.6-1.2,0.9-0.5
							l-0.1,0.1c-0.1,0.4,1.9-1.4,2-1.2c1.4-1.2,2.9-2.3,4.5-3.3c1.5-1,3.1-1.9,4.6-2.8L31.9,15l1.1-0.6c0.3-0.1,0.5,0-0.2,0.5
							c0.5-0.2,0.9-0.5,1.2-1c1.5-0.8-0.4,0.7,0.1,0.4l0.6-0.4l-0.2,0c0.4-0.4,0.8-0.8,1.4-1c0.6-0.2,0.4,0,0.6-0.1c0,0,0.1,0,0.4-0.2
							l1.4-0.7l-0.7,0c0.6-0.4,1.3-0.7,0.5-0.6c1.1-0.1,5.4-2.2,6-2.3c0.9-0.5,1.9-0.9,2.9-1.2c-0.3,0-0.6-0.2,0.4-0.5
							c-0.2,0.7,1.8-0.4,2.8-0.2c-0.8-0.1,2.7-0.9,1.5-1c0.8-0.2,0.1,0.2,0.8,0.1c1.9-0.9,4.3-1,6.7-1.8c0-0.1-0.4-0.1,0.1-0.3l1.4,0
							c0.5-0.1,0.4-0.5,1.3-0.5c-0.1,0-0.3-0.1,0-0.2c4.8-0.9,9.8-2.1,14.8-2.7C76,1.1,76.4,1,76.9,1c-0.3,0,0-0.1-0.1-0.1L79,0.6
							c0.4-0.1,2.2-0.4,2.4-0.5l-0.7,0.1c0.9-0.2-1.2,0-1.1-0.1c-1,0.2-2.6,0.1-4.2,0.5c-0.4,0,0.3-0.1,0.1-0.1c-0.6,0.2-1.2,0.3-1.8,0.3
							l0.1,0c-2.5,0.3-3.7,0.4-6.6,0.8l0.2,0.1c-0.4,0-0.7,0.1-1.1,0.1c-0.7,0.3,1.7-0.3,1.1,0.1c-0.9-0.2-4.4,0.7-5,0.5
							c-0.9,0.2,0.3,0.1-0.6,0.3l-0.3-0.1l-0.2,0.2c-0.6,0.1-1,0-1-0.1c0.2,0,0.4-0.1,0.6-0.1c-0.9,0.1-1.7,0.3-2.6,0.5l0.9-0.1
							C56.8,3.5,53.6,4,51.2,5l0.2,0c-1.8,0.7-1.5,0.3-3.6,1l0.1,0c-0.5,0.3-0.9,0.5-1.5,0.7c0.5-0.3-1,0.1-0.4-0.3
							C44.1,7.4,45.1,7,44,7.8l-0.4-0.1c-0.4,0.4-0.9,0.7-1.4,0.9c0.7-0.5-0.7,0,0.1-0.6c-2.2,0.5-2.9,1.7-4.1,1.5
							c-0.7,0.9,1.9-0.5,1.4-0.2c0.5,0-0.6,0.7-1.3,0.9c-0.6,0.3-1.4,0-3,0.8c0.1-0.1,0.2-0.1,0.3-0.2c-0.7,0.2-1.1,0.8-1.9,1
							c-0.3,0.5-0.9,0.5-0.9,0.9c0.4-0.3,0.9-0.6,1.4-0.9c-0.8,0.5-1.3,1.4-2.7,2c0.2-0.2,0.4-0.5,0.6-0.7c-0.4,0.1-0.7,0.5-1.2,0.7
							c-0.1-0.4,1.7-1.1,2.4-1.9c-0.5,0.1-1.5,1.2-1.3,0.6c-0.4,0.8-1.6,0.9-2.4,1.9l-0.1-0.2c-0.2,0.2-0.5,0.4-0.7,0.6
							c0.1-0.2,0.3-0.4,0.4-0.6c-0.7,0.7-1.7,0.9-2.4,1.6c1.6-1.2,0.5-0.1,1.3-0.4c-1.8,1.7-1.5,0.4-3.6,2.1c0.3-0.2,1.2-0.7,0.8-0.3
							c-0.5,0.3-1,0.7-1.3,0.8c-1.3,1.2,0.3,0-0.2,0.6c-0.6,0.2-0.6,0.7-1.2,1.2l-0.1-0.1c-1.6,1.3-0.2,0.7-1.7,1.8l0.4-0.7
							c-0.2,0.2-0.5,0.5-0.7,0.7l0-0.3c-0.5,0.7-1,1.3-1.7,1.8c0.2-0.1,0.1,0.3-0.5,1c-0.5,0.4,0.1-0.4-0.8,0.6c0.2-0.4,0.4-0.7,0.8-0.9
							c0-0.1,0.1-0.3,0.1-0.4c-0.5,0.5-1.1,1-1.5,1.6c0.1-0.1,0.2-0.2,0.4-0.3c-0.4,0.5-0.8,1-1.1,1.5c-0.2,0.2-0.1,0,0-0.2
							c-0.2,0.3-0.4,0.5-0.7,1c0-0.2-0.1-0.2,0.4-0.9l-1.1,1.5c-0.1,0.1-0.7,0.6-0.6,0.4c-0.7,0.7-1.4,2-2.2,3.1c-0.1,0.1-0.2,0.3-0.2,0.4
							c-0.7,1-1.5,1.8-2.2,3.1l-0.6,0.6c-0.6,1,0.7-0.9-0.2,0.8c-0.7,1.2-0.4,0.4-0.6,0.7c-0.5,0.9-1,1.8-1.6,2.6
							C7.1,38.7,7.1,38.6,7.3,38.3 M1.1,51c0-0.3,0.1-0.7,0.3-1C1.4,50.4,1.3,50.7,1.1,51 M7.3,70.7c-0.3-0.2-0.5-0.4-0.6-0.6
							C6.9,70.3,7.1,70.5,7.3,70.7 M63.3,65.6L63.3,65.6C62.7,65.9,62.9,65.8,63.3,65.6 M64.4,65.1c0.1-0.1,0.1-0.1,0-0.1
							c-0.1,0.2-0.3,0.3-0.5,0.4C64,65.4,64.1,65.3,64.4,65.1 M36.5,12.7l-0.2,0.1C36.7,12.5,36.6,12.6,36.5,12.7 M5.4,69.1
							c0,0,0-0.1,0-0.2C5.2,68.9,5.2,68.9,5.4,69.1 M12.3,31L12.3,31L12.3,31L12.3,31z M47.4,74.8c-0.2,0-0.4,0-0.5,0
							C46.9,74.9,47,74.9,47.4,74.8 M69.4,60.9l-0.6,0.5c0.2-0.2,0.4-0.3,0.6-0.4C69.4,61,69.3,61.1,69.4,60.9 M75.5,57.2l0.2-0.3l-0.1,0
							C75.3,57.3,75.1,57.6,75.5,57.2 M70.5,61c0.2,0.1,0.5-0.3,0.9-0.7l-0.1,0.1C71.3,60.1,70.9,60.6,70.5,61 M71.6,60.3
							c0.1-0.1,0.2-0.2,0.4-0.4C71.9,59.8,71.8,60.1,71.6,60.3 M65.6,64.1c0.3-0.1,0-0.3,0.2-0.3C65.9,63.4,64.5,65,65.6,64.1 M71.3,61.3
							L71,61.2l-0.1,0.4L71.3,61.3z M67.7,63.9l0.8-0.5c0,0,0-0.1,0.1-0.2C68.2,63.5,67.7,63.9,67.7,63.9 M68.6,63.2
							c0.2-0.1,0.4-0.3,0.6-0.5C69.1,62.8,68.8,63,68.6,63.2 M70.4,62.1l-0.2,0.1l-0.5,0.4L70.4,62.1z M59.4,68.9l-0.9,0.5
							c-0.1,0.1,0.2,0.1,0.5-0.1C59.3,69.1,59.6,68.9,59.4,68.9 M62.4,68.2c-0.2,0.1-0.3,0.1-0.5,0l0.1,0.3L62.4,68.2z M59.9,69.6
							c0,0.2-1.2,0.9,0,0.3C59.9,69.8,60.7,69.3,59.9,69.6 M45.6,74.2l0.2-0.1l-0.2-0.6L45.6,74.2z M32.9,78c1.2,0,0.2-0.4,1.3-0.3
							c0.3-0.2-0.9,0-0.6-0.2C32.9,77.7,32.5,77.7,32.9,78 M33.6,77.5c0.1,0,0.2-0.1,0.4-0.1C33.8,77.4,33.7,77.5,33.6,77.5 M80.3,0.4
							l0.7-0.1l-0.5,0.1L80.3,0.4z M81.8,0.1l0.2,0L82.4,0C82.2,0,82.2,0,81.8,0.1 M0.3,53L0.3,53c0.1-0.1,0.2-0.4,0.2-0.6L0.3,53z
							 M4.2,43.4l-0.1,0.2l0.2-0.2L4.2,43.4z M8.6,35.9c-0.2,0.3-0.4,0.7-0.6,1C8.4,36.2,8.7,35.9,8.6,35.9"/>
								</svg>
								<svg class="icon" width="32.425" height="32.225" viewBox="0 0 32.425 32.225">
									<path d="M23.091,15.328l7.763,7.444H12.079A2.462,2.462,0,0,0,9.611,25.24v1.645a2.462,2.462,0,0,0,2.468,2.468H30.854L23.091,36.8a2.471,2.471,0,0,0-.041,3.527l1.131,1.121a2.458,2.458,0,0,0,3.486,0L41.311,27.81a2.458,2.458,0,0,0,0-3.486L27.667,10.67a2.458,2.458,0,0,0-3.486,0L23.05,11.791a2.483,2.483,0,0,0,.041,3.537Z" transform="translate(-9.611 -9.945)" fill="#262626" />
								</svg>
							</div>
						</div>
						<div class="custom-button flickity-prev-next-button-next">
							<div class="icon-wrapper">
								<svg class="effect" width="87" height="87" viewBox="0 0 87 78" style={{ backgroundColor: props.attributes.textBackgroundColor }}>
									<path d="M85.9,31.6c-0.1-0.3-0.1-0.2-0.1-0.2C86,31.8,85.9,31.6,85.9,31.6 M87,36.8L87,36.8l0,0.7L87,36.8z M85.9,41.8
							c0.4-0.8,0.7-1.7,0.8-2.6l0.1-0.1l0-0.4C86.6,39.7,86.3,40.8,85.9,41.8 M84.5,44.1c0.1-0.1-0.2,0.5,0.3-0.5l-0.1,0.1
							C84.6,43.7,84.6,43.9,84.5,44.1 M84.7,43.6C84.9,43.2,84.5,43.9,84.7,43.6 M83.5,45.8l0.3-0.6c-0.1,0.1-0.5,0.6-0.4,0.4
							C83.1,46.2,83.2,46.1,83.5,45.8 M83.3,46.4l0.2-0.3C83.4,46.2,83.3,46.3,83.3,46.4 M83.8,45.4l-0.3,0.7c0.1-0.1,0.2,0,0.2-0.3
							C83.7,45.9,83.7,45.7,83.8,45.4 M84.1,45.1c0.2-0.3,0.5-0.8,0.2-0.1C84.9,43.8,84.7,43.9,84.1,45.1 M86,42.1l0.2-0.5l0.1-0.5
							C86.3,41.4,85.9,42.1,86,42.1 M80.9,49.3c0,0.1,0.3-0.1,0.3-0.1l0.3-0.4C81.3,48.9,81,49.3,80.9,49.3 M81.2,49.2l-0.4,0.7
							C81.3,49.3,81.3,49.2,81.2,49.2 M83.4,46.7l0.5-1.2c-0.2,0.5-0.4,0.9-0.7,1.4L83.4,46.7z M78.9,51.5l0.2-0.4l-0.4,0.7L78.9,51.5z
							 M77.6,53c0.1-0.3-0.5,0.2-0.3-0.1c-0.3,0.4-0.6,0.7-0.8,1.2C76.8,53.7,77.2,53.3,77.6,53 M76.1,54.7c0.1-0.1,0.2-0.4,0.4-0.6
							C76.4,54.3,76.3,54.5,76.1,54.7 M79.9,50.8c-0.2,0.1-0.4,0.2-0.5,0.4l0.3-0.1C79.8,51,79.9,50.9,79.9,50.8 M79.7,51.1L79.7,51.1
							l-0.5,0.5C79.3,51.5,79.5,51.3,79.7,51.1 M80,50.8L80,50.8C80,50.8,80,50.8,80,50.8 M82.2,48.3c-0.2,0.4-0.7,1.2-0.1,0.6
							C82.3,48.5,81.9,48.9,82.2,48.3 M80.4,50.6l0.6-0.6c0,0-0.2,0.1-0.1-0.1L80.4,50.6z M80.2,50.9l0.2-0.3l-0.2,0.2L80.2,50.9z
							 M77.3,53.7c-0.2,0.3-0.5,0.7-0.8,0.9c0.4-0.3,0.7-0.7,1-1C77.5,53.6,77.6,53.4,77.3,53.7 M78.5,52.5L78.5,52.5
							C78.5,52.5,78.5,52.5,78.5,52.5 M73.4,57.8L73.4,57.8L73.4,57.8L73.4,57.8z M77.6,53.6c0.2-0.2,0.4-0.4,0.5-0.6
							C77.9,53.2,77.7,53.5,77.6,53.6C77.5,53.7,77.5,53.7,77.6,53.6 M75.4,55.6c0.2-0.1,0.3-0.3,0.5-0.4C75.7,55.3,75.4,55.5,75.4,55.6
							 M78.3,52.6L78.3,52.6C78.2,52.6,78.3,52.6,78.3,52.6 M78.3,52.6c-0.1,0.1-0.2,0.3-0.2,0.4c0.1-0.2,0.2-0.3,0.4-0.5L78.3,52.6
							 M73.3,59.6c-0.1-0.2,0.5-0.9,1.2-1.4c0.5-0.7-0.3-0.7-1.1-0.5c0,0.1,0.1,0.1-0.4,0.8c0.3-0.1,1.5-1.1,1.1-0.5
							c-0.7,0.9-0.7,0.6-1.1,0.9c0.5-0.1-0.8,1.2-0.4,1.3l0.6-0.8C73.3,59.5,73.1,59.8,73.3,59.6 M74.6,56.7l0.2-0.3
							c-0.3,0.3-0.6,0.5-1,0.7c-0.3,0.5-0.4,0.6-0.4,0.7L74.6,56.7L74.6,56.7z M75.9,55.3c0,0.3-0.6,1-0.1,0.7c0.7-0.7,0.4-0.6,0.7-1.1
							C75.5,56.2,76.8,54.6,75.9,55.3c0.3-0.3,0.4-0.5,0.6-0.7l-0.6,0.6l0,0l0,0c0.1,0,0.1,0,0,0L75.9,55.3C75.9,55.3,75.9,55.3,75.9,55.3
							C75.6,55.7,75.8,55.4,75.9,55.3l0-0.1l0,0l-1.1,1.2C75.2,56.1,75.6,55.7,75.9,55.3 M81.9,49.7C81.8,49.8,81.8,49.8,81.9,49.7
							C81.8,49.9,81.8,49.9,81.9,49.7 M81.4,50.2c0.1-0.2,0.2-0.4,0.3-0.5c0.2-0.2,0.1,0,0.1,0.1c0.1-0.2,0.4-0.7-0.1-0.2l-0.1,0.1
							c-0.3,0.4-0.7,0.7-1.1,0.9C80.9,50.5,81.2,50.4,81.4,50.2 M78.7,52.9L77.9,54l0.6-0.4l-0.1,0C78.9,53,78.7,53,78.7,52.9 M73.2,57.8
							l0-0.3l-0.4,0.7L73.2,57.8z M72,59l-0.1-0.2l-0.3,0.4L72,59z M3.9,44.3L4,43.9C4,44.1,3.9,44.2,3.9,44.3 M2.6,46.9L2.6,46.9
							C2.6,46.9,2.6,46.8,2.6,46.9 M33.4,75.1c-0.6-0.1-1.2-0.4-1.2-0.1l0.2,0.2C32.8,75.1,33.1,75,33.4,75.1 M6,69l0.1,0.2
							c0.1,0.1,0.3,0.1,0.4,0.2C6.3,69.2,6.2,69.1,6,69 M5.3,69.2l-0.4-0.7C4.9,68.7,5.1,68.9,5.3,69.2 M12.3,30.9l0.2-0.4
							C12.1,31,12.3,30.8,12.3,30.9 M57.3,68.7c-0.4,0.1-0.8,0.2-1.2,0.4C56.7,68.9,57.3,68.9,57.3,68.7 M4,45.7c0-0.1,0.1-0.2,0.1-0.3
							C4,45.6,4,45.7,4,45.7 M54.8,69.5c0.1,0,0.2,0,0.3,0c0.3-0.2,0.7-0.3,1.1-0.5C55.7,69.1,55.2,69.2,54.8,69.5 M61,2.5h0.1
							C61.1,2.4,61.1,2.4,61,2.5 M77.6,0.8c-0.2,0-0.4,0.1-0.7,0.1C77.1,0.9,77.2,0.9,77.6,0.8 M66.5,63.3C66.8,63.1,66.6,63.2,66.5,63.3
							 M68.5,62.9c0,0.1-0.1,0.1-0.1,0.2C68.4,63,68.4,63,68.5,62.9 M51.9,72.3L51.9,72.3C52,72.3,52,72.3,51.9,72.3 M67,63l-0.4,0.2
							C66.7,63.2,66.8,63.1,67,63 M66.9,63c0.1-0.1,0.2-0.1,0.3-0.2C67.2,62.8,67.1,62.8,66.9,63 M66.1,63.6c0.2-0.1,0.3-0.2,0.5-0.3
							c-0.1,0-0.1,0-0.1,0C66.4,63.3,66.3,63.4,66.1,63.6 M32.2,13.3L32.2,13.3C32.6,12.9,32.4,13,32.2,13.3 M23.8,77.8L23.8,77.8
							L23.8,77.8L23.8,77.8z M22.4,77.8c0.4-0.2,0.9-0.2,1.4,0l-0.4-0.7L22.4,77.8z M7.3,38.3L6.8,39c0.5-1,1-1.7,0.4-1
							c0.1,0.2-1.9,3.1-1.8,3.4l-0.4,0.5c0.1-0.1,0.1-0.2,0.2-0.3c-0.7,1-0.3,0.9-1.1,2.2c-0.3,0.5-0.5,0.8-0.3,0.5l-0.5,1.1
							c-0.2,0.3-0.2,0.2,0-0.1c-0.3,0.6-0.5,1.1-0.8,1.7v0c-0.1,0.3-0.3,0.9-0.3,1.1c-0.2,0.4,0.1-0.2,0-0.1l-0.3,1
							c-0.2,0.4,0-0.5,0.3-1.1c-0.6,0.8-0.3,0.8-1.1,2.7l0.3-0.9C1,50.4,0.7,51.2,0.5,52c0.1-0.3,0.8-2.1,0.6-1c-0.2,0.4-0.3,0.9-0.3,1.3
							c-0.2,0.4-0.3,0.9-0.3,1.3l-0.1-0.1c-0.1,0.4-0.1,0.8,0,1.2c0,0.5-0.1,0.9-0.3,1.3c-0.1,1.5,0.2-1,0.2,0.7c0,1.2,0.1,2.4,0.5,3.5
							c0.1,0.8-0.1-0.1-0.1,0.2c0.1,0.2,0.2,0.5,0.3,0.7c0.1,0.2,0,0.1,0,0.1c0.2,0.6,0.2,0,0.5,0.9c0.3,0.2,0.4,2,1.3,3
							c0.1,0.3-0.2-0.1-0.2,0.1c0.5,0.8,1.1,1.5,1.8,2.2l0.6,1c-0.4-0.8,0.4,0,1.2,0.5c-0.2-0.3-0.3-0.5-0.3-0.7c0.4,0.3,0.7,0.7,1.1,1
							c0.1,0.2-0.1,0.1-0.3,0c0.1,0.1,0.2,0.1,0.2,0.1c0.3,0.4,0,0.3-0.4,0.2c-0.1-0.2-0.2-0.3-0.3-0.5C5.8,69,5.4,68.8,5.4,69
							c0.1,0.1,0.3,0.2,0.4,0.3c-0.1,0-0.2-0.1-0.2,0s0.2,0.1,0.4,0.3L6,70l0.1,0c0.4,0.5,0.9,1,1.4,1.5c1.3,0.7,2.5,1.1,4.6,2.1
							c-0.6-0.1-0.3,0.3-0.4,0.5c-0.4-0.6-1.6-0.8-2.5-1.6c0.5,0.4,0.3,0.4,0.1,0.4c0.6,0.3,1.3,0.7,1.9,0.9c-0.1,0.2,0.3,0.4,0.8,0.7
							c-0.2-0.6,1.5,0.5,2.4,0.6c0,0.2-0.3,0.2-1.2-0.2c0.9,0.8,1.6,0.1,2.5,0.8c-0.2-0.1-0.4-0.2-0.5-0.1c0.6,0.1,2,0.6,1.6,0.7l-0.2-0.1
							c1.6,0.6,5.1,1.2,5.4,0.7c-0.1,0.2-0.2,0.4-0.4,0.6c1.1-0.3,2.1-0.7,3.1-1.2c-0.3,0.4,0.7,1.3-0.7,1.4c0.6,0.1,1.2,0.2,1.8,0.1
							c-0.3-0.1-0.7-0.6-0.3-0.6c0.6,0.3,1.3,0.5,2,0.6c-0.4-0.1,0-0.7,0.7-0.7c-0.1,0.1,0.1,0.6-0.2,0.7c0.5-0.2,1.1-0.4,1.6-0.6
							c-0.4,0.1,0,0.5,0.3,0.7c-0.2-0.1,1.4-0.1,1.8-0.2l-0.7-0.1c1.8,0,1.7-1,3.5-1.2c-0.2,0.2-0.4,0.9,0.5,0.8c0.8-1,1.9-1.8,3.1-2.4
							l0.3,0.1l1.1-0.5c-1.1,1-2.3,1.9-3.6,2.6c0.7,0,0.2,0.2,1.2,0c0.4,0.1-0.5,0.4-0.8,0.4l2.4-0.3c-0.2-0.4,1.7-0.7,1.5-1l-2.4,0.9
							c-0.2-0.3,1.3-1.4,2.9-1.6c0.4,0.1-0.2,0.7-0.1,0.9c0.5-0.3,1.1-0.4,1.7-0.5l-0.6,0.4c0.9-0.1,1.4-0.8,2.5-0.7
							c0.4-0.1,1.2,0.2,1.3,0c-0.7-0.3-1.2-1.6-0.8-2c0.8,0,1.7,0,2.5,0c0.7,0.2-0.7,1.1-0.1,1.2c0-0.1,0.3-0.3,0.4-0.4
							c0.4,0-0.1,0.4,0.8,0.1c0-0.4,1.7-0.5,0.3-0.4c0.6-0.2,1.2-0.4,1.9-0.5c-0.4-0.2,0.6-1.1,1.4-1.5c0,0.1,0.2,0.2,0.3,0.2
							c1.7-0.5,2.6-0.7,4.1-1.3c0.2,0,1-0.2,0.7,0.1c0.2-0.2,0.5-0.4,0.8-0.6c1-0.1-1,0.5-0.2,0.6c0-0.2,1.1-0.8,1.7-1.3
							c-0.4-0.2-1.5,0.6-2.2,1.1c-0.2-0.5,0.7-1.4,2.2-2.3c1.1-0.7,0.7,0,0.8-0.2c2.3-1.1,1.5-1.7,3.5-2.5c0.9-0.2,0.3,0.5,0.6,0.6
							c-0.7,0.4-1.4,0.8-2.2,1.1l0.9-0.3c-0.4,0.4-0.8,0.6-1.3,0.8c0.8-0.1,3.7-2.1,5.5-3.1c0.2-0.3,0.7-0.7,0.4-0.6l-0.5,0.4
							c-0.6,0.1,0.8-0.9,0.1-0.6c0.6-0.8,1.3-1.4,2.2-2l0.4,0.1c-0.4,0.1-0.7,0.3-0.9,0.6c0.3-0.4,1.7-0.8,1.8-1.5l-0.8,0.4
							c0.6-0.8,1.2-1.5,1.9-2.1c-0.5,0.1-0.1,0.2-0.9,0.4c0.8-0.1-2,1.6-1,1.3c-0.8,0.2-1.1,0.7-2.1,1c0.1,0.1,0.4,0-0.3,0.4
							c0,0.1-0.1,0.1-0.1,0.2L67,63l0,0c0,0,0,0,0,0c0.1-0.1,0.3-0.1,0.5-0.1c-0.5,0.6-1,1.1-1.6,1.6c-0.5,0.2,0.1-0.2-0.2-0.2l-0.5,0.5
							c-0.2-0.2-1.3,0.4-0.4-0.4l-0.9,0.6c-0.6,0.2-1.3,0.5-1.8,0.9c-0.5,0.2-1,0.9-0.7,0.5L60,67.4l0-0.1c-1.5,0.7-2.9,1.9-4.9,2.1
							c-0.6,0.3-1.2,0.6-1.9,0.8l-0.2-0.2c-0.7,0.3-2.1,0.5-2.3,0.8c-0.9-0.4-3.4,0.9-4.7,1.1l0,0.3c-0.9,0.2-1.6,0.5-2.7,0.9l0.1,0.2
							c-0.9,0.4-2.4,0.4-3.9,0.7c0.1-0.1,0.5-0.2,0.7-0.2c-1.9-0.2-3.6,1.2-5.3,1c-0.3,0.1-0.6,0.2-1,0.1l0.1,0l-0.2,0
							c-0.2,0-0.4,0-0.6-0.1c0.2,0,0.3,0.1,0.5,0.1c-0.3,0-0.8,0.2-1.2,0.3l-0.2-0.2l-0.1,0c-0.5,0-0.3,0.2-0.1,0.3
							c-0.2,0.1-0.4,0.1-0.6,0.2c-0.4-0.4-1.2,0.3-1.7-0.2c-0.3,0.3-2.3,0.3-2.5,0.7c0-0.1-0.2-0.1,0.1-0.1c-0.5-0.1-1-0.1-1.5,0l-0.2-0.3
							l-1.1,0.4c-0.7-0.2-0.9-0.4-0.3-0.6c-1.6,0.3-1.3,0-2.7,0.3l0.1-0.2c-0.5-0.1-1.3,0.1-1.6-0.1c-1-0.5-5.3-1.3-7.7-2.9
							c0.2,0.7-1-0.8-1.3-0.5c-0.1-0.2-0.4-0.5,0.1-0.3c-1.3-0.6-1.7-1.3-2.6-1.6C8.6,70.1,9,70.4,9,70.2c-0.1-0.1-0.4-0.2-0.5-0.3
							s0.2,0.1,0.4,0.2c-1.1-0.9-1.4-0.8-1.7-0.6c-0.3-0.5-0.7-0.9-1.2-1.1c-0.1-0.3-0.3-0.6,0.3,0c-0.4-0.3-1.9-2.5-2.1-2.4
							c-0.1-0.3-0.3-0.5-0.5-0.7c-0.4-0.7-0.8-1.4-1.1-2.1l0.1,0.3c-0.4-0.3-0.4-0.8-0.8-1.7l0,0c-0.3-0.9-0.5-1.9-0.6-2.9l-0.1,0.1
							c-0.3-0.2-0.1-1.8-0.1-3L1,56.3c0.1-0.8,0.2-1.7,0.5-2.5c0-0.1,0,0.2,0,0.4c0.4-1.7-0.1-0.2,0.1-1.5c0.1-0.2,0.1,0.3,0.3-0.5
							c0.2-1.2,0.5-2.4,1-3.6c-0.1,0.2-0.3,0.5-0.1-0.1C3,47.6,3.8,46.3,4,45.5c0-0.1,0.1-0.1,0.1-0.1c0.3-0.6,0.7-1.5,1.2-2.5
							c0.5-0.5,2.1-3.9,2.4-3.7l1.2-1.8l0,0.1c0.5-0.6,0.9-1.3,1.2-2.1c0.2-0.3,0.1,0,0.1,0c0.8-1,1.6-2.1,2.3-3.2l0.2-0.1
							c0.2-0.4,2-2.2,3.2-3.7c0,0.1-0.1,0.1-0.1,0.2c1.3-1.9,4.1-3.5,4.3-4.5l1-1.1c-1.4,1.3,0-0.4-0.6,0.1c0.5-0.6,1.6-1.2,0.9-0.5
							l-0.1,0.1c-0.1,0.4,1.9-1.4,2-1.2c1.4-1.2,2.9-2.3,4.5-3.3c1.5-1,3.1-1.9,4.6-2.8L31.9,15l1.1-0.6c0.3-0.1,0.5,0-0.2,0.5
							c0.5-0.2,0.9-0.5,1.2-1c1.5-0.8-0.4,0.7,0.1,0.4l0.6-0.4l-0.2,0c0.4-0.4,0.8-0.8,1.4-1c0.6-0.2,0.4,0,0.6-0.1c0,0,0.1,0,0.4-0.2
							l1.4-0.7l-0.7,0c0.6-0.4,1.3-0.7,0.5-0.6c1.1-0.1,5.4-2.2,6-2.3c0.9-0.5,1.9-0.9,2.9-1.2c-0.3,0-0.6-0.2,0.4-0.5
							c-0.2,0.7,1.8-0.4,2.8-0.2c-0.8-0.1,2.7-0.9,1.5-1c0.8-0.2,0.1,0.2,0.8,0.1c1.9-0.9,4.3-1,6.7-1.8c0-0.1-0.4-0.1,0.1-0.3l1.4,0
							c0.5-0.1,0.4-0.5,1.3-0.5c-0.1,0-0.3-0.1,0-0.2c4.8-0.9,9.8-2.1,14.8-2.7C76,1.1,76.4,1,76.9,1c-0.3,0,0-0.1-0.1-0.1L79,0.6
							c0.4-0.1,2.2-0.4,2.4-0.5l-0.7,0.1c0.9-0.2-1.2,0-1.1-0.1c-1,0.2-2.6,0.1-4.2,0.5c-0.4,0,0.3-0.1,0.1-0.1c-0.6,0.2-1.2,0.3-1.8,0.3
							l0.1,0c-2.5,0.3-3.7,0.4-6.6,0.8l0.2,0.1c-0.4,0-0.7,0.1-1.1,0.1c-0.7,0.3,1.7-0.3,1.1,0.1c-0.9-0.2-4.4,0.7-5,0.5
							c-0.9,0.2,0.3,0.1-0.6,0.3l-0.3-0.1l-0.2,0.2c-0.6,0.1-1,0-1-0.1c0.2,0,0.4-0.1,0.6-0.1c-0.9,0.1-1.7,0.3-2.6,0.5l0.9-0.1
							C56.8,3.5,53.6,4,51.2,5l0.2,0c-1.8,0.7-1.5,0.3-3.6,1l0.1,0c-0.5,0.3-0.9,0.5-1.5,0.7c0.5-0.3-1,0.1-0.4-0.3
							C44.1,7.4,45.1,7,44,7.8l-0.4-0.1c-0.4,0.4-0.9,0.7-1.4,0.9c0.7-0.5-0.7,0,0.1-0.6c-2.2,0.5-2.9,1.7-4.1,1.5
							c-0.7,0.9,1.9-0.5,1.4-0.2c0.5,0-0.6,0.7-1.3,0.9c-0.6,0.3-1.4,0-3,0.8c0.1-0.1,0.2-0.1,0.3-0.2c-0.7,0.2-1.1,0.8-1.9,1
							c-0.3,0.5-0.9,0.5-0.9,0.9c0.4-0.3,0.9-0.6,1.4-0.9c-0.8,0.5-1.3,1.4-2.7,2c0.2-0.2,0.4-0.5,0.6-0.7c-0.4,0.1-0.7,0.5-1.2,0.7
							c-0.1-0.4,1.7-1.1,2.4-1.9c-0.5,0.1-1.5,1.2-1.3,0.6c-0.4,0.8-1.6,0.9-2.4,1.9l-0.1-0.2c-0.2,0.2-0.5,0.4-0.7,0.6
							c0.1-0.2,0.3-0.4,0.4-0.6c-0.7,0.7-1.7,0.9-2.4,1.6c1.6-1.2,0.5-0.1,1.3-0.4c-1.8,1.7-1.5,0.4-3.6,2.1c0.3-0.2,1.2-0.7,0.8-0.3
							c-0.5,0.3-1,0.7-1.3,0.8c-1.3,1.2,0.3,0-0.2,0.6c-0.6,0.2-0.6,0.7-1.2,1.2l-0.1-0.1c-1.6,1.3-0.2,0.7-1.7,1.8l0.4-0.7
							c-0.2,0.2-0.5,0.5-0.7,0.7l0-0.3c-0.5,0.7-1,1.3-1.7,1.8c0.2-0.1,0.1,0.3-0.5,1c-0.5,0.4,0.1-0.4-0.8,0.6c0.2-0.4,0.4-0.7,0.8-0.9
							c0-0.1,0.1-0.3,0.1-0.4c-0.5,0.5-1.1,1-1.5,1.6c0.1-0.1,0.2-0.2,0.4-0.3c-0.4,0.5-0.8,1-1.1,1.5c-0.2,0.2-0.1,0,0-0.2
							c-0.2,0.3-0.4,0.5-0.7,1c0-0.2-0.1-0.2,0.4-0.9l-1.1,1.5c-0.1,0.1-0.7,0.6-0.6,0.4c-0.7,0.7-1.4,2-2.2,3.1c-0.1,0.1-0.2,0.3-0.2,0.4
							c-0.7,1-1.5,1.8-2.2,3.1l-0.6,0.6c-0.6,1,0.7-0.9-0.2,0.8c-0.7,1.2-0.4,0.4-0.6,0.7c-0.5,0.9-1,1.8-1.6,2.6
							C7.1,38.7,7.1,38.6,7.3,38.3 M1.1,51c0-0.3,0.1-0.7,0.3-1C1.4,50.4,1.3,50.7,1.1,51 M7.3,70.7c-0.3-0.2-0.5-0.4-0.6-0.6
							C6.9,70.3,7.1,70.5,7.3,70.7 M63.3,65.6L63.3,65.6C62.7,65.9,62.9,65.8,63.3,65.6 M64.4,65.1c0.1-0.1,0.1-0.1,0-0.1
							c-0.1,0.2-0.3,0.3-0.5,0.4C64,65.4,64.1,65.3,64.4,65.1 M36.5,12.7l-0.2,0.1C36.7,12.5,36.6,12.6,36.5,12.7 M5.4,69.1
							c0,0,0-0.1,0-0.2C5.2,68.9,5.2,68.9,5.4,69.1 M12.3,31L12.3,31L12.3,31L12.3,31z M47.4,74.8c-0.2,0-0.4,0-0.5,0
							C46.9,74.9,47,74.9,47.4,74.8 M69.4,60.9l-0.6,0.5c0.2-0.2,0.4-0.3,0.6-0.4C69.4,61,69.3,61.1,69.4,60.9 M75.5,57.2l0.2-0.3l-0.1,0
							C75.3,57.3,75.1,57.6,75.5,57.2 M70.5,61c0.2,0.1,0.5-0.3,0.9-0.7l-0.1,0.1C71.3,60.1,70.9,60.6,70.5,61 M71.6,60.3
							c0.1-0.1,0.2-0.2,0.4-0.4C71.9,59.8,71.8,60.1,71.6,60.3 M65.6,64.1c0.3-0.1,0-0.3,0.2-0.3C65.9,63.4,64.5,65,65.6,64.1 M71.3,61.3
							L71,61.2l-0.1,0.4L71.3,61.3z M67.7,63.9l0.8-0.5c0,0,0-0.1,0.1-0.2C68.2,63.5,67.7,63.9,67.7,63.9 M68.6,63.2
							c0.2-0.1,0.4-0.3,0.6-0.5C69.1,62.8,68.8,63,68.6,63.2 M70.4,62.1l-0.2,0.1l-0.5,0.4L70.4,62.1z M59.4,68.9l-0.9,0.5
							c-0.1,0.1,0.2,0.1,0.5-0.1C59.3,69.1,59.6,68.9,59.4,68.9 M62.4,68.2c-0.2,0.1-0.3,0.1-0.5,0l0.1,0.3L62.4,68.2z M59.9,69.6
							c0,0.2-1.2,0.9,0,0.3C59.9,69.8,60.7,69.3,59.9,69.6 M45.6,74.2l0.2-0.1l-0.2-0.6L45.6,74.2z M32.9,78c1.2,0,0.2-0.4,1.3-0.3
							c0.3-0.2-0.9,0-0.6-0.2C32.9,77.7,32.5,77.7,32.9,78 M33.6,77.5c0.1,0,0.2-0.1,0.4-0.1C33.8,77.4,33.7,77.5,33.6,77.5 M80.3,0.4
							l0.7-0.1l-0.5,0.1L80.3,0.4z M81.8,0.1l0.2,0L82.4,0C82.2,0,82.2,0,81.8,0.1 M0.3,53L0.3,53c0.1-0.1,0.2-0.4,0.2-0.6L0.3,53z
							 M4.2,43.4l-0.1,0.2l0.2-0.2L4.2,43.4z M8.6,35.9c-0.2,0.3-0.4,0.7-0.6,1C8.4,36.2,8.7,35.9,8.6,35.9"/>
								</svg>
								<svg class="icon" width="32.425" height="32.225" viewBox="0 0 32.425 32.225">
									<path d="M23.091,15.328l7.763,7.444H12.079A2.462,2.462,0,0,0,9.611,25.24v1.645a2.462,2.462,0,0,0,2.468,2.468H30.854L23.091,36.8a2.471,2.471,0,0,0-.041,3.527l1.131,1.121a2.458,2.458,0,0,0,3.486,0L41.311,27.81a2.458,2.458,0,0,0,0-3.486L27.667,10.67a2.458,2.458,0,0,0-3.486,0L23.05,11.791a2.483,2.483,0,0,0,.041,3.537Z" transform="translate(-9.611 -9.945)" fill="#262626" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >


	);
}

export default edit;

