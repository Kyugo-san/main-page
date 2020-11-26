var modeBtn = document.querySelector('#mode-btn');
var btn = document.querySelectorAll('.btn')
var primaryItems = document.getElementsByClassName('primaryItems')

// Mode toggler
modeBtn.addEventListener('click', () => {
    // Backgroun toggler
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
    // Primary elements toggler
    for (let i = 0; i < primaryItems.length; i++) {
        primaryItems.item(i).classList.toggle('bg-dark')
        primaryItems.item(i).classList.toggle('text-white')
        primaryItems.item(i).classList.toggle('bg-light')
        primaryItems.item(i).classList.toggle('text-black')
    }
    // Mode button / Button toggler
    for (let i = 0; i < btn.length; i++) {
        btn.item(i).classList.toggle('btn-light')
        btn.item(i).classList.toggle('btn-dark')
    }
    if(modeBtn.classList.contains('btn-light')){
        modeBtn.classList.add('fa-sun')
        modeBtn.classList.remove('fa-moon')
    }else if(modeBtn.classList.contains('btn-dark')){
        modeBtn.classList.add('fa-moon')
        modeBtn.classList.remove('fa-sun')
    }
});
// Mode toggler