var MediaUpload = wp.blockEditor.MediaUpload;
import { setattribute } from '../common/media';
const MediaUploadComponentMulti = ({ props, item, i, text }) => {
    function onSelectImage(media, index) {
        let attribstate = [...props.attributes.attribute];
        attribstate[index].mediaID = media.id;
        attribstate[index].mediaIURL = media.url;
        attribstate[index].mediaALT = media.alt;
        attribstate[index].mediaTITLE = media.title;
        attribstate[index].mediaSize = media.sizes;
        setattribute(attribstate, props);
    }

    function removeImage(event) {
        let index = event.target.getAttribute("index");
        let attribstate = [...props.attributes.attribute];
        attribstate[index].mediaID = null;
        attribstate[index].mediaIURL = null;
        attribstate[index].mediaALT = null;
        attribstate[index].mediaTITLE = null;
        attribstate[index].mediaSize = null;
        setattribute(attribstate, props);
    }

    return (

        <div style={{ textAlign: 'center', borderTop: '.1px solid #777', marginBottom: '10px' }}>
            <h4>
                Upload Image ({text})
            </h4>
            <MediaUpload onSelect={(media) => { onSelectImage(media, i) }}
                allowedTypes={"image"}
                value={item.mediaID} render={({ open }) => (
                    <>
                        {!item.mediaID ?
                            <button onClick={open} className={item.mediaID ? 'image-button' : 'button button-large'}>
                                Upload Image
                            </button>
                            :
                            <button onClick={removeImage} index={i} className={"btn btn-primary image-button"}>Remove Backgorund</button>}


                    </>
                )}
            />


        </div>

    )
}

export default MediaUploadComponentMulti;