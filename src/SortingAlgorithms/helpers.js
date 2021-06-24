function swap(arr, i1, i2) {
	const temp = arr[i2];
	arr[i2] = arr[i1];
	arr[i1] = temp;
	return;
}

async function sleep(time) {
	await new Promise((resolve) => setTimeout(resolve, time));
	return;
}

async function finalAnimation(time) {
	await sleep(300);
	const bars = document.getElementsByClassName("sorting-bar");
	for (let i = 0; i < bars.length; i++) {
		bars[i].style.backgroundColor = "green";
		await sleep(time / 1.5);
	}
}

export { swap, sleep, finalAnimation };
