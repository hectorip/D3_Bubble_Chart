
var bubbleGraph = function(){
    var width = 800,
        height =400;

    function graph(element){
        true;
    }

    graph.width = function(val){
        if(!arguments.length) return width;
        width = val;

        return graph;
    }

    graph.height = function(val){
        if(!arguments.length) return height;
        height = val;
        return graph;
    }

    return graph;
}
