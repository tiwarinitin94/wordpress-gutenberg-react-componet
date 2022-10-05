
import InspectControlWrap from "../components/PanelControl/InspectControlWrap";
import ButtonControl from "../components/PanelControl/ButtonControl";
import MediaControl from "../components/PanelControl/MediaControl";

import ToggleControlComponent from "../components/PanelControl/ToggleControlComponent";
import ContentSideInfoBox from "../components/ContentSideInfoBox";
import ImageSideInfoBox from "../components/ImageSideInfoBox";
import ContentControl from "../components/PanelControl/ContentControl";




const edit = (props) => {



    return (
        <div >
            <InspectControlWrap>
                <MediaControl props={props} text={"Upload Media"} />
                <ToggleControlComponent props={props} />
                <ButtonControl props={props} />
                <ContentControl props={props} />

            </InspectControlWrap>
            <div class="wp-block-ngblockplugin-info-box-1 info-box1" style={{ backgroundColor: props.attributes.contentBackgroundColor, color: props.attributes.contentFontColor }}>
                <div class="col">
                    {
                        props.attributes.rhsEnable ? <ImageSideInfoBox props={props} /> : <ContentSideInfoBox props={props} />
                    }
                </div>
                <div class="col">
                    {
                        props.attributes.rhsEnable ? <ContentSideInfoBox props={props} /> : <ImageSideInfoBox props={props} />
                    }
                </div>
            </div>
        </div>
    );
}

export default edit;