import axios from 'axios'

function getLastReading(){
    return axios.get(`http://lecodechimp.co.uk/blood/fakeDataLastReading.json`);
}

function getWeekAverage(){
  return axios.get(`http://lecodechimp.co.uk/blood/fakeDataWeekAverage.json`);
}

export default function getData(){
  return axios.all([getLastReading(), getWeekAverage()])
    .then((arrData) => ({cardReadings: arrData}))
}
