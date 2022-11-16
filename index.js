const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers(){
    return drivers.slice(0,2);
}

function returnLastTwoDrivers(){
    return drivers.slice(2,4);
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    let multiply=()=> num*num;
    return multiply   
}

function fareDoubler(fare){
    return fare*2;
}

function fareTripler(fare){
    return fare*3;
}

function selectDifferentDrivers(arrayOfDrivers, selectedDrivers){
    return selectedDrivers(drivers);
}