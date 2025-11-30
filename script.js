document.querySelectorAll(".nav-link").forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetSelector = btn.getAttribute("data-scroll-target");
        const target = document.querySelector(targetSelector);
        if (!target) return;

        const offset = 70; 
        const rect = target.getBoundingClientRect();
        const scrollTop = window.scrollY || window.pageYOffset;

        window.scrollTo({
            top: rect.top + scrollTop - offset,
            behavior: "smooth",
        });
    });
});

const goalCards = document.querySelectorAll(".goal-card");
const progressFill = document.getElementById("goals-progress-fill");
const progressLabel = document.getElementById("goals-progress-label");

function updateProgress() {
    const activeCount = document.querySelectorAll(".goal-card.goal-active").length;
    const total = goalCards.length;
    const percent = (activeCount / total) * 100;

    if (progressFill) {
        progressFill.style.width = `${percent}%`;
    }

    if (progressLabel) {
        progressLabel.textContent = `${activeCount} / ${total} goals marked as in progress or completed`;
    }
}

goalCards.forEach((card) => {
    const toggleBtn = card.querySelector(".goal-toggle");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        card.classList.toggle("goal-active");
        updateProgress();
    });
});

updateProgress();
