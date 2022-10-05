import ContentSide from "../components/FrontComponent/ContentSide";

const save = (props) => {

    return (

        < div className={"wp-block-ngblockplugin-info-box-3 info-box3"} >
            {

                props.attributes.attribute.map((item, i) => {
                    return (
                        <div class="col" style={{ backgroundColor: item.contentBackgroundColor }}>
                            <ContentSide props={item} />
                        </div>
                    )
                })
            }
        </div >
    );
};
export default save;