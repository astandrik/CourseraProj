var fs = require("fs")

var arr = fs.readFileSync("C:/Work/test.txt", "utf8").split('\r\n');

var vertices = [];
arr.forEach(function(v) {
    var a = v.split(' ').map(function(item) { return parseInt(item); });
    if(!vertices[a[1]]) {
         vertices[a[1]] = {arcs : [], visited: false};
    }    
    if(!vertices[a[0]]) {
        vertices[a[0]] = {arcs : [a[1]], visited: false};
    } else {
        vertices[a[0]].arcs.push(a[1]);
    }
});
console.log(vertices);

function DFS(vertices, src) {
    var stack = [];
    vertices[src].visited = true;
    var arcs = vertices[src].arcs;
    for(var i = 0; i < arcs.length; i++) {
        if(!vertices[arcs[i]].visited) {
            vertices[arcs[i]].visited = true;
            DFS(vertices, arcs[i]);
        }
    }
}

DFS(vertices, 1);

