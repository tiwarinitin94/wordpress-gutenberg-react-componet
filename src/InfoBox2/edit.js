const {
    InspectorControls,
} = wp.blockEditor;
import ButtonMulti from "../components/ButtonMulti";
import MediaSource from "../components/MediaSource";
import { somenamemulti } from "../common/media";
import ContentComponentMulti from "../components/ContentComponentMulti";
import ContentControlMulti from "../components/PanelControl/ContentControlMulti";
import MediaUploadComponentMulti from "../components/MediaUploadComponentMulti";
const edit = (props) => {




    return (

        <div class="wp-block-ngblockplugin-info-box2 info-box2">
            <InspectorControls>
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <>
                                <ContentControlMulti item={item} props={props} i={i} />
                                <MediaUploadComponentMulti item={item} props={props} i={i} text={item.title} />
                            </>
                        )
                    })

                }
            </InspectorControls>

            {

                props.attributes.attribute.map((item, i) => {
                    return (
                        <div class="col" >
                            <div class="image-wrapper">
                                <MediaSource media={item.mediaSize} title={item.mediaTITLE} />
                            </div>
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
    );
}

export default edit;