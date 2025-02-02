function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('d-none'));
    document.getElementById(`page${pageNumber}`).classList.remove('d-none');
}

function restart() {
    window.location.href = "../index.html"; // Go back to the first page
}