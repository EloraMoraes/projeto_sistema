document = document
  .getElementById("form1")
  .addEventListener("submit", submitFun1);

var studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];
function submitFun1(e) {
  document.querySelector("#tbody").innerHTML = "";
  e.preventDefault();
  var currentDate = new Date();
  var name = document.querySelector("#name").value;
  var course = document.querySelector("#course").value;
  var subject = document.querySelector("#subject").value;
  var date = currentDate.toISOString().slice(0, 10);
  var btnReset = document.getElementById("btnReset");

  var studentObj = {
    name: name,
    course: course,
    subject: subject,
    date: date,
  };

  studentDataArr.push(studentObj);
  localStorage.setItem("studentData", JSON.stringify(studentDataArr));
  document.querySelector("#form1").reset();
  alert("Estudante Adicionado com Sucesso");

  displayFun(studentDataArr);
}

function displayFun(studentDataArr) {
  var count = 1;
  studentDataArr.map(function (item) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = count++;
    var td2 = document.createElement("td");
    td2.innerHTML = item.name;
    var td3 = document.createElement("td");
    td3.innerHTML = item.course;
    var td4 = document.createElement("td");
    td4.innerHTML = item.subject;
    var td5 = document.createElement("td");
    td5.innerHTML = item.date;
    var td6 = document.createElement("td");
    var btn1 = document.createElement("button");
    btn1.innerHTML = "P";
    btn1.addEventListener("click", function () {
      td6.innerHTML = "<button >Presente</button>";
    });
    var btn2 = document.createElement("button");
    btn2.innerHTML = "A";
    btn2.addEventListener("click", function () {
      td6.innerHTML = "<button id='absent'>Ausente</button>";
    });
    td6.classList.add("td6");
    td6.append(btn1, btn2);

    tr.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("#tbody").append(tr);
  });
}
displayFun(studentDataArr);

btnReset.addEventListener("click", resetarDadosLocais);

function resetarDadosLocais() {
  localStorage.removeItem("studentData");
  document.querySelector("#tbody").innerHTML = "";
  alert("Dados locais resetados com sucesso.");
}
