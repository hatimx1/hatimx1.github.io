const monthEl = document.querySelector(".date h1");
const dateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthIn = new Date().getMonth();

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

monthEl.innerHTML = months[monthIn];
dateEl.innerHTML = new Date().toDateString();

const firstDay = new Date(new Date().getFullYear(), monthIn, 1).getDate();
const lastDay = new Date(new Date().getFullYear(), monthIn +1, 0).getDate();
const toDay = new Date().getDate();

let days = "";

for (let i = firstDay; i >= 0; i--){
	days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++){
	if ( i === toDay){
		days+= `<div class="today">${i}</div>`;
	}
	else {
		days+= `<div>${i}</div>`;
	}
}

daysEl.innerHTML = days;
