function addEvents(node, events) {
    if (!node || !events) return;

    node.addEventListener(events.eventName, events.handler);
}

export default addEvents;
