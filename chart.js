$(function () {
  $('#container').highcharts({

    chart: {
      type: 'bubble',
      zoomType: 'xy'
    },

    title: {
      text: 'Attendance Punchcard'
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      max: 12-1,
      min: 0
    },
    yAxis: {
      categories: [2010,2011,2012,2013,2014,2015],
      max: 5,
      min: 0
    },
    series: [{
      data: [[1,2,1],[2,2,1],[4,2,1],[4,3,1],[4,5,1],[5,1,1],[5,5,1],[6,4,1],[7,5,1],[8,2,1],[8,4,1],[9,0,2],[9,1,1],[10,3,1],[10,4,1],[11,2,1]],
      maxSize: '10%',
      minSize: 10
    }]

  });

});
