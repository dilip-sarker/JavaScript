let counter = 0;
updateClock = () => {
	console.log('Current time:', new Date().toLocaleTimeString());
	counter++;
	if (counter >= 10) {
		clearInterval(intervalId);
		console.log('Clocked stopped after 10 seconds');
	}
};

const intervalId = setInterval(updateClock, 1000);
