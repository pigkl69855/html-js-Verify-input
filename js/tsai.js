function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  function myFunction() {
    var inputNumber = document.getElementById("inputNumber").value;
    if (String(inputNumber) == String(a)+String(b)+String(c)+String(d)) {
      document.write("<h1>yeah boy</h1>");
      document.write("<h1>that right</h1>");
      document.write("<h1>"+inputNumber+"</h1>");
      document.write("<h1>"+String(a)+String(b)+String(c)+String(d)+"</h1>");
    } else {
      document.write("<h1>go fuck yourself</h1>");
      document.write("<h1>"+inputNumber+"</h1>");
      document.write("<h1>"+String(a)+String(b)+String(c)+String(d)+"</h1>");
    }
  }