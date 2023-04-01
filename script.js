const button1 = document.getElementById("password");
const passGen = () => {
  for (let i = 0; i <= str.length; i++) {
    var number = Math.floor(Math.random() * str.length + 1);
    password = str.substring(number, number + 1);
  }

  document.getElementById("password").value = password;
};
function copyPass() {
  var copyText = document.getElementById("password");

  copyText.select();
  document.execCommand("copy");
}
copyPass();
// const copys = document.querySelector(".copy1");
// const copyPass = () => {
//   copys.classList.add("copy");
// };
// const icons = document.querySelector("#copy");
// const iconPass = () => {
//   icons.classList.remove("copy");
// };
let str = "!@$%^&*()_+}{][]}'?/.,:|AQWERTYUIOPLKJJHGFDSAZXCVBNM";
var password = "";
