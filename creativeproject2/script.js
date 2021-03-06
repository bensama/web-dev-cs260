document.getElementById("getData").addEventListener("click", function(event) {
    event.preventDefault();
    const index = document.getElementById("holidayInput").value  - 1;
    if (index === "")
      return;
    console.log(index);
    
    const url = "https://holidayapi.com/v1/holidays?key=eb712744-fe40-4d17-8ec6-a51606817502&country=US&year=2018&pretty";
    
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {	
        console.log(json);
    
        let results = "";
      results += '<h2>' + json.holidays[index].name + '</h2>';
      results += "<p>Date: " + json.holidays[index].date + "</p>";
      results += "<p>Observed Publicly: " 
      if (json.holidays[index].public == true) {
        results += "Yes";
      }
      else {
        results += "No";
      }
      results += "</p>";
      
      document.getElementById("results").innerHTML = results;
      });
      
});
