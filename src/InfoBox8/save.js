const { RichText, } = wp.blockEditor;

const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-info-box8 info-box8" style={{ backgroundColor: props.attributes.contentBackgroundColor }}>

            <div class="content-wrapper">
                <div class="content">
                    <h3 style={{ color: props.attributes.headlineContentColor }}><RichText.Content value={props.attributes.headline} /></h3>
                    <RichText.Content tagName={"ul"} style={{ color: props.attributes.textContentColor }} value={props.attributes.text} />
                </div>
            </div>
        </div>
    );
};
export default save;