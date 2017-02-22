import axios from 'axios'

function getLastReading(){
    return axios.get(`./fakeDataLastReading.json`);
}

function getWeekAverage(){
  return axios.get(`./fakeDataWeekAverage.json`);
}

export default function getData(){
  return axios.all([getLastReading(), getWeekAverage()])
    .then((arr) => ({lastReading: arr[0].data,weeklyAverage: arr[1].data}))
}
