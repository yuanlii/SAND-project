SVG = undefined;
projection = undefined;

scale = 1;
width = 960;
height = 500;

path = undefined;

window.onload = function() {
    // The svg
    var svg = d3.select("#container").append("svg")
        .attr("width", width * scale)
        .attr("height", height * scale);

    SVG = svg;

    // Map and projection
    projection = d3.geoMercator()
    // .scale(120)
    // .translate([width/2, height/2*1.3]);
    // .translate([width/2, height/2 * 1.3 * scale]);

    // A path generator
    path = d3.geoPath()
    .projection(projection);


    // Load world shape AND list of connection
    d3.queue()
    .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")  // World shape
    .defer(d3.csv, "data/sample_latlng.csv") // Position of circles
    .defer(d3.json, "data/geolocation_sample.geojson")
    // .defer(d3.csv, "data/geolocation.csv")
    .await(ready);
}


function transformGeoCoordToPixels(pixelSize, polarBoundaryValue, coordValue) {
    return (coordValue + polarBoundaryValue) * pixelSize / (2.0 * polarBoundaryValue)
}


function ready(error, dataGeo, link_data, host_data) {
    // Reformat the list of link. Note that columns in csv file are called long1, long2, lat1, lat2
    var link = []
    link_data.forEach(function(row){
      source = [+row.lng1, +row.lat1]
      console.log('source:',source)
      target = [+row.lng2, +row.lat2]
      topush = {type: "LineString", coordinates: [source, target]}
      link.push(topush)
    })

    // TODO
    initializeNodeInfo()

    // Draw the map
    var svg = SVG;
    svg.append("g")
    .selectAll("path")
    .data(dataGeo.features)
    .enter().append("path")
        .attr("fill", "#b8b8b8")
        .attr("d", d3.geoPath()
            .projection(projection)
        )
        .style("stroke", "#fff")
        .style("stroke-width", 0);


    // draw the hosts as circles on map
    svg.selectAll("circle")
        .data(host_data.features)
        .enter().append("circle")
        .attr('r',5)
        .attr('cx',function(d) {
                console.log("cx", d.geometry.coordinates[0], "->", projection(d.geometry.coordinates)[0] );
                // return projection(d.geometry.coordinates)[0];
                return transformGeoCoordToPixels(width, 180.0, d.geometry.coordinates[0]);
            }
        )
        .attr('cy',function(d) {
                console.log("cy", d.geometry.coordinates[1], "->", projection(d.geometry.coordinates)[1] );
                // return projection(d.geometry.coordinates)[1];
                return transformGeoCoordToPixels(height, 90.0, -d.geometry.coordinates[1]);
            })
        
        .attr('coord', (d) => {
                return [d.geometry.coordinates[0], d.geometry.coordinates[1]];
            })
        
        .on("mouseover",function(d) {
            // console.log("just had a mouseover", d3.select(d));
            d3.select(this)
                .classed("active",true)
            })
        
        // TODO: do something: when click on node

        // .on("click", function(d) {
        //     console.log("clicked on node", d3.select(d));
        //     d3.select(this)
        // })
        .on("click", display) //TODO: display
        .on("mouseout",function(d){
            d3.select(this)
                .classed("active",false)
        })
        

    // Add the path
    svg.selectAll("myPath")
        .data(link)
        .enter()
        .append("path")
        .attr("d", function(d){ return path(d)})
        .style("fill", "none")
        .style("stroke", "#69b3a2")
        .style("stroke-width", 2)

        .on("mouseover",function(d) {
            // console.log("just had a mouseover on path", d3.select(d));
            d3.select(this)
                //.classed("active",true)
                .classed("highlight",true)
            })

        .on("mouseout",function(d){
            d3.select(this)
                //.classed("active",false)
                .classed("highlight",false)
    

        })

}




// TODO: display details of selected host
function display(d) {
    // updateNodeInfo(d.properties.name, color(i));
    console.log(d.properties.name)
    updateNodeInfo2(d);  
}



// TODO: show detailed info of node when on click
function initializeNodeInfo() {
    var infoBox = d3.select('#sequence').append("svg:svg")
        .attr("width", 300)
        .attr("height", 300)
        .attr("id", "infobox")
            // .append("svg:g") 
        //     .attr("transform", "translate(0, 0)")
        //     .attr("id","infoBox");
    
        // infoBox.append("svg:text")
        // .attr("dy", ".35em")
        // .attr("text-anchor", "middle")
        // .text("Place holder")
        // .attr("class","title")
        // ;	
}


// TODO:
// function datasetBarChosen(data) {  // only choose data that is selected
//     var ds = [];
//     // d.properties.name
// 	for (x in datasetBarChart) {  
// 		 if(datasetBarChart[x].group==group){
// 		 	ds.push(datasetBarChart[x]);
// 		 } 
// 		}
// 	return ds;
// }


// trial: update node info 
function updateNodeInfo2(d){
    console.log('update --- ', d);

    var plot = d3.select("#infobox")
        .selectAll("g")
        .data([d], function(d) {
            console.log('data', d)
            return d.properties.name; 
        })
            // .select(".title")
            //     .text(function(d){
            //         console.log('update text', d.properties.name);
            //         return d.properties.name;
            //     })
                
    // update case
    // plot. -> ...

    // new case
    var entering = plot.enter()
        .append("svg:g")
            .append("svg:text")
                // .attr("dy", ".35em")
                .attr("x", 100)
                .attr("y", 100)
                .attr("text-anchor", "middle")
                .text(function(d){
                    console.log('enter text', d.properties.name);
                    return d.properties.name;
                })
                .attr("class","title");
    
    
    // entering.append("svg:svg")
    //         .attr("points") 

    // remove case
    plot.exit()
        .remove();
    
    // d3.select("#infoBox")
    // .style("visibility", "");



}



// TODO:
// function updateNodeInfo(group, colorChosen) { 
function updateNodeInfo(d) { 
    // var currentDatasetBarChart = datasetBarChosen(group);

    // var plot = d3.select("#infoBox")
        //    .datum(currentDatasetBarChart); 

    var g = d3.select("#infoBox")
    .selectAll("g")
    // .data(nodeArray, function(d) { return d.host; }); 
    // .data(currentDatasetBarChart, function(d) { return d.properties.name; }); 
    .data(d, function(d) { return d.properties.name; }); 

    // Add breadcrumb and label for entering nodes.
    var entering = g.enter().append("svg:g");
  
    entering.append("svg:svg")
        // .attr("points", breadcrumbPoints)
        .attr("points") 
        // .style("fill", function(d) { return colors[d.host]; });

    // Make the breadcrumb trail visible, if it's hidden.
    d3.select("#infoBox")
    .style("visibility", "");

}








