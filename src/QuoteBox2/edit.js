
import InspectControlWrap from "../components/PanelControl/InspectControlWrap";
import ContentControl from "../components/PanelControl/ContentControl";
import ContentComponent from "../components/ContentComponent";
import { somename } from "../common/media";


const edit = (props) => {
    return (
        <>
            <InspectControlWrap>
                <ContentControl props={props} />
            </InspectControlWrap>
            <div class="wp-block-ngblockplugin-quote-box2 quote-box2" style={{ background: props.attributes.contentBackgroundColor }}>
                <div class="content-wrapper">
                    <div class="content">
                        <h5><ContentComponent props={props} value={props.attributes.quote} onchangevalue={(value) => { somename(props, value, "quote") }} /></h5>
                        <div class="autor">
                            <div class="text">
                                <span>
                                    <strong><ContentComponent props={props} value={props.attributes.quote_name} onchangevalue={(value) => { somename(props, value, "quote_name") }} /></strong><br />
                                    <ContentComponent props={props} value={props.attributes.company} onchangevalue={(value) => { somename(props, value, "company") }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default edit;