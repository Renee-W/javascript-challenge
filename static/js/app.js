// from data.js
var tableData = data;

var tbody=d3.select("tbody");
// console log the data from data.js
console.log(data);

// loop through data and console log each record
data. forEach(function(sightingReport){
    console.log(sightingReport)
});

//append row for each report
data.forEach(function(sightingReport){
    console.log(sightingReport);
    var row=tbody.append("tr")
});

data.forEach(function(sightingReport) {
    console.log(sightingReport);
    var row = tbody.append("tr");
 
   Object.entries(sightingReport).forEach(function([key, value]) {
     console.log(key, value);
   });
 });

 data.forEach(function(sightingReport) {
    console.log(sightingReport);
    var row = tbody.append("tr");
  
    Object.entries(sightingReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the report object
      var cell = row.append("td");
    });
  });

  data.forEach(function(sightingReport) {
    console.log(sightingReport);
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
  data.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });