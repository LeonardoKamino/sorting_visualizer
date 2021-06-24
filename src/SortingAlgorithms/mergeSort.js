import { sleep, finalAnimation } from "./helpers";

/*
 * code adapted from https://github.com/clementmihailescu/Sorting-Visualizer-Tutorial/blob/master/src/sortingAlgorithms/sortingAlgorithms.js
 */

export default async function mergeAlgorithm(
	array,
	start,
	end,
	setArray,
	speed
) {
	const mainArray = array.slice();
	const auxArray = array.slice();
	const animationArray = [];

	await mergeSort(mainArray, start, end, auxArray, animationArray);

	const sortBars = document.getElementsByClassName("sorting-bar");
	for (let i = 0; i < animationArray.length; i++) {
		const isSwap = i % 2 === 1;
		if (!isSwap) {
			const [barOneIdx, barTwoIdx] = animationArray[i];
			sortBars[barOneIdx].style.backgroundColor = "#33032F";
			sortBars[barTwoIdx].style.backgroundColor = "#33032F";

			await sleep(speed);

			sortBars[barOneIdx].style.backgroundColor = "#FFC0CB";
			sortBars[barTwoIdx].style.backgroundColor = "#FFC0CB";
		} else {
			const [barOneIdx, newHeight] = animationArray[i];
			sortBars[barOneIdx].style.height = `${newHeight}px`;
		}
	}

	setArray([...array, mainArray]);
	finalAnimation(speed);
}

async function mergeSort(mainArray, start, end, auxArray, animationArray) {
	if (start === end) return;
	let middle = Math.floor((end + start) / 2);
	mergeSort(auxArray, start, middle, mainArray, animationArray);
	mergeSort(auxArray, middle + 1, end, mainArray, animationArray);
	doMerge(mainArray, start, middle, end, auxArray, animationArray);
}

async function doMerge(
	mainArray,
	start,
	middle,
	end,
	auxArray,
	animationArray
) {
	let k = start;
	let i = start;
	let j = middle + 1;

	while (i <= middle && j <= end) {
		animationArray.push([i, j]);
		if (auxArray[i] < auxArray[j]) {
			animationArray.push([k, auxArray[i]]);
			mainArray[k++] = auxArray[i++];
		} else {
			animationArray.push([k, auxArray[j]]);
			mainArray[k++] = auxArray[j++];
		}
	}

	while (i <= middle) {
		animationArray.push([i, i]);

		animationArray.push([k, auxArray[i]]);
		mainArray[k++] = auxArray[i++];
	}

	while (j <= end) {
		animationArray.push([j, j]);
		animationArray.push([k, auxArray[j]]);
		mainArray[k++] = auxArray[j++];
	}
}
