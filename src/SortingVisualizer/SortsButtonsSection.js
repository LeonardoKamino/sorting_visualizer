import React from "react";
import selectionSort from "../SortingAlgorithms/selectionSort";
import bubbleSort from "../SortingAlgorithms/bubbleSort";
import quickSort from "../SortingAlgorithms/quickSort";
import mergeAlgorithm from "../SortingAlgorithms/mergeSort";

export default class SortsButtonsSection extends React.Component {
	render() {
		let array = this.props.array;
		let ordered = this.props.ordered;
		let setOrdered = this.props.setOrdered;
		let setArray = this.props.setArray;
		let speed = this.props.speed;
		return (
			<div>
				<button
					disabled={ordered}
					onClick={async () => {
						setOrdered(true);
						await mergeAlgorithm(array, 0, array.length - 1, setArray, speed);
						setOrdered(false);
					}}
				>
					Merge Sort
				</button>
				<button
					disabled={ordered}
					onClick={async () => {
						setOrdered(true);
						await quickSort(array, 0, array.length - 1, setArray, speed);
						setOrdered(false);
					}}
				>
					Quick Sort
				</button>
				<button
					disabled={ordered}
					onClick={async () => {
						setOrdered(true);
						await bubbleSort(array, setArray, speed);
						setOrdered(false);
					}}
				>
					Bubble Sort
				</button>
				<button
					disabled={ordered}
					onClick={async () => {
						setOrdered(true);
						await selectionSort(array, setArray, speed);
						setOrdered(false);
					}}
					className="border-right"
				>
					SelectionSort
				</button>
			</div>
		);
	}
}
