const {
    RichText,
} = wp.blockEditor;
import ButtonFront from "../components/FrontComponent/ButtonFront";
import MediaSource from "../components/MediaSource";
const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-info-box4 info-box4">
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
                                        <h3><RichText.Content value={item.content}></RichText.Content></h3>
                                        <ButtonFront props={item} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
export default save;