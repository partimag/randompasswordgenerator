const button1 = document.getElementById("password");
const passGen = () => {
  for (let i = 0; i <= 5; i++) {
    password += str.charAt(Math.floor(Math.random() * str.length + 1));
  }
  // return password;
  document.getElementById("password").value = password;
};

function copyPass() {
  var copyText = document.getElementById("password");

  copyText.select();
  document.execCommand("copy");
  document.getElementById("password").value = "";
}
copyPass();

let str = "!@$%^&*()_+}{][]}'?/.,:AQWERTYUIOPLKJJHGFDSAZXCVBNM";
var password = "";
