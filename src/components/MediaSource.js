
const MediaSource = ({ media, title }) => {

    {

        return media ?
            (
                <picture>
                    {media.w1200 ? <source media={"(min-width:1200px)"} srcset={media.w1200.url} /> : ""}
                    {media.w992 ? <source media={"(min-width:992px)"} srcset={media.w992.url} /> : ""}
                    {media.w768 ? <source media={"(min-width:768px)"} srcset={media.w768.url} /> : ""}
                    {media.w576 ? <source media={"(min-width:576px)"} srcset={media.w576.url} /> : ""}
                    {media.w320 ? <source media={"(min-width:300px)"} srcset={media.w320.url} /> : ""}
                    <img src={media.full.url} style={{ width: "100%" }} alt={title} title={title} />
                </picture>
            ) : ""
    }

}

export default MediaSource;