function setTwoNumberDecimal(event) {
  this.value = parseFloat(this.value).toFixed(2);
}


/**Name input check and task activation
 * when name is entered and Start:
 * - banner changes to Welcome 'name' & good luck
 * - starts contdown clock
 * - activates task links
 */

let nameForm = document.getElementById('name-form');
nameForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {

  event.preventDefault();

  let userName = nameForm.elements['username'].value;

  let html = `
      <div class="main-banner-box" id="banner-box-text">
        <h2 id="greeting-text">Good luck ${userName}!</h2>
      </div> 
      <div class="main-banner-box" id="timer-box">
        <div id="clockdiv">
          Days: <span class="days"></span><br>
          Hours: <span class="hours"></span><br>
          Minutes: <span class="minutes"></span><br>
          Seconds: <span class="seconds"></span>
      </div>   
   `;

  let taskAllow1 = document.getElementById('guinness-go');
  taskAllow1.innerHTML = '<a href="guinness-task.html"><i class="fa-solid fa-circle-chevron-right"></i></a>';

  let taskAllow2 = document.getElementById('vitamins-go');
  taskAllow2.innerHTML = '<a href="vitamin-task.html"><i class="fa-solid fa-circle-chevron-right"></i></a>';

  document.getElementsByClassName("my-graph-name").innerHTML = `${userName}`;

  let responseDiv = document.getElementById('task-main-banner');
  responseDiv.innerHTML = html;
  initializeClock('clockdiv', deadline);
}


/** Countdown clock fixed time
 * - starts when name is entered
 * - when the time is elapsed, the task is replaced with task graph
 */

const timeInMinutes = 10;
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInMinutes*60*1000);

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  clock.style.display = 'block';
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    clock.innerHTML = 'Time to complete tasks:  ' + t.minutes + 'm  :  ' + t.seconds + 's';
    if (t.total <= 0) {
      clearInterval(timeinterval);
      document.getElementById("clockdiv").innerHTML = "TIME EXPIRED";
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
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


  let userName = nameForm.elements['username'].value;
  let myPriceBar = guinness-input-form.elements['bar-price'].value;
  let myPriceWish = guinness - input - form.elements['my-price'].value;

  
  function drawChart() {
  
  
  let data = google.visualization.arrayToDataTable([
    ['Contry', '€'],
    ['Price in the bars',0],
    ['Average', answerPriceBar],
    ['You', 4.60],

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