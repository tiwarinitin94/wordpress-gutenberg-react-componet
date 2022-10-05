import MediaSource from "../components/MediaSource";
const ImageSideInfoBox = ({ props }) => {
    return (
        <div class="image">
            <MediaSource media={props.attributes.mediaSize} title={props.attributes.mediaTITLE} />
        </div>
    )
}

export default ImageSideInfoBox;