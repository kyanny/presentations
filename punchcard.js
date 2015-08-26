var fullWidth = document.getElementById('graph').offsetWidth;
var graphPadding = 80;
var width = (fullWidth-graphPadding);
var fullHeight = 380;
var height = (fullHeight-30);
var years = [2010,2011,2012,2013,2014,2015];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var palette = d3.select("#graph").append("svg").
    attr("width", fullWidth).
    attr("height", fullHeight);

var yearGroup = palette.append("g");
var monthGroup = palette.append("g");
var circleGroup = palette.append("g");

$(document).ready(function(){
  var data = [[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,2],[0,10,0],[0,11,0],[1,0,0],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,1],[1,6,0],[1,7,0],[1,8,0],[1,9,1],[1,10,0],[1,11,0],[2,0,0],[2,1,1],[2,2,1],[2,3,0],[2,4,1],[2,5,0],[2,6,0],[2,7,0],[2,8,1],[2,9,0],[2,10,0],[2,11,1],[3,0,0],[3,1,0],[3,2,0],[3,3,0],[3,4,1],[3,5,0],[3,6,0],[3,7,0],[3,8,0],[3,9,0],[3,10,1],[3,11,0],[4,0,0],[4,1,0],[4,2,0],[4,3,0],[4,4,0],[4,5,0],[4,6,1],[4,7,0],[4,8,1],[4,9,0],[4,10,1],[4,11,0],[5,0,0],[5,1,0],[5,2,0],[5,3,0],[5,4,1],[5,5,1],[5,6,0],[5,7,1],[5,8,0],[5,9,0],[5,10,0],[5,11,0]];
  x = {
    min:  0,
    max:  width
  }
  x.step = x.max/12;

  y = {
    min:  0,
    max:  height
  }
  y.step = y.max/6;

  var yearText = yearGroup.selectAll("text").data(years).enter().append("text");
  var yearLabel = yearText.attr("x", 0).attr("y", function(d) {
    return y.step*(years.indexOf(d)+1);
  }).text(function(d) {
    return d;
  }).attr("font-family", "sans-serif").attr("font-size", "12px");
  var monthText = monthGroup.selectAll("text").data(months).enter().append("text");
  var monthLabel = monthText.attr("x", function(d) {
    return x.step*(months.indexOf(d)+1);
  }).attr("y", y.max+20).text(function(d) {
    return d;
  }).attr("font-family", "sans-selectAll").attr("font-size", "12px");

  var scaleData = [];

  for (i in data){
    scaleData.push(data[i][2])
  }

  z = {
    data: scaleData
  }
  z.max    = d3.max(z.data)
  z.min    = d3.min(z.data)
  z.domain = [z.min, z.max]
  z.range  = [4, 15]
  z.scale  = d3.scale.linear().
    domain(z.domain).
    range(z.range);

  for (var i in data) {
    tuple = data[i];
    commits = tuple[2];
    if (commits > 0) {
      cy    = y.step*(tuple[0]+1)-5;
      cx    = x.step*(tuple[1]+1)+11;
      r     = z.scale(commits);
      title = "Commits: " + commits;

      c = circleGroup.append("circle")
        .attr("cx",cx)
        .attr("cy",cy)
        .attr("r",r)
        .attr("title",title)
        .attr("class","hover-circle");

    }
  }


});
