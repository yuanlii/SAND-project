SVG = undefined;
projection = undefined;

scale = 1;
width = 960;
height = 500;

path = undefined;

// time scoller
// set the dimensions and margins of the graph
margin = { top: 20, right: 20, bottom: 100, left: 50 };
width = 960 - margin.left - margin.right;
height = 500 - margin.top - margin.bottom;
selectorHeight = 40;

// main function starts
window.onload = function() {
  // The svg
  var svg = d3
    .select("#container")
    .append("svg")
    .attr("width", width * scale)
    .attr("height", height * scale);

  SVG = svg;

  // Map and projection
  projection = d3.geoMercator();
  // .scale(120)
  // .translate([width/2, height/2 * 1.3 * scale]);

  // A path generator
  path = d3.geoPath().projection(projection);

  // Load world shape AND list of connection
  d3.queue()
    .defer(
      d3.json,
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    ) // World shape
    .defer(d3.csv, "data/sample_latlng.csv") // Position of circles
    .defer(d3.json, "data/geolocation_sample.geojson")
    // .defer(d3.csv, "data/geolocation.csv")
    .await(ready);

  // TODO: build time selector
    // d3.csv("../data/trace_data_09232019.csv", function(data) {
  d3.csv("../data/traceData_20191001-172706.csv", function(data) {
    console.log(data);
    // main function here
    //   parseData(data);
    scrollBar(data);
  });
};

function transformGeoCoordToPixels(pixelSize, polarBoundaryValue, coordValue) {
  return (
    ((coordValue + polarBoundaryValue) * pixelSize) / (2.0 * polarBoundaryValue)
  );
}

function ready(error, dataGeo, link_data, host_data) {
  // Reformat the list of link. Note that columns in csv file are called long1, long2, lat1, lat2
  var link = [];
  link_data.forEach(function(row) {
    source = [+row.lng1, +row.lat1];
    //   console.log('source:',source)
    target = [+row.lng2, +row.lat2];
    topush = { type: "LineString", coordinates: [source, target] };
    link.push(topush);
  });

  // Initialize Node infoBox
  initializeNodeInfo();

  // Draw the map
  var svg = SVG;
  svg
    .append("g")
    .selectAll("path")
    .data(dataGeo.features)
    .enter()
    .append("path")
    .attr("fill", "#b8b8b8")
    .attr("d", d3.geoPath().projection(projection))
    .style("stroke", "#fff")
    .style("stroke-width", 0);

  // draw the hosts as circles on map
  svg
    .selectAll("circle")
    .data(host_data.features)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("cx", function(d) {
      // console.log("cx", d.geometry.coordinates[0], "->", projection(d.geometry.coordinates)[0] );
      // return projection(d.geometry.coordinates)[0];
      return transformGeoCoordToPixels(width, 180.0, d.geometry.coordinates[0]);
    })
    .attr("cy", function(d) {
      // console.log("cy", d.geometry.coordinates[1], "->", projection(d.geometry.coordinates)[1] );
      // return projection(d.geometry.coordinates)[1];
      return transformGeoCoordToPixels(
        height,
        90.0,
        -d.geometry.coordinates[1]
      );
    })

    .attr("coord", d => {
      return [d.geometry.coordinates[0], d.geometry.coordinates[1]];
    })

    .on("mouseover", function(d) {
      // console.log("just had a mouseover", d3.select(d));
      d3.select(this).classed("active", true);
    })

    // On-click event: display detailed node info
    .on("click", display)
    .on("mouseout", function(d) {
      d3.select(this).classed("active", false);
    });

  // Add the path
  svg
    .selectAll("myPath")
    .data(link)
    .enter()
    .append("path")
    .attr("d", function(d) {
      return path(d);
    })
    .style("fill", "none")
    .style("stroke", "#69b3a2")
    .style("stroke-width", 2)

    .on("mouseover", function(d) {
      // console.log("just had a mouseover on path", d3.select(d));
      d3.select(this)
        //.classed("active",true)
        .classed("highlight", true);
    })

    .on("mouseout", function(d) {
      d3.select(this)
        //.classed("active",false)
        .classed("highlight", false);
    });
}

// Display details of selected host
function display(d) {
  // updateNodeInfo(d.properties.name, color(i));
  console.log(d.properties.name);
  updateNodeInfo(d);
}

// Display detailed info of node when on click
function initializeNodeInfo() {
  var infoBox = d3
    .select("#sequence")
    .append("svg:svg")
    .attr("width", 300)
    .attr("height", 300)
    .attr("id", "infobox");
}

// Update node info
function updateNodeInfo(d) {
  // console.log('update --- ', d);

  var plot = d3
    .select("#infobox")
    .selectAll("g")
    .data([d], function(d) {
      console.log("data", d);
      return d.properties.name;
    });

  // new case
  var entering = plot
    .enter()
    .append("svg:g")
    .append("svg:text")
    .attr("x", 100)
    .attr("y", 100)
    .attr("text-anchor", "middle")
    .text(function(d) {
      console.log("enter text", d.properties.name);
      return d.properties.name;
    })
    .attr("class", "title");

  // remove case
  plot.exit().remove();
}

// TODO - time selector:
function parseData(data) {
  // var parser = d3.timeParse("%y-%m-%d %H:%M:%S");
  var Parser = d3.timeParse("%y-%m-%d");
  var formatTime = d3.timeFormat("%y-%m-%d");

  data.forEach(function(d) {
    var splits = d.timestamp.split(" ");
    t = Parser(splits[0]);
    console.log("formatted time", formatTime(t));
  });
}

// TODO - time selector:
function scrollBar(data) {
  var svg = d3
    // .select("body")
    .select("#sequence")
    .append("svg:svg")
    // .attr("width", width + margin.left + margin.right)
    // .attr("height", height + margin.top + margin.bottom + selectorHeight)
    .attr("width", 900)
    .attr("height", 200)
    .attr("id", "timeScroller");

  // set the ranges
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);

  var diagram = svg.append("g").attr("transform", "translate(0, 50)");

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
    console.log("new data", new_data);

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
    // .attr("transform", "translate(0, " + height + ")")
    .attr("transform", "translate(0, " + 60 + ")")
    .call(xAxis);

  diagram
    .append("rect")
    .attr("transform", "translate(0, 10)")
    .attr("class", "mover")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 40)
    .attr("width", Math.round(parseFloat(20 * width) / data.length))
    .attr("pointer-events", "all")
    .attr("cursor", "ew-resize")
    .call(d3.drag().on("drag", display));
}
