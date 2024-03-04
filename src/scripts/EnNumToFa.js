function EnNumToFa(node) { 
    if (node.nodeType == 3) {
        // Do your replacement here
        node.data = node.data.replace(/\d/g,convert);
    }
        
    // Also replace text in child nodes
    for (var i = 0; i < node.childNodes.length; i++) {
        EnNumToFa(node.childNodes[i]); 
    }
}
    

function convert(a){
    return ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'][a];
}

export default EnNumToFa