
var displayDate = function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    //document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}

     var timeArray = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]
/* review to see how localstorage can be loaded via var
var tasks = []; */


$(".saveBtn").on('click', function () {
    console.log("Clicked save button ", $(this));
    //grab the hour and description when the save button is clicked 
    var timeStamp = $(this).siblings('.hour').text();
    console.log(timeStamp);
    var descriptionSection = $(this).siblings('.description').val();
    console.log(descriptionSection);

    //save information in localStorage 
    localStorage.setItem(timeStamp, descriptionSection);
    /* attempted to convert time into a string, review further
    //localStorage.setItem("descriptionSection", JSON.stringify(descriptionSection)); */
});


/* review to see if local storage can be loaded through var
var loadTasks = function () {
    var savedTasks = localStorage.getItem('descriptionSection');
    
    savedTasks = JSON.parse(descriptionSection);

    for (var i = 0; i < savedTasks.length; i++) {

    }
} */

for (let i = 0; i < timeArray.length; i++) {
    console.log(timeArray[i])
    console.log(localStorage.getItem(timeArray[i]))
}


//call function
displayDate();

