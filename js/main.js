var modeBtn = document.querySelector('#mode-btn');
var primaryElements = document.querySelector('.primaryElement')

modeBtn.addEventListener('click', () => {
    // Backgroun toggler
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
    // Primary elements toggler
    primaryElements.classList.toggle('bg-dark')
    primaryElements.classList.toggle('text-white')
    primaryElements.classList.toggle('bg-light')
    primaryElements.classList.toggle('text-black')
    // Mode button toggler
    modeBtn.classList.toggle('btn-light')
    modeBtn.classList.toggle('btn-dark')
    if(modeBtn.classList.contains('btn-light')){
        modeBtn.classList.add('fa-sun')
        modeBtn.classList.remove('fa-moon')
    }else if(modeBtn.classList.contains('btn-dark')){
        modeBtn.classList.add('fa-moon')
        modeBtn.classList.remove('fa-sun')
    }
});