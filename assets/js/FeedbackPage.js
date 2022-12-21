const stars = document.querySelectorAll('img')
console.log("elements", stars);

let starsArray = Array.from(stars)

starsArray.forEach((element, index, array) => {
    element.addEventListener('click', () => {
        starsCleaner()
        for (let i = 0; i <= index; i++) {
            array[i].classList.add('selected')
        }
    })
    element.addEventListener('mouseover', () => {
        starsCleaner()
        for (let i = 0; i <= index; i++) {
            array[i].classList.add('selected')
        }
    })
});

function starsCleaner() {
    starsArray.forEach(star => {
        star.classList.remove('selected')
    })
}

const insericiFeedback = (event) => {  
    const feedbackInserito = document.getElementById('form').value  
    if (event.key === 'Enter'){
        document.getElementById('form').value = ''
        console.log(feedbackInserito);
        return feedbackInserito
    }
}
