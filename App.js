document.getElementById("b").onclick = () => {
  const length = document.getElementById("number").value;
  const lower = true;
  const upper = true;
  const symbol = true;
  const number = true;
  const password = Random(length, lower, upper, symbol, number);
  function Random(length, lower, upper, symbol, number) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = 1234567890;
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*_+~?|/*-+";
    let char = "";
    let password = "";
    char += lower ? lowercase : "";
    char += upper ? uppercase : "";
    char += symbol ? symbols : "";
    char += number ? num : "";
    if (length <= 0) {
      console.log("Password length must be 4 to 6 charecter");
    }
    for (let i = 0; i <= length - 1; i++) {
      const R = Math.floor(Math.random() * char.length);
      password += char[R];
    }
    document.getElementById("p").textContent = password;
  }
};
