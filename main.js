let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.getElementById("total-slides").textContent = totalSlides;

function showSlide(n) {
	slides[currentSlide].classList.add("hidden");
	slides[currentSlide].classList.remove("active");

	currentSlide = Math.max(0, Math.min(n, totalSlides - 1));

	slides[currentSlide].classList.remove("hidden");
	slides[currentSlide].classList.add("active");

	document.getElementById("current-slide").textContent = currentSlide + 1;

	// Update progress bar
	const progress = ((currentSlide + 1) / totalSlides) * 100;
	document.getElementById("progress-bar").style.width = `${progress}%`;

	// Update navigation buttons
	document.getElementById("prev-btn").disabled = currentSlide === 0;
	document.getElementById("next-btn").disabled =
		currentSlide === totalSlides - 1;
}

function nextSlide() {
	if (currentSlide < totalSlides - 1) {
		showSlide(currentSlide + 1);
	}
}

function previousSlide() {
	if (currentSlide > 0) {
		showSlide(currentSlide - 1);
	}
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowRight") {
		e.preventDefault();
		nextSlide();
	} else if (e.key === "ArrowLeft") {
		e.preventDefault();
		previousSlide();
	}
});

// Interactive calculator function
function _calcularArea() {
	const base = parseFloat(document.getElementById("base").value);
	const altura = parseFloat(document.getElementById("altura").value);

	if (base && altura) {
		const area = base * altura;
		document.getElementById("area-valor").textContent = area.toFixed(2);
		document.getElementById("resultado").classList.remove("hidden");
	} else {
		alert("Por favor, digite valores válidos para base e altura!");
	}
}

// Initialize
showSlide(0);
