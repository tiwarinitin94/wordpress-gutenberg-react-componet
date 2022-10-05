import { somename } from "../common/media";
import ContentComponent from "../components/ContentComponent";
import ContentControl from "../components/PanelControl/ContentControl";


const { InspectorControls } = wp.blockEditor;
const edit = (props) => {


    return (

        <div class="wp-block-ngblockplugin-text-box-1 text-box-1" style={{ background: props.attributes.contentBackgroundColor }}>

            <InspectorControls>
                <ContentControl props={props} fontColor={false} text={"Change Background Color "} />
                <ContentControl props={props} backgroundColor={false} text={"Left Column Font color"} index={"LeftBackground"} label={"Font Color"} />
                <ContentControl props={props} backgroundColor={false} text={"Right Column Font Color"} index={"RightBackground"} label={"Font Color"} />
            </InspectorControls>

            <div class="col">
                <div class="content-wrapper" style={{ color: props.attributes.LeftBackground }}>
                    <h3> <ContentComponent props={props} value={props.attributes.heading} onchangevalue={(value) => { somename(props, value, "heading") }} /></h3>
                </div>
            </div>
            <div class="col">
                <div class="content-wrapper" style={{ color: props.attributes.RightBackground }}>
                    <ContentComponent props={props} value={props.attributes.para} onchangevalue={(value) => { somename(props, value, "para") }} />
                </div>
            </div>
        </div>

    );
}

export default edit;