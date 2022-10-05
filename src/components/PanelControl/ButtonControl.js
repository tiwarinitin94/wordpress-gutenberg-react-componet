const {
    PanelColorSettings,
} = wp.blockEditor;


const ButtonControl = ({ props }) => {
    function changeButtonBackgroundColor(color) {
        props.setAttributes({
            buttonBackgroundColor: color
        });

    }

    function changeButtonFontColor(color) {
        props.setAttributes({
            buttonFontColor: color
        })
    }
    return (

        <div>
            <PanelColorSettings
                title={'Button Color Settings'}
                initialOpen={false}
                colorSettings={[
                    {
                        value: props.attributes.buttonBackgroundColor,
                        onChange: changeButtonBackgroundColor,
                        label: 'Background Color',
                    },
                    {
                        value: props.attributes.buttonFontColor,
                        onChange: changeButtonFontColor,
                        label: 'Text Color',
                    },
                ]}
            >
            </PanelColorSettings>
        </div >
    )
}

export default ButtonControl;