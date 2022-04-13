function setTwoNumberDecimal(event) {
  this.value = parseFloat(this.value).toFixed(2);
}



/** guinness price graph
 * - capture the entry and create 2 id: name:real, name:wished
 * - create let(real) + let(wished random numbers) / id(random participants) 
 * - display 4 bars with (xusers + name)real and (xusers + name) wished price
 */



function guinnessChart() {
  
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);


let answerNumberGuinness = Math.floor(Math.random() * 18) + 11;
  let price1 = ((Math.random() * 3) + 4.50).toFixed(1);
  let price2 = ((Math.random() * 2) + 4).toFixed(1);

  let answerPriceBar = price1 > price2 ? price1 : price2;
  let answerPriceWish = price1 > price2 ? price2 : price1;


  let userName = localStorage.getItem("myName");
  let myPriceBar = guinness-input-form.elements['bar-price'].value;
  let myPriceWish = guinness - input - form.elements['my-price'].value;

  
  function drawChart() {
  
  
  let data = google.visualization.arrayToDataTable([
    ['Contry', '€'],
    ['Price in the bars',0],
    ['Average', answerPriceBar],
    ['userName[0]', 4.60],

    ['Desired Price', 0],
    ['Average', answerPriceWish],
    ['You', 3.75],
  ]);
  
  let options = {
    title:'Guinness Price Research, ' + answerNumberGuinness + ' answers'
  };
  
  let chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);
  }
  }







/**vitamin research graph
 * - capture the element clicked
 * - create 5 random results (sum=100%) 
 * - create the random number of #total answers  
 * - create a graph showing the bottle pictures and the % of answers
 */