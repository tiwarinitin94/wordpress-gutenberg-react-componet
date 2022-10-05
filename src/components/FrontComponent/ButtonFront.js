const ButtonFront = ({ props }) => {
    return (

        props.buttonLink && props.buttonLink.trim() != "" ? <a target={props.buttonNewTab ? "_blank" : ""} rel="noopener noreferrer" href={props.buttonLink} style={{ 'backgroundColor': props.buttonBackgroundColor, color: props.buttonFontColor }} title={props.button_text} className={"btn btn-typ1"}>{props.button_text}</a> : ""


    );
}

export default ButtonFront;