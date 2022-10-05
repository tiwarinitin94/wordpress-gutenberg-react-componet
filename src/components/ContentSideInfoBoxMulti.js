import ButtonMulti from "./ButtonMulti";

import { somenamemulti } from "../common/media";
import ContentComponentMulti from "./ContentComponentMulti";
const ContentSideInfoBoxMulti = ({ props, item, i }) => {
    return (
        <div class="content">
            <h2><ContentComponentMulti item={item} props={props} onchangevalue={(value) => { somenamemulti(value, i, props) }}></ContentComponentMulti></h2>
            <ButtonMulti props={props} item={item} i={i} />
            <a href={item.buttonLink} title={item.button_text} class="btn btn-typ2"><img alt={item.button_text} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMi40MjUiIGhlaWdodD0iMzIuMjI1IiB2aWV3Qm94PSIwIDAgMzIuNDI1IDMyLjIyNSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1hcnJvdy1jaXJjbGUtcmlnaHQiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWFycm93LWNpcmNsZS1yaWdodCIgZD0iTTIzLjA5MSwxNS4zMjhsNy43NjMsNy40NDRIMTIuMDc5QTIuNDYyLDIuNDYyLDAsMCwwLDkuNjExLDI1LjI0djEuNjQ1YTIuNDYyLDIuNDYyLDAsMCwwLDIuNDY4LDIuNDY4SDMwLjg1NEwyMy4wOTEsMzYuOGEyLjQ3MSwyLjQ3MSwwLDAsMC0uMDQxLDMuNTI3bDEuMTMxLDEuMTIxYTIuNDU4LDIuNDU4LDAsMCwwLDMuNDg2LDBMNDEuMzExLDI3LjgxYTIuNDU4LDIuNDU4LDAsMCwwLDAtMy40ODZMMjcuNjY3LDEwLjY3YTIuNDU4LDIuNDU4LDAsMCwwLTMuNDg2LDBMMjMuMDUsMTEuNzkxYTIuNDgzLDIuNDgzLDAsMCwwLC4wNDEsMy41MzdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOS42MTEgLTkuOTQ1KSIgZmlsbD0iIzI2MjYyNiIvPgo8L3N2Zz4K" /></a>
        </div>
    )
}

export default ContentSideInfoBoxMulti;