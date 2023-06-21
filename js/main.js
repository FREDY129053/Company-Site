const circle_text = document.querySelector('.circle-text p');
const circle_text_second = document.querySelector('.circle-text-second p');
const circle_text_third = document.querySelector('.circle-text-third p');

circle_text.innerHTML = circle_text.innerText.split("").map(
	(char, i) => `<span style="transform: rotate(${i * 20}deg)">${char}</span>`
).join("");

circle_text_second.innerHTML = circle_text_second.innerText.split("").map(
	(char, i) => `<span style="transform: rotate(${i * 20}deg)">${char}</span>`
).join("");

circle_text_third.innerHTML = circle_text_third.innerText.split("").map(
	(char, i) => `<span style="transform: rotate(${i * 19}deg)">${char}</span>`
).join("");