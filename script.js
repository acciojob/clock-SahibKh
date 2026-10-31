//your JS code here. If required.
const ClockTimer = document.getElementById("timer")

function updateTimer() {
	const currentDate = new Date();

	ClockTimer.innerText = currentDate.toLocaleString()
}

setInterval(updateTimer, 1000)
updateTimer()



