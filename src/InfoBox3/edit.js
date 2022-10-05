const {
    InspectorControls, // New component!

} = wp.blockEditor;
import ContentSideInfoBoxMulti from "../components/ContentSideInfoBoxMulti";
import ContentControlMulti from "../components/PanelControl/ContentControlMulti";
const edit = (props) => {



    return (
        <div className={"wp-block-ngblockplugin-info-box-3 info-box3"}>
            <InspectorControls>
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <ContentControlMulti item={item} props={props} i={i} />
                        )
                    })

                }
            </InspectorControls>

            {

                props.attributes.attribute.map((item, i) => {

                    return (
                        <div class="col" style={{ backgroundColor: item.contentBackgroundColor, color: item.contentFontColor }}>
                            <ContentSideInfoBoxMulti props={props} item={item} i={i} />
                        </div>

                    )
                })
            }


        </div>
    );
}

export default edit;