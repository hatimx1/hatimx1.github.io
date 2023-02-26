const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

function clock() {
	const time = new Date();
	setTimeout(clock, 1000);
	
	const hour = time.getHours();
	const min = time.getMinutes();
	const sec = time.getSeconds();
	
	const hourDeg = (hour / 12) * 360;
	const minDeg = (min / 60) * 360;
	const secDeg = (sec / 60) * 360;
	
	hourEl.style.transform = `rotate(${hourDeg}deg)`;
	minEl.style.transform = `rotate(${minDeg}deg)`;
	secEl.style.transform = `rotate(${secDeg}deg)`;
};

clock();