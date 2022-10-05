const {
    RichText,
} = wp.blockEditor;
import MediaSource from "../components/MediaSource";
const save = (props) => {

    return (
        <div class="wp-block-ngblockplugin-info-box7 info-box7">
            <div class="headline">
                <span><RichText.Content value={props.attributes.headline} /></span>
            </div>
            <div class="col-wrapper">
                {

                    props.attributes.attribute.map((item, i) => {
                        return (
                            <div class="col">
                                <div class="content-wrapper">

                                    <MediaSource media={item.mediaSize} title={item.mediaTITLE} />

                                    <div class="content">
                                        <h4><RichText.Content value={item.head} /></h4>
                                        <p><RichText.Content value={item.text} /></p>
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
                    }

                    )

                }

            </div>
        </div>



        // <div class="wp-block-ngblockplugin-info-box7 info-box7">
        //     {



        //         props.attributes.attribute.map((item, i) => {
        //             return (
        //                 <div class="col">
        //                     <div class="image-wrapper">
        //                         <MediaSource media={item.mediaSize} title={item.mediaTITLE} />
        //                     </div>
        //                     <div class="content-wrapper" >
        //                         <div class="content" style={{ backgroundColor: item.contentBackgroundColor, color: item.contentFontColor }}>
        //                             <h3><RichText.Content value={item.content}></RichText.Content></h3>
        //                             <ButtonFront props={item} />
        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //         })
        //     }
        // </div>
    );
};
export default save;