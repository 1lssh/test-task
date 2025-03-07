document.querySelectorAll('.custom-radio').forEach(radio => {
    radio.addEventListener('click', function () {
        const input = this.previousElementSibling;
        input.checked = true;
    });
});