export function setattribute(value, props) {
    props.setAttributes({ attribute: value })
}

export function somename(props, value, index = false) {
    index = index != false ? index : "content";
    let obj = Object();
    obj[index] = value;
    props.setAttributes(obj);
}

export function somenamemulti(value, index, props, changeindex = false) {
    let attribstate = [...props.attributes.attribute];
    changeindex = changeindex != false ? changeindex : "content";
    attribstate[index][changeindex] = value;
    setattribute(attribstate, props);
    console.log(props);
}

export function moveSlide(e, side, props) {
    let value = e.target.getAttribute('index');

    if (value <= 0 && side === "up") {
        console.log("Can't go more up");
    } else if (value >= props.attributes.attribute.length - 1 && side == "down") {
        console.log("Can't go more down");
    } else {
        let attribstate = [...props.attributes.attribute];
        let temp = null
        if (side === "up") {
            temp = attribstate[value - 1];
            attribstate[value - 1] = attribstate[value];
        } else {
            temp = attribstate[parseInt(value) + 1];

            attribstate[parseInt(value) + 1] = attribstate[value];
        }

        attribstate[value] = temp;
        setattribute(attribstate, props);

    }
}

export function addNewItem(props, object) {
    let attribstate = [...props.attributes.attribute];
    attribstate.push(object);
    setattribute(attribstate, props);
}




export const playVideo = (e) => {

    let x = document.getElementById('iframe_id');

    let attr = x.getAttribute('src');

    let middle = attr.indexOf("?") > -1 ? "&" : "?";

    attr = attr + middle + "autoplay=1"
    x.setAttribute('src', attr);

}