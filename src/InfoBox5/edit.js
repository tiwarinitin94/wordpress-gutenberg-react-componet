
const { InspectorControls } = wp.blockEditor;
import ButtonComponent from "../components/Button";
import { somename } from "../common/media";
import ContentComponent from "../components/ContentComponent";
import ButtonControl from "../components/PanelControl/ButtonControl";
import ContentControl from "../components/PanelControl/ContentControl";
import ToggleControlComponent from "../components/PanelControl/ToggleControlComponent";



const ContentWrapper = ({ props }) => {
    return (
        <div class="content-wrapper text">
            <div class="content">
                <ContentComponent props={props} value={props.attributes.headline} onchangevalue={(value) => { somename(props, value, "headline") }} />
            </div>
        </div>
    )
}


const Subtext = ({ props }) => {
    return (
        <div class="content-wrapper headline">
            <div class="content">
                <h2>
                    <ContentComponent props={props} value={props.attributes.text} onchangevalue={(value) => { somename(props, value, "text") }} />
                </h2>
                <p class="subtext">
                    <ContentComponent props={props} value={props.attributes.subtext} onchangevalue={(value) => { somename(props, value, "subtext") }} />
                </p>
                <ButtonComponent props={props} />
                {/* <a class="btn btn-typ1" title="*link text*">*link text*</a> */}
            </div>
        </div>
    );
}
const edit = (props) => {

    return (
        <div class="wp-block-ngblockplugin-info-box5 info-box5" style={{ background: props.attributes.contentBackgroundColor }}>
            <InspectorControls>
                <ButtonControl props={props} />
                <ContentControl props={props} fontColor={false} />
                <ToggleControlComponent props={props} text={"Switch Columns"} />
            </InspectorControls>
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
}

export default edit;
