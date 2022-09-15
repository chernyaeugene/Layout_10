// let old;
//
// document.querySelector('.header_chose').addEventListener('click',e => {
//     if (e.target.classList.contains('ch')) {
//         if (old) old.style.background = '';
//         old = e.target;
//         e.target.style.background = '#F93264';
//         e.target.style.color = 'white';
//     }
// });
// const menuLinks = document.querySelectorAll('.ch[data-id]');
// const dataAttributes = [...document.querySelectorAll('.ch[dat-id]')].map((item)=>{
//     return {
//         'data': item.dataset.id
//     }
// });
// if (menuLinks.length > 0) {
//     menuLinks.forEach((menuLink) => {
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });
//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         if (menuLink.dataset.id && document.querySelector(menuLink.dataset.id)) {
//             dataAttributes.forEach((item,index)=>{
//                 menuLink.dataset.id === item.data ? menuLinks[index].style.background = '#F93264' : menuLinks[index].style.background = 'inherit'
//             })
//         }
//     }
// }