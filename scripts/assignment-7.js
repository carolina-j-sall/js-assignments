let counter = 0;
function count () {
	console.log(counter ++);
	if (counter > 5) {
		clearInterval(timer);
	}
};

const timer = setInterval(count, 3000);
