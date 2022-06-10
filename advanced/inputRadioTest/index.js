const radio1 = document.getElementById('radio1')
const radio2 = document.getElementById('radio2')
const radio3 = document.getElementById('radio3')
const submitBtn = document.getElementById('submit')


submitBtn.addEventListener('click', () => {
    console.log(radio1.value)
    console.log(radio2.value)
    console.log(radio3.value)
})