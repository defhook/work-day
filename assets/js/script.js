
var displayDate = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")); 
    //document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
   
}


//call function
displayDate(); 
 

$(".saveBtn").on('click', function(){
    console.log("Clicked save button ", $(this)); 
    //grab the hour and description when the save button is clicked 
    var timeStamp =  $(this).siblings('.hour').text(); 
    console.log(timeStamp);
    var descriptionSection = $(this).siblings('.description').val();
    console.log(descriptionSection);
    //save information in localStorage
    localStorage.setItem(timeStamp,descriptionSection); 
});

//page load event
var localStorageVal = localStorage.getItem("9:00 AM"); 
console.log(localStorageVal); 