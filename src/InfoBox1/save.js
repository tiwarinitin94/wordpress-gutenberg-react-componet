import ContentSide from "../components/FrontComponent/ContentSide";
import ImageSide from "../components/FrontComponent/ImageSide";



const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-info-box-1 info-box1">
            <div class="col">
                {
                    props.attributes.rhsEnable ? <ImageSide props={props.attributes} /> : <ContentSide props={props.attributes} />
                }
            </div>
            <div class="col">
                {
                    props.attributes.rhsEnable ? <ContentSide props={props.attributes} /> : <ImageSide props={props.attributes} />
                }
            </div>
        </div>
    );
}

export default save;