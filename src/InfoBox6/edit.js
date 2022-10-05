
import { somenamemulti } from "../common/media";
const {
    InspectorControls,
} = wp.blockEditor;
import ContentComponentMulti from "../components/ContentComponentMulti";
import ContentControlMulti from "../components/PanelControl/ContentControlMulti";

const edit = (props) => {

    return (
        <div class="wp-block-ngblockplugin-info-box6 info-box6">
            <InspectorControls>

                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <>
                                <ContentControlMulti item={item} props={props} i={i} />

                            </>
                        )
                    })

                }
            </InspectorControls>


            <div className="col-wrapper">
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <div class="col" >
                                <div class="content" style={{ backgroundColor: item.contentBackgroundColor, color: item.contentFontColor }}>
                                    <h3><ContentComponentMulti item={item} props={props} value={item.heading} onchangevalue={(value) => { somenamemulti(value, i, props, "heading") }}></ContentComponentMulti></h3>
                                    <p><ContentComponentMulti item={item} props={props} value={item.text} onchangevalue={(value) => { somenamemulti(value, i, props, "text") }} /></p>
                                </div>
                            </div>

                        )

                    })
                }
            </div>

        </div>
    );
}

export default edit;