console.log("This is js file");

var submit = document.getElementById('submit');
var date = new Date();
var day1 = date.getDate();
var display = document.getElementById('display-age');
var month1 = date.getMonth() + 1;
var year1 = date.getFullYear();
console.log(day1);
console.log(month1);
console.log(year1);

submit.addEventListener('click', () => {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;
    var day3;
    var month3;
    var year3;
   
    if(day==''|| month=='' || year==''){
        alert("Enter a valid date");
    }
      if(month1<month){
        year3=(year1-year)-1;
        let  month4=month-month1;
        month3=12-month4;
      }
        else{
            year3=year1-year;
            month3=month1-month;
        }
        if(day1<day){
          let day4=day-day1;
          day3=31-day4;
          month3=month3-1;
        }
        else
        {  
         day3=day1-day;
        }
        
    display.innerHTML = `<p>Your age is ${year3} years ${month3} months ${day3} days</p>`;


    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
});