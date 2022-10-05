const { RichText, } = wp.blockEditor;
import ButtonFront from "../components/FrontComponent/ButtonFront";

const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-content-box1 content-box1" style={{ backgroundColor: props.attributes.contentBackgroundColor }}>
            <div class="content-wrapper">
                <div class="content">
                    <h2><RichText.Content value={props.attributes.headline} /></h2>
                    <div class="col-wrapper">
                        <div class="col">
                            <p><RichText.Content value={props.attributes.text} /></p>
                        </div>
                        <div class="col">
                            <p><RichText.Content value={props.attributes.text2} /></p>
                        </div>
                    </div>
                    <ButtonFront props={props.attributes} />
                    <p><RichText.Content value={props.attributes.subtext} /></p>
                </div>
            </div>
        </div>
    );
};
export default save;