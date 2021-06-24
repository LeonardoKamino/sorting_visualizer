import { swap, sleep, finalAnimation } from "./helpers";

export default async function selectionSort(array, setArray, speed) {
	const currentArr = array;

	for (var i = 0; i < currentArr.length - 1; i++) {
		let minIndex = i;
		document.getElementById(minIndex).style.backgroundColor = "red";
		for (var j = i + 1; j < currentArr.length; j++) {
			document.getElementById(j).style.backgroundColor = "#33032F";
			await sleep(speed);
			document.getElementById(j).style.backgroundColor = "#FFC0CB";
			if (currentArr[j] < currentArr[minIndex]) {
				document.getElementById(minIndex).style.backgroundColor = "#FFC0CB";
				minIndex = j;
				document.getElementById(minIndex).style.backgroundColor = "red";
			} else {
			}
		}

		await swap(currentArr, i, minIndex, setArray);
		await sleep(speed);
		setArray([...array, currentArr]);
		document.getElementById(minIndex).style.backgroundColor = "pink";
	}
	finalAnimation(speed);
}
