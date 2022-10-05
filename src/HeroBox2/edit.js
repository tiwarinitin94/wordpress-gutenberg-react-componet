
import ContentComponent from "../components/ContentComponent";
import ContentControl from "../components/PanelControl/ContentControl";
import { somename } from "../common/media";


const { InspectorControls } = wp.blockEditor;
const edit = (props) => {


    return (

        <div class="wp-block-ngblockplugin-hero-box2 hero-box2" style={{ background: props.attributes.contentBackgroundColor }}>
            <InspectorControls>
                <ContentControl props={props} fontColor={false} text={"Change Background Color "} />

            </InspectorControls>
            <div class="content-wrapper">
                <div class="content">
                    <h1><ContentComponent props={props} value={props.attributes.header} onchangevalue={(value) => { somename(props, value, "header") }} /></h1>
                    <p><ContentComponent props={props} value={props.attributes.small_content} onchangevalue={(value) => { somename(props, value, "small_content") }} /></p>
                </div>
            </div>
        </div>

    );
}

export default edit;