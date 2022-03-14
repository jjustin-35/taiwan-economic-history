let mobileNav = $('#mobileNav')
mobileNav.on('click', function () {
    $('ul.mobileUl').slideToggle('slow')
})
slideToggle可以讓選單向下滑入

// js寫法
// let mobileNav2 = document.getElementById('mobileNav')
// let mobileul = document.querySelector('ul.mobileUl')
// mobileNav2.addEventListener('click', function () {
//     if (mobileul.style.display == 'flex') {
//         mobileul.style = 'display: none'
//     } else {
//         mobileul.style = 'display: flex'
//     }
// })
//須加上緩動語法