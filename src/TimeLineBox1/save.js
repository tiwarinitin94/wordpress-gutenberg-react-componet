const {
    RichText,
} = wp.blockEditor;
import MediaSource from "../components/MediaSource";


const save = (props) => {
    return (

        <div class="wp-block-ngblockplugin-timeline-box timeline-box">

            <div class="content-wrapper">

                <MediaSource media={props.attributes.mediaSize} title={props.attributes.mediaTITLE} />
                <div class="headline-wrapper">

                    <h4><RichText.Content value={props.attributes.heading} /></h4>
                </div>
            </div>
            <div class="timeline-wrapper">
                {
                    props.attributes.attribute.map((item, i) => {
                        return (
                            <div>
                                <div class="timeline-item">
                                    <div class="col-left">
                                        <p><RichText.Content value={item.col_left} /></p>
                                    </div>
                                    <div class="col-right">
                                        <p><RichText.Content value={item.col_right} /></p>
                                    </div>

                                </div>

                            </div>

                        )
                    })
                }

            </div>

        </div >

    );
}

export default save;