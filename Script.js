const colorToday = 'hsl(186, 34%, 60%)';
const colorDayAll = 'hsl(10, 79%, 65%)';

/* const gastos =[
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

  const data = {
     labels: day,
      datasets: [{
      label: 'Gastos diarios',
      borderRadius:6,
      backgroundColor: ['hsl(10, 79%, 65%)'],
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
  ); */

  let fecha = new Date ();
  console.log(fecha.getDay());
  console.log(fecha.getDate());
  console.log(fecha.getFullYear());

  let diaSemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
  let diaSemana2 = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']
  if(diaSemana[fecha.getDay()] == diaSemana2[fecha.getDay()]){
    console.log("hola");
  }
  console.log(diaSemana[fecha.getDay()]);