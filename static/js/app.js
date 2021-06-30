// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// display all data
data.forEach((fulltable) => {
    var row = tbody.append("tr");
    Object.entries(fulltable).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#form");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(event => event.datetime === inputValue);

  console.log(filteredData);

//   data.forEach((filteredtable) => {
//     var row = tbody.append("tr");
//     Object.entries(filteredtable).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

};  