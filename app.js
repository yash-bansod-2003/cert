
const btn = document.getElementById('btn');
const status = document.getElementById('status');
const texts = document.querySelectorAll('.text');

btn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    if (name === "") {
        status.innerText = "Please enter name"
        status.style.color = "red"
        return;
    }

    texts.forEach((text) => {
        text.innerText = name;
    });
    status.innerText = "Dome Scroll Down..!"
    status.style.color = "green"
});