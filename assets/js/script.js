
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
      </div>   
   `;

  let taskAllow1 = document.getElementById('guinness-go');
  taskAllow1.innerHTML = '<a href="guinness-task.html"><i class="fa-solid fa-circle-chevron-right"></i></a>';

  let taskAllow2 = document.getElementById('vitamins-go');
  taskAllow2.innerHTML = '<a href="vitamin-task.html"><i class="fa-solid fa-circle-chevron-right"></i></a>';

  document.getElementsByClassName("my-graph-name").innerHTML = `${userName}`;

  let responseDiv = document.getElementById('task-main-banner');
  responseDiv.innerHTML = html;

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
  
  return {
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
  const timeinterval = setInterval(() => {
  const t = getTimeRemaining(endtime);
    clock.innerHTML = 'Time remaining:  ' + t.minutes + 'm: ' + t.seconds + 's';
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
}
initializeClock('clockdiv', deadline);