const {
    RichText,
} = wp.blockEditor;

const ContentComponentMulti = ({ props, item, onchangevalue, value = false }) => {

    return (

        <div>
            <RichText placeholder={"Enter Text here"} style={{ color: item.contentFontColor }} onChange={onchangevalue} value={value ? value : item.content} />
        </div >
    )
}

export default ContentComponentMulti;