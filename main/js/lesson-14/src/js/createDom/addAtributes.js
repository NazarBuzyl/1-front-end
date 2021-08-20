function addAtributes(node, options) {
    if (!options || !node) return;

    for (let key in options) {
        node.setAttribute(key, options[key]);
    }
}

export default addAtributes;
