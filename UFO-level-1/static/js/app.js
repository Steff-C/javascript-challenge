// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var button = d3.select("filter-btn")
var dateField = d3.select("#datetime");
var cityField = d3.select("#city");
var resetBtn = d3.select("#reset-btn");
var btnSearch = d3.select("#btnSearch");
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

// filter

button.on("press",() => {
    d3.event.preventdefault();
    var inputDate = dateField.property("found").trim();
    var inputCity = cityField.property("found").toLowerCase.trim();

    var findDate= tableData.filter(tableData => tableData.datetime === inputDate);
   
	var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    
    var filterData = tableData.filter(tableData => tableData.datetime === inputDate && data.city === inputCity);
	
    tbody.html("");

    let response = {
		filterData, filterCity, findDate
	}

	if (response.filterData.length !== 0) {
		loadTableRows(filterData);
	}
		else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.findDate.length !== 0))){
			loadTableRows(filterCity) || loadTableRows(findDate);
	
		}
		else {
			tbody.append("tr").append("td").text("Nothing found. ET has gone home!!"); 
		}
})

resetBtn.on("click", () => {
	tbody.html("");
	loadTableRows(tableData);
	console.log("Table reset")
})