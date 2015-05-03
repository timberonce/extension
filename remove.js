
function removing() {
	//alert(childs.length);
	//recommend.removeChild(childs[3]);
	recommend.removeChild(recommend.firstChild);
	recommend.removeChild(recommend.firstChild);	
	recommend.removeChild(recommend.firstChild);
	recommend.removeChild(recommend.firstChild);
	//alert(childs.length);
	
}



function check() {

	//first check parent
	recommend = document.getElementById("v6_pl_rightmod_recominfo");
	if (recommend == null) {
		setTimeout(check, 1000);
	} else {
		childs = recommend.childNodes;
		if (childs.length == 0) {
			setTimeout(check, 1000);
		} else {
			removing();
		}
	}
}

var recommend = document.getElementById("v6_pl_rightmod_recominfo");
var childs = recommend.childNodes;
//recommend.removeChild(recommend.firstChild);

window.onload = removing;

//recommend.parentNode.removeChild(recommend);
//if (childs == null) alert("null");
