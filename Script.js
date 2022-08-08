let colorsDay= ['hsl(186, 34%, 60%)','hsl(186, 34%, 60%)','hsl(186, 34%, 60%)','hsl(186, 34%, 60%)','hsl(186, 34%, 60%)','hsl(186, 34%, 60%)','hsl(186, 34%, 60%)'];

const gastos =[
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
  
]
const amount =[];
const day = [];
for(i=0;i<gastos.length;i++){
  amount.push(gastos[i].amount)
  day.push(gastos[i].day)
}
console.log(day)
let fecha = new Date ();

let diaSemana = ["sun","mon","tue","wed","thu","fri","sat"]

if(diaSemana[fecha.getDay()] == day[fecha.getDay()-1]){
   
   console.log('hola');
  tres = 'blue';
}
  const data = {
     labels: day,
      datasets: [{
      label: 'Gastos diarios',
      borderRadius:6,
      backgroundColor: colorsDay[2],
      hoverBackgroundColor:'hsl(186, 34%, 60%)',
      borderColor: 'none',
      data: amount
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

 