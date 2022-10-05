const {
    PanelColorSettings,
} = wp.blockEditor;


const ContentControl = ({ props, fontColor = true, backgroundColor = true, index = false, text = false }) => {


    function contentBackgroundColor(color) {
        index = index != false ? index : "contentBackgroundColor";
        let obj = Object();
        obj[index] = color;
        props.setAttributes(obj);

    }

    function contentFontColor(color) {
        index = index != false ? index : "contentFontColor";
        let obj = Object();
        obj[index] = color;
        props.setAttributes(obj);

    }

    const index2 = index != false ? index : "contentBackgroundColor";
    const colorSettings = [


    ];

    if (backgroundColor) {
        colorSettings.push({
            value: props.attributes[index2],
            onChange: contentBackgroundColor,
            label: "Background Color",
        })

    }

    if (fontColor) {
        colorSettings.push({
            value: props.attributes.contentFontColor,
            onChange: contentFontColor,
            label: 'Font Color',
        })
    }


    return (

        <div>
            <PanelColorSettings
                title={text ? text : 'Content Color Settings'}
                initialOpen={false}
                colorSettings={colorSettings}
            >

            </PanelColorSettings>



        </div>
    )
}

export default ContentControl;