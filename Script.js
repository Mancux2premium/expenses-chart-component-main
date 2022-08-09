let colorsDay= ['hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)','hsl(10, 79%, 65%)'];

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
let fecha = new Date ();
let diaSemana = ["sun","mon","tue","wed","thu","fri","sat"]

if(diaSemana[fecha.getDay()] == day[fecha.getDay()-1]){
  colorsDay.fill('hsl(186, 34%, 60%)',fecha.getDay()-1,fecha.getDay());
   
}
  const data = {
     labels: day,
      datasets: [{
      label: "",
      borderRadius:6,
      backgroundColor: [colorsDay[0],colorsDay[1],colorsDay[2],colorsDay[3],colorsDay[4],colorsDay[5],colorsDay[6]],
      hoverBackgroundColor:'hsl(10, 79%, 85%)',
      borderColor: 'none',
      data:amount
    }]
  };
const legen = {
  legend: { display: false }
}
  const config = {
    type: 'bar',
    data: data,
    options:{ 
      /*Copied code from  @c-o-d-e visit your profile https://www.frontendmentor.io/profile/c-o-d-e  */
      onHover: (event, chartElement) => {
        event.native.target.style.cursor =
            chartElement.length == 1 ? "pointer" : "default";
        /****************************************************/
      },
    },
   
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

 