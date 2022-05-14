for (let i = 0; i < 10; i ++) {
    const newH1 = document.createElement("h1");
    newH1.innerHTML = "Hello World";
    newH1.style.textAlign = "center";
    newH1.style.textDecorationLine = "underline";
    newH1.style.textDecorationColor = "purple";
    document.body.appendChild(newH1);
}
​
var names = [
    " Steve",
    " Larry",
    " Joe",
    " Shirley",
    " Steph",
    " Nate",
    " Rick",
    " Emily",
]
var nameList = document.getElementById("name")
​
for (var i = 0; i < 5; i++) {
​
    var newName = document.createElement("li")
    newName.textContent = names[i]
    nameList.append(newName)
}