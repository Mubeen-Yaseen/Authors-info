const AuthorInfo = document.getElementById('Author-info');
const loadbtn = document.getElementById('loadbtn')

let fromstarting = 0;
let fromending = 8;
let showinarray = [];
// Fetch API 
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json').then((obj) => obj.json()).then((data) => {
    showinarray = data;
    showauthordata(showinarray.slice(fromstarting, fromending));
})
.catch((err)=>{
    AuthorInfo.innerHTML='<p class="errsms">There was an error  while loading the Author information</p>'
})
const showauthordata = (writer) => {
    writer.forEach(({ author, bio, image, url }, index) => {
        AuthorInfo.innerHTML += `
        <div id="${index}" class="author-cart">
        <h1 id="authorname">${author.length > 15 ? author.slice(0, 15) + "..." : author}</h1>
        <img id="author-img" src="${image}" alt="${author}" >
        <div id="color-line"></div>
        <div id="author-bio">${bio.length > 50 ? bio.slice(0, 50) + "..." : bio}</div>
        <a id="author-link" href="${url}" target="_blank">${author.length > 15 ? author.slice(0, 15) + "..." : author} Author page</a>
        </div>
        `
    });
}
const showmoreauthoredata = () => {
    fromstarting += 8;
    fromending += 8;
    showauthordata(showinarray.slice(fromstarting, fromending));
    if (showinarray.length <= fromending) {
        loadbtn.disabled = true;
        loadbtn.style.cursor = "not-allowed";
        loadbtn.textContent = "No More data for loading";
    }
}


loadbtn.addEventListener('click',showmoreauthoredata)