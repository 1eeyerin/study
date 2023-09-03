import React, {useState} from "react";

const App = () => {
	const [value, setValue] = useState(1);

	const plusValue = () => {
		setValue(prev => prev + 1);
	}
	return (
		<div>
			hello
			hello {value}
			<button onClick={plusValue}>hi</button>
		</div>
	)
}

export default App;