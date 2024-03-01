// //clock

// // console.log("Date:", date);

// // console.log("Year:", year);
// // console.log("Month:", months[month]);
// // console.log("hour:", hour);
// // console.log("minutes:", min);
// // console.log("seconds:", sec);
// // console.log("milliseconds:", millisec);

// // console.log(hour + ":" + min + ":" + sec);

// // let time = hour + ":" + min + ":" + sec;

// // document.getElementById("clock").innerHTML = time;

// function Clock() {
//   let months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   let date = new Date();
//   let year = date.getFullYear();
//   let month = date.getMonth();
//   let hour = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   let millisec = date.getMilliseconds();

//   let am_pm = "am";

//   if (hour < 10) {
//     // am_pm = "am";
//     //adding '0' if the value of hour is smaller than 10.
//     hour = "0" + hour;
//   } else if (hour > 12) {
//     am_pm = "pm";
//   }

//   let time = hour + ":" + min + ":" + sec + am_pm;

//   document.getElementById("clock").innerHTML = "Time: " + time;
// }

// Clock();

// setInterval(Clock, 1000);

function Clock() {
  let date = new Date();

  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  } 

  let time = hour + ":" + min + ":" + sec;
  console.log(time);

  document.getElementById("clock").innerHTML = time;
}

// Clock();
// setInterval(Clock, 1000);

// setInterval(()=>Clock(),1000)

function ButtonClick() {
  Clock();
  setInterval(Clock, 1000);
}
