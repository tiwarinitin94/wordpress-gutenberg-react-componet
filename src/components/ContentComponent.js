const {
    RichText,
} = wp.blockEditor;

const ContentComponent = ({ props, onchangevalue, value = false }) => {
    return (

        <div>
            <RichText placeholder={"Enter Text here"} style={{ color: props.attributes.contentFontColor }} onChange={onchangevalue} value={value ? value : props.attributes.content} />
        </div >
    )
}

export default ContentComponent;