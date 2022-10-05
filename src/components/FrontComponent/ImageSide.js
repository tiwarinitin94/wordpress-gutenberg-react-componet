import MediaSource from "../MediaSource";
const ImageSide = ({ props }) => {
    return (
        <div class="image">
            <MediaSource media={props.mediaSize} title={props.mediaTITLE} />
        </div>
    );
}
export default ImageSide;
