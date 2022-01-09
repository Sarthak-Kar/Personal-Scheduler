function printer(day, date, iteration) {
  document.getElementById(day).innerHTML = "";
  if (iteration < tasks[date].length) {
    document.getElementById(day).innerHTML =
      "\xa0\xa0\xa0\xa0\xa0" + tasks[date][iteration] + "\xa0\xa0\xa0\xa0\xa0";
  }
}

function refresh(n) {
  document.getElementById("date1").innerHTML = dateify(n);
  if (tasks.hasOwnProperty(dateify(n))) {
    printer("day1task1", dateify(n), 0);
    printer("day1task2", dateify(n), 1);
    printer("day1task3", dateify(n), 2);
    printer("day1task4", dateify(n), 3);
    printer("day1task5", dateify(n), 4);
    printer("day1task6", dateify(n), 5);
  } else {
    document.getElementById("day1task1").innerHTML = "No Task";
    document.getElementById("day1task2").innerHTML = "";
    document.getElementById("day1task3").innerHTML = "";
    document.getElementById("day1task4").innerHTML = "";
    document.getElementById("day1task5").innerHTML = "";
    document.getElementById("day1task6").innerHTML = "";
  }
  n.setDate(n.getDate() + 1);
  document.getElementById("date2").innerHTML = dateify(n);
  if (tasks.hasOwnProperty(dateify(n))) {
    printer("day2task1", dateify(n), 0);
    printer("day2task2", dateify(n), 1);
    printer("day2task3", dateify(n), 2);
    printer("day2task4", dateify(n), 3);
    printer("day2task5", dateify(n), 4);
    printer("day2task6", dateify(n), 5);
  } else {
    document.getElementById("day2task1").innerHTML = "No Task";
    document.getElementById("day2task2").innerHTML = "";
    document.getElementById("day2task3").innerHTML = "";
    document.getElementById("day2task4").innerHTML = "";
    document.getElementById("day2task5").innerHTML = "";
    document.getElementById("day2task6").innerHTML = "";
  }
  n.setDate(n.getDate() + 1);
  document.getElementById("date3").innerHTML = dateify(n);
  if (tasks.hasOwnProperty(dateify(n))) {
    printer("day3task1", dateify(n), 0);
    printer("day3task2", dateify(n), 1);
    printer("day3task3", dateify(n), 2);
    printer("day3task4", dateify(n), 3);
    printer("day3task5", dateify(n), 4);
    printer("day3task6", dateify(n), 5);
  } else {
    document.getElementById("day3task1").innerHTML = "No Task";
    document.getElementById("day3task2").innerHTML = "";
    document.getElementById("day3task3").innerHTML = "";
    document.getElementById("day3task4").innerHTML = "";
    document.getElementById("day3task5").innerHTML = "";
    document.getElementById("day3task6").innerHTML = "";
  }
  n.setDate(n.getDate() + 1);
  document.getElementById("date4").innerHTML = dateify(n);
  if (tasks.hasOwnProperty(dateify(n))) {
    printer("day4task1", dateify(n), 0);
    printer("day4task2", dateify(n), 1);
    printer("day4task3", dateify(n), 2);
    printer("day4task4", dateify(n), 3);
    printer("day4task5", dateify(n), 4);
    printer("day4task6", dateify(n), 5);
  } else {
    document.getElementById("day4task1").innerHTML = "No Task";
    document.getElementById("day4task2").innerHTML = "";
    document.getElementById("day4task3").innerHTML = "";
    document.getElementById("day4task4").innerHTML = "";
    document.getElementById("day4task5").innerHTML = "";
    document.getElementById("day4task6").innerHTML = "";
  }
  n.setDate(n.getDate() + 1);
  document.getElementById("date5").innerHTML = dateify(n);
  if (tasks.hasOwnProperty(dateify(n))) {
    printer("day5task1", dateify(n), 0);
    printer("day5task2", dateify(n), 1);
    printer("day5task3", dateify(n), 2);
    printer("day5task4", dateify(n), 3);
    printer("day5task5", dateify(n), 4);
    printer("day5task6", dateify(n), 5);
  } else {
    document.getElementById("day5task1").innerHTML = "No Task";
    document.getElementById("day5task2").innerHTML = "";
    document.getElementById("day5task3").innerHTML = "";
    document.getElementById("day5task4").innerHTML = "";
    document.getElementById("day5task5").innerHTML = "";
    document.getElementById("day5task6").innerHTML = "";
  }
  n.setDate(n.getDate() + 1);
  document.getElementById("date6").innerHTML = dateify(n);
  if (tasks.hasOwnProperty(dateify(n))) {
    printer("day6task1", dateify(n), 0);
    printer("day6task2", dateify(n), 1);
    printer("day6task3", dateify(n), 2);
    printer("day6task4", dateify(n), 3);
    printer("day6task5", dateify(n), 4);
    printer("day6task6", dateify(n), 5);
  } else {
    document.getElementById("day6task1").innerHTML = "No Task";
    document.getElementById("day6task2").innerHTML = "";
    document.getElementById("day6task3").innerHTML = "";
    document.getElementById("day6task4").innerHTML = "";
    document.getElementById("day6task5").innerHTML = "";
    document.getElementById("day6task6").innerHTML = "";
  }
  n.setDate(n.getDate() + 1);
  document.getElementById("date7").innerHTML = dateify(n);
  if (tasks.hasOwnProperty(dateify(n))) {
    printer("day7task1", dateify(n), 0);
    printer("day7task2", dateify(n), 1);
    printer("day7task3", dateify(n), 2);
    printer("day7task4", dateify(n), 3);
    printer("day7task5", dateify(n), 4);
    printer("day7task6", dateify(n), 5);
  } else {
    document.getElementById("day7task1").innerHTML = "No Task";
    document.getElementById("day7task2").innerHTML = "";
    document.getElementById("day7task3").innerHTML = "";
    document.getElementById("day7task4").innerHTML = "";
    document.getElementById("day7task5").innerHTML = "";
    document.getElementById("day7task6").innerHTML = "";
  }
  n.setDate(n.getDate() - 6);
}

function prev() {
  n.setDate(n.getDate() - 7);
  refresh(n);
}

function next() {
  n.setDate(n.getDate() + 7);
  refresh(n);
}

function show(s, d) {
  const target = document.getElementById(s).innerHTML.replace(/\&nbsp;/g, "");
  const index = tasks[document.getElementById(d).innerHTML].indexOf(target);
  if (index > -1) {
    tasks[document.getElementById(d).innerHTML].splice(index, 1);
  }
  if (tasks[document.getElementById(d).innerHTML].length == 0) {
    delete tasks[document.getElementById(d).innerHTML];
  }
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tasks),
  };

  fetch("/api", options);
  refresh(n);
}

function process() {
  today = new Date();
  var x = "",
    mm = today.getMonth() + 1,
    dd = today.getDate();
  if (mm <= 9) mm = "0" + mm;
  if (dd <= 9) dd = "0" + dd;
  x += today.getFullYear() + "-" + mm + "-" + dd;
  if (document.getElementById("assignment").value == "") {
    alert("You havent entered anything");
    return;
  }
  if (document.getElementById("date").value < x) {
    alert("Invalid Date");
    return;
  }
  if (document.getElementById("parts").value == 0) {
    alert("Minimum 1 part required");
    return;
  }
  if (tasks.hasOwnProperty(document.getElementById("date").value)) {
    tasks[document.getElementById("date").value].push(
      document.getElementById("assignment").value
    );
  } else {
    tasks[document.getElementById("date").value] = [
      document.getElementById("assignment").value,
    ];
  }

  nn = new Date(
    document.getElementById("date").value.replace(/-/g, "/").replace(/T.+/, "")
  );
  for (i = 1; i <= document.getElementById("parts").value; i++) {
    nn.setDate(nn.getDate() - 1);
    if (dateify(nn) < x) {
      nn.setDate(nn.getDate() + 1);
    }
    if (dateify(nn) == x) {
      for (j = i; j <= document.getElementById("parts").value; j++) {
        if (tasks.hasOwnProperty(dateify(nn))) {
          tasks[dateify(nn)].push(
            document.getElementById("assignment").value + "-prep"
          );
        } else {
          tasks[dateify(nn)] = [
            document.getElementById("assignment").value + "-prep",
          ];
        }
      }
      break;
    }
    if (tasks.hasOwnProperty(dateify(nn))) {
      tasks[dateify(nn)].push(
        document.getElementById("assignment").value + "-prep"
      );
    } else {
      tasks[dateify(nn)] = [
        document.getElementById("assignment").value + "-prep",
      ];
    }
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tasks),
  };

  fetch("/api", options);
  refresh(n);
}

function dateify(n) {
  var x = "",
    mm = n.getMonth() + 1,
    dd = n.getDate();
  if (mm <= 9) mm = "0" + mm;
  if (dd <= 9) dd = "0" + dd;
  x += n.getFullYear() + "-" + mm + "-" + dd;
  return x;
}

async function load_data() {
  const response = await fetch("/api");
  const temp = await response.json();
  if (typeof temp.output[0] == "undefined") {
    console.log("1");
    refresh(n);
    throw "exit";
  }
  const keys = Object.keys(temp.output[0]);
  const values = Object.values(temp.output[0]);
  keys.pop();
  values.pop();
  value_array = [];
  values.forEach((val) => value_array.push(val));
  for (var i = keys.length - 1; i >= 0; i--) {
    tasks[keys[i]] = value_array.pop();
  }
  console.log(tasks);
  refresh(n);
}

n = new Date();
tasks = {};
load_data();
