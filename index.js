// Code your solution in this file!
const drivers = [ 'Antonia', 'Nuru', 'Amari', 'Mo' ]
const returnFirstTwoDrivers = function () {
    return ['Antonia', 'Nuru']
};

const returnLastTwoDrivers = function () {
    return ['Amari', 'Mo']
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return (function (fareMultiplier) {
        return fareMultiplier*num
    });
};

const fareDoubler = (function createFareMultiplier(num) {
    return (num*2)
});

const fareTripler = (function createFareMultiplier(num) {
    return (num*3)
});

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
}