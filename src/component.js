const Component = function () {

};

const renderDown = function (node) {
    for ([tag, content] of Object.entries(node)) {
        let style = content.style;
        let children = content.children;

        let thisElement = document.createElement(tag);
        for ([prop, rule] of Object.entries(style)) {
            thisElement.style.prop = rule;
        }

        if (children) {
            children.forEach(childNode => {
                thisElement.appendChild(renderDown(childNode));
            });
        }

        return thisElement;
    }
}

Component.createDOM = function (obj) {
    this.dom = renderDown(obj);
};

Component.prototype.create = function (opts) {
    let { dom, _in, _out } = opts;

    let newComponent = new Component();

    newComoponent.dom = dom;

    newComoponent.renderDOM();
}
