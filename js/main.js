// скрипт для круглого текста
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


// скрипт для карусели отзывов
const slider = document.querySelector('.slider');
const container = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const navigations = document.querySelectorAll('.slider-nav');

let activeOrder = 0;

init();

function init() 
{
	for (let i = 0; i < slides.length; i++) 
	{
		const slide = slides[i];

		slide.dataset.order = i;
		slide.style.transform = "translate(-50%, -50%)";
		//slide.addEventListener("click", clickHandler);
	}

	for (const navigation of navigations)
	{
		navigation.addEventListener("click", navigationHandler);
	}

	activeOrder = Math.floor(slides.length / 2);

	updateSlider();
}

function updateSlider ()
{
	const {width, height} = container.getBoundingClientRect();
	const slideRect = slides[0].getBoundingClientRect();

	const a = width / 2;
	const b = height / 2;

	const delta = Math.PI / slides.length / 4;

	for (let i = 0; i < slides.length; i++)
	{
		const leftSlide = document.querySelector(`.slide[data-order="${activeOrder - i}"]`);

		if (leftSlide)
		{
			leftSlide.style.zIndex = slides.length - i;
			leftSlide.style.opacity = 1 - (i * 1.5) / slides.length;

			leftSlide.style.left=`${
				width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)
			}px`

			leftSlide.style.top = `${
				-b * Math.sin((Math.PI * 3) / 2 - delta * i * 2)
			}px`;
		}

		const rightSlide = document.querySelector(`.slide[data-order="${activeOrder + i}"]`);

		if (rightSlide)
		{
			rightSlide.style.zIndex = slides.length - i;
			rightSlide.style.opacity = 1 - (i * 1.5) / slides.length;

			rightSlide.style.left=`${
				width / 2 + a * Math.cos((Math.PI * 3) / 2 + delta * i * 2)
			}px`

			rightSlide.style.top = `${
				-b * Math.sin((Math.PI * 3) / 2 + delta * i * 2)
			}px`;
		}
	}
}

function clickHandler()
{
	const order = parseInt(this.dataset.order, 10);

	activeOrder = order;

	updateSlider();
}

function navigationHandler(e)
{
	e.preventDefault();
	const {dir} = this.dataset;

	if (dir === 'prev')
	{
		activeOrder = Math.max(0, activeOrder - 1);
	}
	else if (dir === 'next')
	{
		activeOrder = Math.min(slides.length - 1, activeOrder + 1);
	}

	updateSlider();
}