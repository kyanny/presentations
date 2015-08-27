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
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      categories: [2010,2011,2012,2013,2014,2015],
      max: 5,
      min: 0
    },
    series: [{
      data: [[2,2,1],[3,2,1],[5,2,1],[5,3,1],[5,5,1],[6,1,1],[6,5,1],[7,4,1],[8,5,1],[9,2,1],[9,4,1],[10,0,2],[10,1,1],[11,3,1],[11,4,1],[12,2,1]],
      maxSize: '10%',
      minSize: 10
    }]

  });

});
