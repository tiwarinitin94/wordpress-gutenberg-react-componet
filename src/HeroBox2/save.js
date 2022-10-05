const { RichText } = wp.blockEditor;
const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-hero-box2 hero-box2" style={{ background: props.attributes.contentBackgroundColor }}>

            <div class="content-wrapper" >
                <div class="content">
                    <h1><RichText.Content value={props.attributes.header} /></h1>
                    <p><RichText.Content value={props.attributes.small_content} /></p>
                </div>
            </div>
        </div>
    );
};
export default save;