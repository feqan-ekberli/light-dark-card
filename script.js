console.clear();

const toggleBtn = document.querySelector("#btn");

toggleBtn.addEventListener("change", function() {
	if (this.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "light");
	}
});

function init(){
	document.documentElement.setAttribute("data-theme", "light");
}
init()