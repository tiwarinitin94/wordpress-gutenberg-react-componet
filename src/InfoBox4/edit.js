const {
    InspectorControls,
} = wp.blockEditor;
import ButtonMulti from "../components/ButtonMulti";
import { somenamemulti } from "../common/media";
import MediaControl from "../components/PanelControl/MediaControl";
import ContentComponentMulti from "../components/ContentComponentMulti";
import ContentControlMulti from "../components/PanelControl/ContentControlMulti";
import MediaSource from "../components/MediaSource";
const edit = (props) => {

    return (
        <div class="wp-block-ngblockplugin-info-box4 info-box4">
            <InspectorControls>
                <MediaControl props={props} text={"Upload background here"} />
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <>
                                <ContentControlMulti item={item} props={props} i={i} />

                            </>
                        )
                    })

                }
            </InspectorControls>

            <div class="image-wrapper">
                <MediaSource media={props.attributes.mediaSize} title={props.attributes.mediaTITLE} />
            </div>
            <div className="col-wrapper">
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <div class="col" >
                                <div class="content-wrapper">
                                    <div class="content" style={{ backgroundColor: item.contentBackgroundColor, color: item.contentFontColor }}>
                                        <h3><ContentComponentMulti item={item} props={props} onchangevalue={(value) => { somenamemulti(value, i, props) }}></ContentComponentMulti></h3>
                                        <ButtonMulti props={props} item={item} i={i} />
                                        {/* <a href={item.buttonLink} title={item.button_text} class="btn btn-typ1">{item.button_text}</a> */}
                                    </div>
                                </div>
                            </div>

                        )

                    })
                }
            </div>

        </div>
    );
}

export default edit;