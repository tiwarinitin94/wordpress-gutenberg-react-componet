import { ToggleControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

const ToggleControlComponent = ({ props, text = false }) => {
    const [hasFixedBackground, setHasFixedBackground] = useState(props.attributes.rhsEnable);
    useEffect(() => {
        props.setAttributes({
            rhsEnable: false,
        });
    }, [])
    useEffect(() => {
        props.setAttributes({
            rhsEnable: hasFixedBackground
        });

        console.log(props);
    }, [hasFixedBackground])


    return (
        <div style={{ textAlign: 'center', borderTop: '.1px solid #777', padding: '5% 0% 0% 15%' }}>
            <ToggleControl
                label={text ? text : "Switch Media Position"}

                checked={props.attributes.rhsEnable}
                onChange={() => {
                    setHasFixedBackground((state) => !state);
                }}

            />
        </div>
    );
};

export default ToggleControlComponent;