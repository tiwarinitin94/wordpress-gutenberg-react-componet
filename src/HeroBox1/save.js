import ButtonFront from "../components/FrontComponent/ButtonFront";
import MediaSource from "../components/MediaSource";
const {
    RichText,
} = wp.blockEditor;
const save = (props) => {
    return (

        <div className="hero-box1" >
            {props.attributes.mediaIURL ? <div class="image-wrapper">
                <MediaSource media={props.attributes.mediaSize} title={props.attributes.mediaTITLE} />
            </div> : ""}
            <div className="content-wrapper">
                <div class="content" style={{ backgroundColor: props.attributes.contentBackgroundColor }}>
                    <h1 style={{ color: props.attributes.contentFontColor }}  ><RichText.Content value={props.attributes.content}></RichText.Content></h1>
                    <ButtonFront props={props.attributes} />
                </div>
            </div>
        </div>
    );
};
export default save;