function setTwoNumberDecimal(event) {
  this.value = parseFloat(this.value).toFixed(2);
}



/** guinness price graph
 * - capture the entry and create 2 id: name:real, name:wished
 * - create let(real) + let(wished random numbers) / id(random participants) 
 * - display 4 bars with (xusers + name)real and (xusers + name) wished price
 */



function guinnessChart() {

  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart1);
  google.charts.setOnLoadCallback(drawChart2);

  let answerNumberGuinness = Math.floor(Math.random() * 56) + 20;

  let respondents = document.getElementById('numberRespondents');
  respondents.innerHTML = answerNumberGuinness + ' answer(s)';

  let price1 = ((Math.random() * 3) + 4.50).toFixed(1);
  let price2 = ((Math.random() * 2) + 4).toFixed(1);

  let answerPriceBar = price1 > price2 ? price1 : price2;
  let answerPriceWish = price1 > price2 ? price2 : price1;

let priceForm = document.getElementById('guinness-submit');
  priceForm.addEventListener('submit', handleSubmit);
  
    function handleSubmit(event) {

    event.preventDefault();
  
  let myBarPrice = nameForm.elements['barPrice'].value;
    }


  function drawChart1() {


    let dataBar = google.visualization.arrayToDataTable([
      ['Results', '€'],
      ['"Official" in Dublin', 4.96],
      ['Average, all answers', answerPriceBar],
      ['You', myBarPrice],
    ]);


    let optionsBar = {
      title: 'Guinness (pint) Price in bars, '
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('chartBar'));
    chart.draw(dataBar, optionsBar);
  }

  function drawChart2() {
    let dataWish = google.visualization.arrayToDataTable([
      ['Results', '€'],
      ['Cheapest @ "Kerry" pub', 3.90],
      ['Average "Wish price"', answerPriceWish],
      ['Your Wish', 4],
    ]);

    let optionsWish = {
      title: 'Guinness (pint) "Wish" Price'
    };

    let chart = new google.visualization.ColumnChart(document.getElementById('chartWish'));
    chart.draw(dataWish, optionsWish);
  }
}