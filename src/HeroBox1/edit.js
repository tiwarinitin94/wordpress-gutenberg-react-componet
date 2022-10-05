const {
    InspectorControls, // New component!
    RichText,
} = wp.blockEditor;
import ButtonComponent from "../components/Button";
import MediaControl from "../components/PanelControl/MediaControl";
import ButtonControl from "../components/PanelControl/ButtonControl";
import ContentControl from "../components/PanelControl/ContentControl";
import { somename } from "../common/media";

const edit = (props) => {


    return (
        <>
            <InspectorControls>
                <MediaControl props={props} text={"Upload background Image here"} />
                <ContentControl props={props} />
                <ButtonControl props={props} />

            </InspectorControls>

            <div className="hero-box1" style={props.attributes.mediaIURL ? { backgroundImage: "url(" + props.attributes.mediaIURL + ")" } : {}}>
                <div className="content-wrapper">
                    <div class="content" style={{ backgroundColor: props.attributes.contentBackgroundColor }}>
                        <RichText tagName="h1" placeholder={"Enter Text here"} style={{ color: props.attributes.contentFontColor }} value={props.attributes.content} onChange={(value) => { somename(props, value) }} />
                        <ButtonComponent props={props} />
                    </div>
                </div>
            </div>

        </>

    );
}

export default edit;