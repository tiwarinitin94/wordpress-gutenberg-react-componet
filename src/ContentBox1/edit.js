
import ContentComponent from "../components/ContentComponent";
import ContentControl from "../components/PanelControl/ContentControl";
import { somename } from "../common/media";
import ButtonControl from "../components/PanelControl/ButtonControl";
import ButtonComponent from "../components/Button";


const { InspectorControls } = wp.blockEditor;

const edit = (props) => {

    return (

        <div class="wp-block-ngblockplugin-content-box1 content-box1" style={{ backgroundColor: props.attributes.contentBackgroundColor }}>
            <InspectorControls>
                <ContentControl props={props} fontColor={false} text={"Change Background Color "} />
                <ButtonControl props={props} />
            </InspectorControls>
            <div class="content-wrapper">
                <div class="content">
                    <h2><ContentComponent props={props} value={props.attributes.headline} onchangevalue={(value) => { somename(props, value, "headline") }} /></h2>
                    <div class="col-wrapper">
                        <div class="col">
                            <p><ContentComponent props={props} value={props.attributes.text} onchangevalue={(value) => { somename(props, value, "text") }} /></p>
                        </div>
                        <div class="col">
                            <p><ContentComponent props={props} value={props.attributes.text2} onchangevalue={(value) => { somename(props, value, "text2") }} /></p>
                        </div>
                    </div>
                    <ButtonComponent props={props} />
                </div>
                <p><ContentComponent props={props} value={props.attributes.subtext} onchangevalue={(value) => { somename(props, value, "subtext") }} /></p>

            </div>
        </div>

    );
}

export default edit;