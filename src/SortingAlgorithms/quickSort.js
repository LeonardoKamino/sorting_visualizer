import { swap, sleep, finalAnimation } from "./helpers";

export default async function quickSort(array, start, end, setArray, speed) {
	await quickSortAlgorithm(array, start, end, setArray, speed);
	finalAnimation(speed);
}

async function quickSortAlgorithm(array, start, end, setArray, speed) {
	if (start >= end) return;

	const pivotIndex = await partition(array, start, end, setArray, speed);
	await quickSortAlgorithm(array, start, pivotIndex - 1, setArray, speed);
	await quickSortAlgorithm(array, pivotIndex + 1, end, setArray, speed);
}

async function partition(array, start, end, setArray, speed) {
	const arr = array;
	const pivotValue = arr[end];
	document.getElementById(end).style.backgroundColor = "#FF10F0";
	let pivotIndex = start;
	document.getElementById(pivotIndex).style.backgroundColor = "red";
	for (let i = start; i < end; i++) {
		document.getElementById(pivotIndex).style.backgroundColor = "red";
		document.getElementById(i).style.backgroundColor = "#33032F";
		await sleep(speed);
		if (arr[i] < pivotValue) {
			swap(arr, i, pivotIndex);
			document.getElementById(pivotIndex).style.backgroundColor = "#FFC0CB";
			setArray([...array, arr]);
			pivotIndex++;
		}
		document.getElementById(i).style.backgroundColor = "#FFC0CB";
	}
	document.getElementById(pivotIndex).style.backgroundColor = "#FFC0CB";
	document.getElementById(end).style.backgroundColor = "#FFC0CB";
	swap(arr, end, pivotIndex);
	setArray([...array, arr]);
	return pivotIndex;
}
