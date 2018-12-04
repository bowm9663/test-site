














var contentDiv = document.querySelector(".content")
var inputFirst = document.createElement("input")
inputFirst.type = "text"
document.body.appendChild(inputFirst)
var inputSecond = document.createElement("input")
inputFirst.type = "text"
document.body.appendChild(inputSecond)
function changeName() {
	var first = inputFirst.value
	var last = inputSecond.value
	contentDiv.innerText = first + " " + last
}
var buttonFriend = document.createElement("button")
buttonFriend.addEventListener("click", changeName)
document.body.appendChild(buttonFriend)