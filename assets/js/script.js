function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}


/**Name input check and task activation
 * when name is entered and Start:
 * - banner changes to Welcome 'name' & good luck
 * - starts contdown clock
 */

/** Task activation function
 * checks if name is entered
 * if true - opens the task
 * if not - alert: you have to enter the your name first
 */

/** Countdown clock
 * - starts when name is entered
 * - when the time is elapsed, the task is replaced with task graph
 */

 const deadline = 'April 07 2022 17:59:59 GMT+0200';

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

  getTimeRemaining(deadline).minutes;

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const timeinterval = setInterval(() => {
      const t = getTimeRemaining(endtime);
      clock.innerHTML =  t.days +' day(s) '+ t.hours + 'h : ' + t.minutes + 'm :' + t.seconds + 's';
    
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    },1000);
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