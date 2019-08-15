
var svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height");

console.log('svg:', svg);

var width = 800;
var height = 800;
var center = [4, 68.6];
var scale = 700;
projection = d3.geoMercator().scale(scale).translate([width / 2, 0]).center(center);
path = d3.geoPath().projection(projection);
svg = d3.select('#map').append('svg')
    .attr('height', height)
    .attr('width', width)
    .style('background', '#C1E1EC');
countries = svg.append("g");
d3.json('europe.json', function(data) {
    countries.selectAll('.country')
    .data(topojson.feature(data, data.objects.europe).features)
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('d', path)  
    return;
});

var source = svg.selectAll('circleOrigin');
          source
          .data([originGeo]).enter()
          .append('circle')
          .attr('cx', function (d) { return projection(d)[0]; })
          .attr('cy', function (d) { return projection(d)[1]; })
          .attr('r', '3px')
          .style('opacity', 1)
          .attr('fill', 'green')
          .attr('class', 'circleOrigin')
          source
          .data([originGeo]).enter()
          .append('circle')
          .attr('cx', function (d) { return projection(d)[0]; })
          .attr('cy', function (d) { return projection(d)[1]; })
          .attr('r', '10px')
          .style('opacity', 0.05)
          .attr('fill', 'black')
          .attr('class', 'circleOrigin')
          .on('mouseover', function (d) {
            tooltip.html('<span style="color:white">' + originName + '</span>')
              .attr('class', 'tooltipOrigin')
              .style('left', projection(d)[0] + 12 + 'px')
              .style('top', projection(d)[1] - 20 + 'px')
              .transition()
              .duration(700)
              .style('opacity', 1)
          })
          .on('mouseout', function (d) {
            tooltip.transition()
              .duration(700)
              .style('opacity', 0)
          });