import MediaSource from "../components/MediaSource";
const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-media-box media-box">
            <div class="image-wrapper">
                <MediaSource media={props.attributes.mediaSize} title={props.attributes.mediaTITLE} />
            </div>
        </div>
    );
}

export default save;