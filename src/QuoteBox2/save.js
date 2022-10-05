const {
    RichText,
} = wp.blockEditor;
import MediaSource from "../components/MediaSource";
const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-quote-box2 quote-box2" style={{ background: props.attributes.contentBackgroundColor }}>
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
                    </div>
                </div>
            </div>
        </div>

    );
}

export default save;