
import InspectControlWrap from "../components/PanelControl/InspectControlWrap";
import ContentControl from "../components/PanelControl/ContentControl";
import MediaSource from "../components/MediaSource";

import MediaUploadComponentMulti from "../components/MediaUploadComponentMulti";
import ContentComponent from "../components/ContentComponent";
import { somename } from "../common/media";


const edit = (props) => {
    return (
        <>
            <InspectControlWrap>
                <ContentControl props={props} />
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <>
                                <MediaUploadComponentMulti item={item} props={props} i={i} text={item.title} />
                            </>
                        )
                    })

                }

            </InspectControlWrap>
            <div class="wp-block-ngblockplugin-quote-box1 quote-box1" style={{ background: props.attributes.contentBackgroundColor }}>
                <div class="col-wrapper">
                    <div class="col image">
                        <MediaSource media={props.attributes.attribute[0].mediaSize} title={props.attributes.attribute[0].mediaTITLE} />
                    </div>
                    <div class="col text">
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
                                    <div class="image">
                                        <MediaSource media={props.attributes.attribute[1].mediaSize} title={props.attributes.attribute[1].mediaTITLE} />
                                        {/* <img src="/wp-content/uploads/2022/07/quote-box-signed.png" alt="*My Name*" title="*My Name*" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default edit;