console.log("E.T.");

const tableData = data
const tbody = d3.select("tbody")

let filters = {}

const resetBtn = d3.select("#clear");

function loadTableRows(data) {
    tbody.html("")  

    data.forEach((row) => {
        const currentRow = tbody.append("tr")  
        Object.values(row).forEach((value) => {
            let cell = currentRow.append("td")
            cell.text(value)
        })
    })
}

const handleClick = () => {
    d3.event.preventDefault()
    let filteredTable = tableData;

    
    let dateInput = d3.select("#datetime").property("value");
   
    console.log(dateInput);
    

    if (dateInput) {
        filteredTable = filteredTable.filter((row) => row.datetime === dateInput)
    } 

    tbody.html("")  

    filteredTable.forEach((row) => {
        let currentRow = tbody.append("tr")  
        Object.values(row).forEach((value) => {
            let cell = currentRow.append("td")
            cell.text(value)
        })
    })
}


d3.selectAll("#submit").on("click", handleClick);
loadTableRows(data);

resetBtn.on("click", () => {
    tbody.html("");
    loadTableRows(data);
    })