function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}


/**Name input check and task activation
 * when name is entered and Start:
 * - banner changes to Welcome 'name' & good luck
 * - starts contdown clock
 */

 let nameForm = document.getElementById('name-form');
 nameForm.addEventListener('submit', handleSubmit);
 
 function handleSubmit(event) {
   // Prevent the form from being submitted
   event.preventDefault();
 
   // Note the use of .elements (a simpler way to get form field values and using the elements id eg ['username'])
   let userName = nameForm.elements['username'].value;
    
   // Remember template literals with backticks?
   let html = `
    <h2 id="greeting-text">Good luck ${userName}!</h2>
   `;
   ________________________________________________________-
 
   // Put the above HTML in the response div below the form
   let responseDiv = document.getElementById('response');
   responseDiv.innerHTML = html;
   responseDiv.style.display = 'block';
 }

/** Task activation function
 * checks if name is entered
 * if true - opens the task
 * if not - alert: you have to enter the your name first
 */

/** Countdown clock
 * - starts when name is entered
 * - when the time is elapsed, the task is replaced with task graph
 */


  /** Cowntdown fixed time timer*/

  const deadline = 'April 7 2022 23:59:59 GMT+0200';

  function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
  
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
    
    function updateClock(){
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      clock.innerHTML = + t.days + 'd : ' + t.hours + 'h : '+ t.minutes + 'm : ' + t.seconds + 's';
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    
    updateClock(); // run function once at first to avoid delay
    var timeinterval = setInterval(updateClock,1000);
  }

  initializeClock('clockdiv', deadline);

  





/** guinness price graph
 * - capture the entry and create 2 id: name:real, name:wished
 * - create let(real) + let(wished random numbers) / id(random participants) 
 * - display 4 bars with (xusers + name)real and (xusers + name) wished price
 */

/**vitamin research graph
 * - capture the element clicked
 * - create 5 random results (sum=100%) 
 * - create the random number of #total answers  
 * - create a graph showing the bottle pictures and the % of answers
 */