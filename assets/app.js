let reviewContainer = document.getElementById('review-container');
let reviewText = '';
for (const review of reviews) {
    reviewText += `<a href="https://github.com/wahyuhidayattz" class="flex flex-col gap-4 p-4 card">
    <div class="flex flex-row items-center gap-4">
        <div class="w-10 h-10 rounded-full bg-slate-300"></div>
        <div class="flex flex-col gap-1">
            <span class="font-semibold text-slate-800">${review.name}</span>
            <span>${review.job}</span>
        </div>
    </div>
    <div>
        <span>${review.comment}</span>
    </div>
</a>`;
}

reviewContainer.innerHTML = reviewText;