
import ContentComponent from "../components/ContentComponent";
import ContentControl from "../components/PanelControl/ContentControl";
import { somename } from "../common/media";
const { RichText, } = wp.blockEditor;

const { InspectorControls } = wp.blockEditor;

const edit = (props) => {

    return (


        <div class="wp-block-ngblockplugin-info-box8 info-box8" style={{ backgroundColor: props.attributes.contentBackgroundColor }}>
            <InspectorControls>
                <ContentControl props={props} fontColor={false} text={"Change Background Color "} />
                <ContentControl props={props} backgroundColor={false} index={"headlineContentColor"} text={"Change Text Color "} />
                <ContentControl props={props} backgroundColor={false} index={"textContentColor"} text={"Change Text Color "} />

            </InspectorControls>
            <div class="content-wrapper">
                <div class="content">
                    <h3 style={{ color: props.attributes.headlineContentColor }}><ContentComponent props={props} value={props.attributes.headline} onchangevalue={(value) => { somename(props, value, "headline") }} /></h3>

                    <RichText placeholder={"Insert list here"} style={{ color: props.attributes.textContentColor }} tagName="ul" multiline="li" value={props.attributes.text} onChange={(value) => { somename(props, value, "text") }} />

                </div>
            </div>
        </div>



    );
}

export default edit;