// var res = document.getElementById("root");
// res.innerHTML = "<h1> Hello World from JavaScript </h1>";
// console.log(res);

// var res = document.createElement("h1");
// res.innerHTML = "hello world from jss";
// console.log(res);


// var display = document.querySelector("#root");
// display.append(res);
// //display.append(res);

// var res = document.querySelector("div");
// res.innerHTML = "<h1>hii chellam love you</h1>"

// var heading = React.createElement("h1",{id:"head",xyz:"abx"},"hello from reactttt");
// console.log(heading);
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

var nest = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"nested busted!!!"),React.createElement("h1",{},"nested busted2!!!")])],React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"nestedd bustedd!!!"),React.createElement("h1",{},"nested bustedd!!!")]));
console.log(nest);

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nest);