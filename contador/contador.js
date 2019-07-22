
function countDays(day, month){
    var thirty = [4, 6, 9, 11];
    var thirtyOne = [1, 3, 5, 7, 8, 10, 12];
    var days = 0;
    var date = new Date();
    var thisMonth = date.getMonth() + 1;

    if(thisMonth != month){
        days += day;

        if (thirty.includes(thisMonth)){
            days += 30 - date.getDate();
        }else if (thirtyOne.includes(thisMonth)){
            days += 31 - date.getDate();
        }else{
            days += 28 - date.getDate();
        }
        thisMonth += 1;
        for (let i = thisMonth; i < month; i++){
            if (thirty.includes(i)){
                days += 30;
            }else if (thirtyOne.includes(i)){
                days += 31;
            }else{
                days += 28;
            }
        }
    }else{
        days += day - date.getDate();
    }
    return days;
}

const restDays = document.getElementById ('restDays');

var theDays = countDays(31, 12);

restDays.textContent = (`Falta ${theDays} dias para nosso evento`);
