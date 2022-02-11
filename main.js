"use strict";
let API_KEY='xF8s5GKnPaZzzU_foLWa';

async function loadCourse(){
    let API_KEY='xF8s5GKnPaZzzU_foLWa';
    let today=new Date();
    today.setDate(new Date().getDate()-1);
    let startDate=today.toISOString().split('T')[0];
    let endDate=today.toISOString().split('T')[0];
    let url=`https://data.nasdaq.com/api/v3/datasets/BITFINEX/LUNAF0USTF0?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;
    let response= await fetch(url);
    let responseAsJson= await response.json();
    showData(responseAsJson);
    
}

function showData(responseAsJson){
    let container=document.getElementById('container');
    let data=responseAsJson['dataset']['data'][0];
for(let i=0;i<data.length;i++){
container.innerHTML+=`
 ${responseAsJson['dataset']['column_names'][i]}
 ${data[i]}  <br>
`;
} 
}