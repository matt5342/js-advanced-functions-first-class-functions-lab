// Code your solution in this file!

// const 
function returnFirstTwoDrivers(array){
    return array.slice(0, 2);
}
function returnLastTwoDrivers(array){
    return array.slice(-2);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(int){
    return function(fare){return int*fare}
}
function fareDoubler(fare){
    return createFareMultiplier(2)(fare)
}
function fareTripler(fare){
    return createFareMultiplier(3)(fare)
}
function selectDifferentDrivers(array, func){
    return func(array);
}