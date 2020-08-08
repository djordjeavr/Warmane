am4core.useTheme(am4themes_animated);

angular.module("chart", [])
  .directive("chart", function () {
    return {
      restrict: "E",
      scope: {},
      template: "<div id='chartdiv'></div>",
      replace: true,
      link:function ($scope) {
          
var chart = am4core.create("chartdiv", am4charts.PieChart);
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end
// Add data
chart.legend = new am4charts.Legend();
            
chart.data = [
  {
    race: "Horde",
    players: 501.9
  },
  {
    race: "Aliance",
    players: 481.9
  }
];

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "players";
series.dataFields.category = "race";
$scope.$on("$destroy", function () {
  chart.dispose();
});


      }
    };
    
})
.directive("chart1", function () {
  return {
    restrict: "E",
    scope: {},
    template: "<div id='chartdiv1'></div>",
    replace: true,
    link:function ($scope) {
        
var chart = am4core.create("chartdiv1", am4charts.PieChart);
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end
// Add data
chart.legend = new am4charts.Legend();
          
chart.data = [
{
  race: "Horde",
  players: 501.9
},
{
  race: "Aliance",
  players: 401.9
}
];

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "players";
series.dataFields.category = "race";
$scope.$on("$destroy", function () {
chart.dispose();
});


    }
  };
})
.directive("chart2", function () {
  return {
    restrict: "E",
    scope: {},
    template: "<div id='chartdiv2'></div>",
    replace: true,
    link:function ($scope) {
        
var chart = am4core.create("chartdiv2", am4charts.PieChart);
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end
// Add data
chart.legend = new am4charts.Legend();
          
chart.data = [
{
  race: "Horde",
  players: 501.9
},
{
  race: "Aliance",
  players: 481.9
}
];

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "players";
series.dataFields.category = "race";
$scope.$on("$destroy", function () {
chart.dispose();
});


    }
  };
})
.directive("chart3", function () {
  return {
    restrict: "E",
    scope: {},
    template: "<div id='chartdiv3'></div>",
    replace: true,
    link:function ($scope) {
        
var chart = am4core.create("chartdiv3", am4charts.PieChart);
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end
// Add data
chart.legend = new am4charts.Legend();
          
chart.data = [
{
  race: "Horde",
  players: 301.9
},
{
  race: "Aliance",
  players: 681.9
}
];

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "players";
series.dataFields.category = "race";
$scope.$on("$destroy", function () {
chart.dispose();
});


    }
  };
})
.directive("chart4", function () {
  return {
    restrict: "E",
    scope: {},
    template: "<div id='chartdiv4'></div>",
    replace: true,
    link:function ($scope) {
        
var chart = am4core.create("chartdiv4", am4charts.PieChart);
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end
// Add data
chart.legend = new am4charts.Legend();
          
chart.data = [
{
  race: "Horde",
  players: 481.9
},
{
  race: "Aliance",
  players: 501.9
}
];

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "players";
series.dataFields.category = "race";
$scope.$on("$destroy", function () {
chart.dispose();
});


    }
  };
});
