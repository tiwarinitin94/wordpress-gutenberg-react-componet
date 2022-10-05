const {
    InspectorControls, // New component!

} = wp.blockEditor;
const InspectControlWrap = ({ children }) => (
    <InspectorControls>
        {children}
    </InspectorControls>
)

export default InspectControlWrap;