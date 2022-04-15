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
  localStorage.setItem("myName", `${userName}`);

  let responseDiv = document.getElementById('task-main-banner');
  responseDiv.innerHTML = html;
  initializeClock('clockdiv', deadline);
}


/** Countdown clock fixed time
 * - starts when name is entered
 * - when the time is elapsed, the task is replaced with task graph
 */

let timeInMinutes = Math.ceil(Math.random() * 7) + 2;
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


/**Exit script & message */

function exitFunction(event) {

  let url = "https://zilvaro.github.io/digitalz-research/index.html";
  window.location(url);

  let html = `
      <div class="main-banner-box" id="banner-box-text">
        <h2 id="greeting-text">Sorry to see you leaving ${userName}:(</h2>
        <h3 id="start-again-text">If you want to start again, press on DigitalZ logo</h3>
      <div class="main-banner-box" id="timer-box">
        <div id="clockdiv">
          Days: <span class="days"></span><br>
          Hours: <span class="hours"></span><br>
          Minutes: <span class="minutes"></span><br>
          Seconds: <span class="seconds"></span>
      </div>   
      <div class="task-box-parent"></div>
   `;

}
