const {
    RichText,
} = wp.blockEditor;
import MediaSource from "../components/MediaSource";
const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-quote-box1 quote-box1" style={{ background: props.attributes.contentBackgroundColor }}>
            <div class="col-wrapper">
                <div class="col image">
                    <MediaSource media={props.attributes.attribute[0].mediaSize} title={props.attributes.attribute[0].mediaTITLE} />
                </div>
                <div class="col text">
                    <div class="content-wrapper">
                        <div class="content">
                            <h5><RichText.Content value={props.attributes.quote} /></h5>
                            <div class="autor">
                                <div class="text">
                                    <span>
                                        <strong><RichText.Content value={props.attributes.quote_name} /></strong><br />
                                        <RichText.Content value={props.attributes.company} />
                                    </span>
                                </div>
                                <div class="image">
                                    <MediaSource media={props.attributes.attribute[1].mediaSize} title={props.attributes.attribute[1].mediaTITLE} />
                                    {/* <img src="/wp-content/uploads/2022/07/quote-box-signed.png" alt="*My Name*" title="*My Name*" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default save;