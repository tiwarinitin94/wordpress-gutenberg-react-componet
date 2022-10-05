var MediaUpload = wp.blockEditor.MediaUpload;

const MediaUploadComponent = ({ props, type = false }) => {

    function onSelectImage(media) {
        console.log(media)
        props.setAttributes({
            mediaID: media.id,
            mediaIURL: media.url,
            mediaALT: media.alt,
            mediaTITLE: media.title,
            mediaSize: media.sizes,
        });
    }

    function removeImage() {
        props.setAttributes({
            mediaID: null,
            mediaIURL: null,
            mediaALT: null,
            mediaTITLE: null,
            mediaSize: null,

        });
    }

    const ALLOWED_TYPE = type ? type : "image";

    return (

        <div>

            <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={ALLOWED_TYPE}
                value={props.attributes.mediaID}
                render={({ open }) => (
                    <>
                        {!props.attributes.mediaID ?
                            <button onClick={open}

                                className={props.attributes.mediaID ?
                                    'image-button' :
                                    'button button-large'}
                            > Upload Image
                            </button>
                            :
                            <button onClick={removeImage} className={"button button-large"} >Remove Media</button>}


                    </>
                )}
            />


        </div>

    )
}

export default MediaUploadComponent;