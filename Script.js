const labels = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'dsdasd',
      borderRadius:6,
      backgroundColor: 'hsl(10, 79%, 65%)',
      borderColor: 'none',
      data: [17.45, 34.91,52.36,31.07, 23.39, 43.28, 25.48],
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