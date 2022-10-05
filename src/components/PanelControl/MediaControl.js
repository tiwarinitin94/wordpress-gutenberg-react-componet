
import MediaUploadComponent from "../MediaUploadComponent";
const MediaControl = ({ props, text, type = false }) => {
    return (

        <div style={{ textAlign: 'center', borderTop: '.1px solid #777', marginBottom: '10px' }}>
            <h4>
                {text}
            </h4>
            <MediaUploadComponent props={props} type={type} />
        </div>

    )
}

export default MediaControl;