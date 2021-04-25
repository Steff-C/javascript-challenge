console.log("ET")

// YOUR CODE HERE!

const tableData = data
const tbody = d3.select("tbody")
let filters = {}


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
   
    console.log("Date");
    

    if (dateInput) {
        filteredTable = filteredTable.filter((row) => row.datetime === dateInput)
    }
   
    tbody.html("")  