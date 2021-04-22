// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var button = d3.select("filter-btn")
var inputdate = d3.select("#datetime");
var inputcity = d3.select("#city");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var loadTableRows = (inputData) => {
    tbody.html("");
        inputData.forEach(et_sightings => {
            var row = tbody.append("tr");
            columns.forEach(column => row.append("td").text(et_sightings[column])
            )
        });
}

loadTableRows(tableData);



