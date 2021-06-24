export { changeArraySize, resetArray, randomIntFromInterval, restart };

function resetArray(arraySize, setArray) {
	const array = [];
	for (let i = 0; i < arraySize; i++) {
		array.push(randomIntFromInterval(4, getHeight() * 0.8));
	}
	setArray(array);
	const bars = document.getElementsByClassName("sorting-bar");
	for (let i = 0; i < bars.length; i++) {
		bars[i].style.backgroundColor = "#FFC0CB";
	}
}

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function restart() {
	window.location.reload();
}

function changeArraySize(
	size,
	setBarsNum,
	setArray,
	setBarWidth,
	setBarMargin
) {
	const totalWidth = getWidth();
	let usableWidth;
	let numBars;
	let margin;
	let width;

	usableWidth = totalWidth * (0.5 + size / (100 / 0.5));
	const step = size <= 50 ? 2 : 3;
	numBars = 10 + size * step;
	if (size <= 30) {
		margin = 3;
	} else if (size <= 55) {
		margin = 2;
	} else {
		margin = 1;
	}
	width = (usableWidth - 2 * margin * numBars) / numBars;

	setBarMargin(margin);
	setBarWidth(Math.floor(width));
	setBarsNum(numBars);
	resetArray(numBars, setArray);
}

function getWidth() {
	return Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth,
		document.documentElement.clientWidth
	);
}
function getHeight() {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.documentElement.clientHeight
	);
}
