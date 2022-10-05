const { RichText, } = wp.blockEditor;
const save = (props) => {
    return (
        <div class="wp-block-ngblockplugin-info-box6 info-box6">

            <div className="col-wrapper">
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <div class="col" >
                                <div class="content" style={{ backgroundColor: item.contentBackgroundColor, color: item.contentFontColor }}>
                                    <h3><RichText.Content value={item.heading} /></h3>
                                    <p><RichText.Content value={item.text} /></p>
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