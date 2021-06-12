// from data.js
var tableData = data;

var tbody=d3.select("tbody");
// loop through data and console log each record
data. forEach(function(sightingReport){
    console.log(sightingReport)
});
console.log(tableData.length)
  
  // data.forEach((sightingReport) => {
  //   var row = tbody.append("tr");
  //   Object.entries(sightingReport).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });
  buildTable(tableData);

function filterData(){
  var newData =data;
  var newDate =d3.select("#datetime").property("value")
  if (newDate){
    newData=newData.filter(obj =>obj.datetime===newDate)
  }
  buildTable(newData);
}
function buildTable (data){
  tbody.html("")
  data.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

  d3.select("#filter-btn").on("click", filterData);