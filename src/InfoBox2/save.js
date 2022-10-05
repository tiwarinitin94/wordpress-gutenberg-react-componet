const {
    RichText,
} = wp.blockEditor;
import MediaSource from "../components/MediaSource";
import ButtonFront from "../components/FrontComponent/ButtonFront";
const save = (props) => {

    return (
        <div class="wp-block-ngblockplugin-info-box2 info-box2">
            {



                props.attributes.attribute.map((item, i) => {
                    return (
                        <div class="col">
                            <div class="image-wrapper">
                                <MediaSource media={item.mediaSize} title={item.mediaTITLE} />
                            </div>
                            <div class="content-wrapper" >
                                <div class="content" style={{ backgroundColor: item.contentBackgroundColor, color: item.contentFontColor }}>
                                    <h3><RichText.Content value={item.content}></RichText.Content></h3>
                                    <ButtonFront props={item} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default save;