const {
    InspectorControls,
} = wp.blockEditor;
import ButtonMulti from "../components/ButtonMulti";
import MediaSource from "../components/MediaSource";
import { somenamemulti, somename } from "../common/media";
import ContentComponentMulti from "../components/ContentComponentMulti";
import ContentControlMulti from "../components/PanelControl/ContentControlMulti";
import MediaUploadComponentMulti from "../components/MediaUploadComponentMulti";
import ContentComponent from "../components/ContentComponent";

const edit = (props) => {


    console.log(props);

    return (

        <div className="wp-block-ngblockplugin-info-box7 info-box7">
            <InspectorControls>
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <>
                                <ContentControlMulti item={item} props={props} i={i} />
                                <MediaUploadComponentMulti item={item} props={props} i={i} text={item.title} />
                            </>
                        )
                    })

                }
            </InspectorControls>

            <div className="headline">
                <span><ContentComponent props={props} value={props.attributes.headline} onchangevalue={(value) => { somename(props, value, "headline") }} /></span>
            </div>
            <div className="col-wrapper">
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <div className="col">
                                <div className="content-wrapper">

                                    <MediaSource media={item.mediaSize} title={item.mediaTITLE} />

                                    <div className="content">
                                        <h4><ContentComponentMulti item={item} props={props} value={item.head} onchangevalue={(value) => { somenamemulti(value, i, props, "head") }}></ContentComponentMulti></h4>
                                        <p><ContentComponentMulti item={item} props={props} value={item.text} onchangevalue={(value) => { somenamemulti(value, i, props, "text") }}></ContentComponentMulti></p>
                                        <ButtonMulti props={props} item={item} i={i} />
                                        <a href={item.buttonLink} title={item.button_text} class="link">

                                            <span className="btn btn-typ2" style={{ backgroundColor: "#fcb900" }}>
                                                <img alt="demo text" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMi40MjUiIGhlaWdodD0iMzIuMjI1IiB2aWV3Qm94PSIwIDAgMzIuNDI1IDMyLjIyNSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1hcnJvdy1jaXJjbGUtcmlnaHQiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWFycm93LWNpcmNsZS1yaWdodCIgZD0iTTIzLjA5MSwxNS4zMjhsNy43NjMsNy40NDRIMTIuMDc5QTIuNDYyLDIuNDYyLDAsMCwwLDkuNjExLDI1LjI0djEuNjQ1YTIuNDYyLDIuNDYyLDAsMCwwLDIuNDY4LDIuNDY4SDMwLjg1NEwyMy4wOTEsMzYuOGEyLjQ3MSwyLjQ3MSwwLDAsMC0uMDQxLDMuNTI3bDEuMTMxLDEuMTIxYTIuNDU4LDIuNDU4LDAsMCwwLDMuNDg2LDBMNDEuMzExLDI3LjgxYTIuNDU4LDIuNDU4LDAsMCwwLDAtMy40ODZMMjcuNjY3LDEwLjY3YTIuNDU4LDIuNDU4LDAsMCwwLTMuNDg2LDBMMjMuMDUsMTEuNzkxYTIuNDgzLDIuNDgzLDAsMCwwLC4wNDEsMy41MzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS42MTEgLTkuOTQ1KSIgZmlsbD0iIzI2MjYyNiIvPgo8L3N2Zz4K" />
                                            </span>
                                            {item.button_text}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
        // <div class="wp-block-ngblockplugin-info-box7 info-box7">


        //         {

        //     props.attributes.attribute.map((item, i) => {
        //         return (
        //             <div class="col" >
        //                 <div class="image-wrapper">
        //                     <MediaSource media={item.mediaSize} title={item.mediaTITLE} />
        //                 </div>
        //                 <div class="content-wrapper">
        //                     <div class="content" style={{ backgroundColor: item.contentBackgroundColor, color: item.contentFontColor }}>
        //                         <h3><ContentComponentMulti item={item} props={props} onchangevalue={(value) => { somenamemulti(value, i, props) }}></ContentComponentMulti></h3>
        //                         <ButtonMulti props={props} item={item} i={i} />
        //                         {/* <a href={item.buttonLink} title={item.button_text} class="btn btn-typ1">{item.button_text}</a> */}
        //                     </div>
        //                 </div>
        //             </div>

        //         )

        //     })
        // }


        // </div>
    );
}

export default edit;