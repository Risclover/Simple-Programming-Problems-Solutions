let items = ["yes", "no", "bear"];
let result;

function findItem(strr) {
	result = items.find(function(item) {
		return item === strr;
	});
	if (result != undefined) {
		return true;
	} else {
		return false;
    }
}

findItem("yes"); // Returns true;

findItem("blah"); // Returns false;