// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $timeInput = document.querySelector('#date');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);


var filteredData = data;
var tableLimit = 30;
// Without a set table length, the initial table will create massive lag and possibly crash your browser
// Fill the empty table with data from the data file
function renderTable() {
    $tbody.innerHTML = '';
    for (var i = 0; i < tableLimit; i++) {
      // Get get the current data object and its fields
      var data = filteredData[i];
      var fields = Object.keys(data);
      // Create a new row in the tbody, set the index to be i + startingIndex
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        // For every field in the data object, create a new cell at set its inner text to be the current value at the current address's field
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = data[field];
      }
    }
  }

  function handleSearchButtonClick() {
    var filterTime = $timeInput.value.trim();
    filteredData = data.filter(function(data) {
      var dataDate = data.datetime;
      return dataDate === filterTime;
    });

    renderTable();
    };
  renderTable();
// As a bonus, add a method to make the enter key function as a submit button as well
document.onkeypress=function(){
    if(event.keyCode==13){
                handleSearchButtonClick();

    }
};   
