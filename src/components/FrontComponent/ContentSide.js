const {
    RichText,
} = wp.blockEditor;

import ButtonFront from "./ButtonFront";
const ContentSide = ({ props }) => {

    return (
        <div class="content">
            <h2><RichText.Content props={props} value={props.content} /></h2>
            <ButtonFront props={props} />
        </div>
    )
}

export default ContentSide;