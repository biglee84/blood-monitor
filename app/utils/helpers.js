import axios from 'axios'

var lastReading = require('././fakeDataLastReading.json');
var weeklyAverage = require('./fakeDataWeekAverage.json');

function getLastReading(){
  return lastReading
}

function getWeekAverage(){
  return weeklyAverage
}

export default function getData(){
  console.log(lastReading[0])
  return {lastReading: lastReading[0],weeklyAverage: weeklyAverage[0]}
}
