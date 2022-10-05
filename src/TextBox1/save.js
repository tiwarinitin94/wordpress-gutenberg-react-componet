const {
    RichText,
} = wp.blockEditor;


const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-text-box-1 text-box-1" style={{ background: props.attributes.contentBackgroundColor }}>

            <div class="col">
                <div class="content-wrapper" style={{ color: props.attributes.LeftBackground }}>
                    <h3> <RichText.Content value={props.attributes.heading} /></h3>
                </div>
            </div>
            <div class="col" >
                <div class="content-wrapper" style={{ color: props.attributes.RightBackground }}>
                    <RichText.Content value={props.attributes.para} />
                </div>
            </div>
        </div>

    );
}

export default save;