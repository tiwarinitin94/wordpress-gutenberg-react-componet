const {
    RichText,
    BlockControls,
} = wp.blockEditor;
const { __experimentalLinkControl } = wp.blockEditor;
const LinkControl = __experimentalLinkControl;
const { ToolbarButton, ToolbarGroup, } = wp.components
import { linkOff } from '@wordpress/icons';

import { useState, } from '@wordpress/element';


const ButtonComponent = ({ props, text }) => {
    const [isUrlSet, setIsUrlSet] = useState(false);
    const [isButtonSelected, setIsButtonSelected] = useState(false);

    function changeButtonText(value) {
        props.setAttributes({ button_text: value, });
    }

    function changeButtonLink(value) {
        console.log(value);
        props.setAttributes({ buttonLink: value.url, buttonNewTab: value.opensInNewTab });

    }




    return (

        <div >

            {
                isButtonSelected ?
                    <BlockControls>
                        <ToolbarGroup>
                            <ToolbarButton
                                icon={linkOff}
                                label="Edit"
                                title="Edit Link"
                                onClick={() => {
                                    setIsUrlSet(true);
                                }}

                            />
                            {/* <URLInput onChange={changeButtonLink} /> */}
                        </ToolbarGroup>
                    </BlockControls> : ""
            }
            {
                isUrlSet ?
                    <div style={{ backgroundColor: '#fff', border: '.1px solid #000', zIndex: '999', textAlign: 'right', position: 'relative' }}>
                        <LinkControl style={{ backgroundColor: 'white', border: '.1px solid #efefef' }} value={{ url: props.attributes.buttonLink, title: props.attributes.button_text, opensInNewTab: props.attributes.buttonNewTab }} onChange={changeButtonLink} />
                        <button className='button button-primary' style={{ marginBottom: '10px', marginRight: '5px' }} onClick={() => { setIsUrlSet(false); setIsButtonSelected(false); }}>Done</button>
                    </div>
                    : ""
            }


            <RichText tagName={'a'} className={"btn btn-typ1"} onClick={() => { setIsButtonSelected(true); }} style={{ backgroundColor: props.attributes.buttonBackgroundColor, color: props.attributes.buttonFontColor }} placeholder={"Enter Button Text here"} value={props.attributes.button_text} onChange={changeButtonText} />

        </div >
    )
}

export default ButtonComponent;