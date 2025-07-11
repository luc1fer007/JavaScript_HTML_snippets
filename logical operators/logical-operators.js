///logical operators = used to combine or manipulate boolean values 
//                      (true or false);
/*
                        And = &&;
                        or = ||;
                        not = !;
*/ 
const temp = Number(prompt("Enter temperature:"));

if (temp < -10) {
  console.log("The weather is extremely cold 🧊");
  window.alert("Dont Go at any cost😶‍🌫️")
} 
else if (temp >= -10 && temp < 20) {
  console.log("The weather is very cold 🥶");
  window.alert("Go wearing warm cloths😉")
} 
else if (temp >= 20 && temp < 35) {
  console.log("The weather is pleasant 🙂");
  window.alert("Go outside and enjoy😎");
} 
else if (temp >= 35 && temp < 50) {
  console.log("The weather is hot 🥵");
} 
else if (temp >= 50) {
  console.log("The weather is dangerously hot! 🔥");
  alert("Don't go outside! 🥵🔥");
}
