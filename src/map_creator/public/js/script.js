$(document).ready(function () {
    // create a wrapper around native canvas element (with id="c")
    var canvas = new fabric.Canvas('c', { selection: false, width: 900, height: 600 });

    // "add" rectangle onto canvas
    var c1 = makeCircle(100, 100);
    var c2 = makeCircle(200, 200);
    

    canvas.add(c1);
    canvas.add(c2);
    var line = makeLine(c1, c2);
    canvas.add(line);

     
    function makeCircle(left, top) {
        var c = new fabric.Circle({
            left: left,
            top: top,
            strokeWidth: 5,
            radius: 7,
            fill: '#fff',
            stroke: '#666',
            originX: "center",
            originY: "center"
        });
        c.hasControls = c.hasBorders = false;
        c.lines = [];
        c.type = "circle";
        return c;    
    }

    function addLine(circle, line) {
        circle.lines.push(line);
        //console.log(circle.lines);
    }

    function makeLine(c1, c2) {
        var line = new fabric.Line([c1.left, c1.top, c2.left, c2.top], {
            fill: 'red',
            stroke: 'red',
            strokeWidth: 5,
            selectable: false
        });
        line.hasControls = line.hasBorders = false;
        line.c1 = c1;
        line.c2 = c2;
        line.type = "line";
        return line;
    }

    canvas.forEachObject(function (obj) {
        console.log(obj.type);
        if (obj.type == "line") {
            obj.sendToBack();
        }
        
    });

    canvas.on("object:selected", function (e) {
        console.log(e);
    });

    canvas.on("mouse:click", function (e) {
        var x = e.e.clientX;
        var y = e.e.clientY;

        console.log(e);
        if (MODE == JUNCTION) {
            var circle = makeCircle(x, y);
            canvas.add(circle);
        }
    })    
    var MODE;
    const JUNCTION = 0;
    const ROAD = 1;
    var j1 = null;
    var j2 = null;
    // Button event listeners
    $("#addJunction").click(function () {
        MODE = JUNCTION;
    });

    $("#addRoad").click(function () {
        MODE = ROAD;
    });
});