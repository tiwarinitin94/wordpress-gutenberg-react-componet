const { RichText, } = wp.blockEditor;
import ButtonFront from "../components/FrontComponent/ButtonFront";


const ContentWrapper = ({ props }) => {
    return (
        <div class="content-wrapper">
            <div class="content">
                <RichText.Content value={props.attributes.headline}></RichText.Content>
            </div>
        </div>
    )
}


const Subtext = ({ props }) => {
    return (
        <div class="content-wrapper">
            <div class="content">
                <h2> <RichText.Content value={props.attributes.text}></RichText.Content></h2>
                <p class="subtext">  <RichText.Content value={props.attributes.subtext}></RichText.Content></p>
                <ButtonFront props={props.attributes} />
                {/* <a class="btn btn-typ1" title="*link text*">*link text*</a> */}
            </div>
        </div>
    );
}
const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-info-box5 info-box5" style={{ background: props.attributes.contentBackgroundColor }}>
            <div class="col-wrapper">
                <div class="col">
                    {props.attributes.rhsEnable ?
                        <Subtext props={props} />
                        : <ContentWrapper props={props} />}
                </div>
                <div class="col">
                    {props.attributes.rhsEnable ?
                        <ContentWrapper props={props} />
                        : <Subtext props={props} />}
                </div>
            </div>
        </div>


    );
};
export default save;