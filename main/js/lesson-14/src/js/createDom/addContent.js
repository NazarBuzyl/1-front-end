function addContent(node, content) {
    if (!content) return;

    if (typeof content === 'string') {
        node.textContent = content;
    } else if (content.nodeType === 1) {
        node.append(content);
    } else if (Array.isArray(content)) {
        content.forEach(element => {
            addContent(node, element);
        });
    }
}

export default addContent;
