import MediaSource from "../components/MediaSource";
import MediaControl from "../components/PanelControl/MediaControl";
const {
    InspectorControls, // New component!
} = wp.blockEditor;
const edit = (props) => {

    return (
        <div class="wp-block-ngblockplugin-media-box media-box">
            <InspectorControls>
                <MediaControl props={props} text={"Upload background Image here"} />
            </InspectorControls>
            <div class="image-wrapper">
                <MediaSource media={props.attributes.mediaSize} title={props.attributes.mediaTITLE} />
            </div>
        </div>
    );
}

export default edit;