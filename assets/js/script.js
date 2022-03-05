
var displayDate = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY")); 
    //document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}

var timeArray = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]


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
for (let i=0; timeArray.length; i++){
    console.log(timeArray[i])
    console.log(localStorage.getItem(timeArray[i]))
}




//page load event
var localStorageVal = localStorage.getItem("9:00 AM"); 
// console.log(localStorageVal); 
console.log(localStorageVal)

