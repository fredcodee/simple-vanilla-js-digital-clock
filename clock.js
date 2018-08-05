var hourHand = document.querySelector(".hourHand")
var minuteHand = document.querySelector(".minuteHand")
var secHand = document.querySelector(".secHand")
var timetext = document.querySelector(".timetext")

setInterval(setTime, 1000);
setInterval(digitalTime, 1000);

// analog clock
function setTime() {
  const currentTime = new Date();

//for the sec hand
  const seconds= currentTime.getSeconds();
  const secondDegrees = ((seconds/60) * 360) + 90;
  //the symbols are different from ''%""
  secHand.style.transform= `rotate(${secondDegrees}deg)`;
  //for minute hand
  const minute = currentTime.getMinutes();
  const minuteDegrees = ((minute / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  //for hour hand
  const hour = currentTime.getHours();
  const hourDegrees = ((hour/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

//digital clock
function digitalTime() {
  const now = new Date();

  var s= now.getSeconds();
  s = twovar(s);
  var m = now.getMinutes();
  m = twovar(m);
  var h = now.getHours();

  var timenow= h+":"+m+":"+s;
  timetext.textContent = timenow;
}

 function twovar(x) {
   if (x < 10) {
     x= "0"+x;
     return x
   }
   return x
 }
