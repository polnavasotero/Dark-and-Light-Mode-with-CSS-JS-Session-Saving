/*if this returns us a true, then the preffered colour scheme by the user is dark and 
if it is false the preffered colour scheme by the user is light*/
/*with window.matchMedia we obtain the user's system preferences via operating system */

const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; 
const slider = document.getElementById('slider');   /*obtains the element in the html and saves it*/

const setTheme = (theme) => {    /*what mode does the user use, document.documentElement. is the root's part of the document in this case the html*/
document.documentElement.setAttribute('data-theme', theme); /*using the local storage of the browser to save the theme as a user's preference of the user*/
    localStorage.setItem('theme', theme);                       /*the storage persists even in diferent sessions or refreshing, also it will save the info regardles of a browser closing event*/
}

slider.addEventListener('click', () => { /*obtains the theme from storage, and we use the contrary*/
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);
