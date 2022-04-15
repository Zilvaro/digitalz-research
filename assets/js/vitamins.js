

/**vitamin research graph
 * - capture the element clicked
 * - create 5 random results (sum=100%) 
 * - create the random number of #total answers  
 * - create a graph showing the bottle pictures and the % of answers
 */

 function vitaminChart() {

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

let answerNumberVitamins = Math.floor(Math.random() * 56) + 40;
    let num1 = Math.floor(Math.random() * 25);
    let num2 = Math.floor(Math.random() * (100-num1));
    let num3 = Math.floor(Math.random() * (100-num1-num2));
    let num4 = Math.floor(Math.random() * (100-num1-num2-num3));
    let num5 = 100-num1-num2-num3-num4;

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Contry', '% of answers'],
        ['Essential Elements', num1],
        ['Garden of Life', num2],
        ['Viva Naturals', num3],
        ['Natures Craft', num4],
        ['New Nordic', num5]
    ]);

    var options = {
        title: 'Best appreciated package, ' + answerNumberVitamins + ' answers',
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('myChart2'));
    chart.draw(data, options);
}
 }

