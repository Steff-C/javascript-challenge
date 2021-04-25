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