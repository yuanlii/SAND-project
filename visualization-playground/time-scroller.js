// window.onload = function() {

// set the dimensions and margins of the graph
var margin = { top: 20, right: 20, bottom: 100, left: 50 };
var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;
var selectorHeight = 40;

// load data
d3.csv("trace_data_09232019.csv", function(data) {
  console.log(data);

  // main function here
//   parseData(data);
  scrollBar(data);

});

// };

// TODO: 
function parseData(data) {
  // var parser = d3.timeParse("%y-%m-%d %H:%M:%S");
  var Parser = d3.timeParse("%y-%m-%d");
  var formatTime = d3.timeFormat("%y-%m-%d");

  data.forEach(function(d) {
    var splits = d.timestamp.split(" ");
    t = Parser(splits[0]);
    console.log('formatted time',formatTime(t));
  });
}

// TODO:
function scrollBar(data) {
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + selectorHeight);

  // set the ranges
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);

  var diagram = svg.append("g").attr("transform", "translate(0, 340)");

  var xscale = d3
    .scaleOrdinal()
    .domain(
      data.slice(0, 20).map(function(d) {
        console.log("checking", d.timestamp);
        return d.timestamp;
      })
    )
    .range([0, width], 0.2);

  var xAxis = d3.axisBottom().scale(xscale);

  var displayed = d3
    .scaleQuantize()
    .domain([0, width])
    .range(d3.range(data.length));

  function display() {
    var x = parseInt(d3.select(this).attr("x")),
      nx = x + d3.event.dx,
      w = parseInt(d3.select(this).attr("width")),
      f,
      nf,
      new_data,
      rects;

    if (nx < 0 || nx + w > width) return;
    d3.select(this).attr("x", nx);

    f = displayed(x);
    nf = displayed(nx);

    if (f === nf) return;

    // new_data = data.slice(nf, nf + numBars);
    new_data = data.slice(nf, nf + 20);

    xscale.domain(
      new_data.map(function(d) {
        return d.timestamp;
      })
    );
    diagram.select(".x.axis").call(xAxis);
  }

  diagram
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis);

  diagram
    .append("rect")
    .attr("transform", "translate(0, 150)")
    .attr("class", "mover")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 40)
    .attr("width", Math.round(parseFloat(20 * width) / data.length))
    .attr("pointer-events", "all")
    .attr("cursor", "ew-resize")
    .call(d3.drag().on("drag", display));
}
