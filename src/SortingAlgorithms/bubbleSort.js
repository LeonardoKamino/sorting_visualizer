import { swap, sleep, finalAnimation } from "./helpers";

export default async function bubbleSort(array, setArray, speed) {
	const arr = array;

	for (let i = arr.length - 1; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			document.getElementById(j).style.backgroundColor = "red";
			document.getElementById(j + 1).style.backgroundColor = "#33032F";
			await sleep(speed);
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				setArray([...array, arr]);
			}

			document.getElementById(j).style.backgroundColor = "#FFC0CB";
			document.getElementById(j + 1).style.backgroundColor = "#FFC0CB";
		}
	}
	finalAnimation(speed);
}
