function addClass(node, classList) {
    if (!node || !classList) return;

    node.classList.add(...classList.split(' '));
}

export default addClass;
