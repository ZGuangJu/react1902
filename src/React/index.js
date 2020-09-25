 function createElement(type, config = {}, child) {
    delete config.__self;
    delete config.__source;
    let props = { ...config };
    let childrenLength = arguments.length - 2;
    if (childrenLength > 1) {
        let children = [];
        for (let i = 2; i < arguments.length; i++) {
            children.push(arguments[i]);
        }
        props.children = children;
    } else if (childrenLength === 1) {
        props.children = child;
    }//没儿子就没有children属性
    return {type,props}
}

export default{createElement }