const {
    PanelColorSettings,
} = wp.blockEditor;
import { setattribute } from "../../common/media";

const ContentControlMulti = ({ props, item, i }) => {


    function contentBackgroundColor(color) {
        let attribstate = [...props.attributes.attribute];
        attribstate[i].contentBackgroundColor = color;
        setattribute(attribstate, props);

    }

    function contentFontColor(color) {
        let attribstate = [...props.attributes.attribute];
        attribstate[i].contentFontColor = color;
        setattribute(attribstate, props);

    }




    return (

        <div>
            <PanelColorSettings
                title={'Content Color Settings(' + item.title + ')'}
                initialOpen={false}
                colorSettings={[
                    {
                        value: item.contentBackgroundColor,
                        onChange: contentBackgroundColor,
                        label: 'Background Color (' + item.title + ')',
                    },
                    {
                        value: item.contentFontColor,
                        onChange: contentFontColor,
                        label: 'Text Color (' + item.title + ')',
                    },
                ]}
            >

            </PanelColorSettings>



        </div>
    )
}

export default ContentControlMulti;