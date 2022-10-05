const {
    RichText,
    InspectorControls, // New component!
    PanelColorSettings,
    BlockControls,
} = wp.blockEditor;
const { __experimentalLinkControl } = wp.blockEditor;
const LinkControl = __experimentalLinkControl;
const { ToolbarButton, ToolbarGroup, } = wp.components
import { linkOff } from '@wordpress/icons';

import { useState, } from '@wordpress/element';
import { setattribute } from '../common/media';





const ButtonMulti = ({ props, item, i }) => {
    const [isUrlSet, setIsUrlSet] = useState(false);
    const [isButtonSelected, setIsButtonSelected] = useState(false);

    function changeButtonText(index, value) {

        let attribstate = [...props.attributes.attribute];
        attribstate[index].button_text = value;
        setattribute(attribstate, props);
    }

    function changeButtonLink(index, value) {
        let attribstate = [...props.attributes.attribute];
        attribstate[index].buttonLink = value.url;
        attribstate[index].buttonNewTab = value.opensInNewTab;
        setattribute(attribstate, props);
    }


    function changeButtonBackgroundColor(color) {
        let attribstate = [...props.attributes.attribute];
        attribstate[i].buttonBackgroundColor = color;
        setattribute(attribstate, props);

    }


    function changeButtonFontColor(color) {
        let attribstate = [...props.attributes.attribute];
        attribstate[i].buttonFontColor = color;
        setattribute(attribstate, props);

    }


    return (

        <div>
            <InspectorControls>
                <div>

                    <PanelColorSettings
                        title={'Button Color Settings (' + item.title + ')'}
                        initialOpen={false}
                        colorSettings={[
                            {
                                value: item.buttonBackgroundColor,
                                onChange: changeButtonBackgroundColor,
                                label: 'Background Color',
                            },
                            {
                                value: item.buttonFontColor,
                                onChange: changeButtonFontColor,
                                label: 'Text Color',
                            },
                        ]}
                    >

                    </PanelColorSettings>


                </div>
            </InspectorControls>


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
                        <LinkControl style={{ backgroundColor: 'white', border: '.1px solid #efefef' }} value={{ url: item.buttonLink, title: item.button_text, opensInNewTab: item.buttonNewTab }} onChange={(e) => { changeButtonLink(i, e); }} />
                        <button className='button button-primary' style={{ marginBottom: '10px', marginRight: '5px' }} onClick={() => { setIsUrlSet(false); setIsButtonSelected(false); }}>Done</button>
                    </div>
                    : ""
            }


            <RichText tagName={'a'} className={"btn btn-typ1"} onClick={() => { setIsButtonSelected(true); }} style={{ backgroundColor: item.buttonBackgroundColor, color: item.buttonFontColor, textDecoration: 'none' }} placeholder={"Enter Button Text here"} value={item.button_text} onChange={(e) => { changeButtonText(i, e) }} />

        </div>
    )
}

export default ButtonMulti;