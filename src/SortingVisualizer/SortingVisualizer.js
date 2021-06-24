import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

import { resetArray, restart, changeArraySize } from "./helpersFunctions";

import SortsButtonsSection from "./SortsButtonsSection";

export default function SortingVisualizer() {
	const [array, setArray] = useState([]);
	const [barsNum, setBarsNum] = useState(60);
	const [ordered, setOrdered] = useState(false);
	const [speed, setSpeed] = useState(20);
	const [barWidth, setBarWidth] = useState();
	const [barMargin, setBarMargin] = useState();
	const [size, setSize] = useState(25);

	useEffect(() => {
		changeArraySize(size, setBarsNum, setArray, setBarWidth, setBarMargin); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="sorting-visualizer">
			<div className="bars-container">
				{array.map((value, index) => (
					<div
						className="sorting-bar"
						key={index}
						id={index}
						style={{
							height: `${value}px`,
							width: `${barWidth}px`,
							margin: `0 ${barMargin}px`,
						}}
					></div>
				))}
			</div>

			<div className="controls">
				<div className="columns">
					<div className="row justify-content-center">
						<div className="col-3 label">
							<label>Size</label>
						</div>
						<div className="col">
							<input
								disabled={ordered}
								type="range"
								min={1}
								max={100}
								step="1"
								value={size}
								onChange={(e) => {
									changeArraySize(
										e.target.value,
										setBarsNum,
										setArray,
										setBarWidth,
										setBarMargin
									);
									setSize(e.target.value);
								}}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-3 label">
							<label>Speed</label>
						</div>
						<div className="col">
							<select
								onChange={(e) => {
									setSpeed(parseInt(e.target.value, 10));
								}}
								class="form-select select-speed"
								aria-label="Default select example"
								disabled={ordered}
							>
								<option value="4">Fast</option>
								<option value="20" selected>
									Medium
								</option>
								<option value="80">Slow</option>
							</select>
						</div>
					</div>
				</div>

				{ordered ? (
					<button onClick={() => restart()} className="new-array-button">
						Restart
					</button>
				) : (
					<button
						onClick={() => resetArray(barsNum, setArray)}
						className="new-array-button"
					>
						Generate new array
					</button>
				)}
				<SortsButtonsSection
					array={array}
					ordered={ordered}
					setArray={setArray}
					setOrdered={setOrdered}
					speed={speed}
				/>
			</div>
		</div>
	);
}
