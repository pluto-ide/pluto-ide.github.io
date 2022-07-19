console.log("hello world!")

let btn = document.querySelector('button');

const file = new File(["doc"], "doc.txt", {
	type: "text/plain",
});

btn.onclick = () => {
	
	alert("button = clicked");
}
