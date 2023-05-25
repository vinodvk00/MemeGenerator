const generateBtn = document.querySelector("#btn");
const img = document.querySelector(".main img");
const memeTitle = document.querySelector(".meme-title")

async function randomMemeGenerator() {
  try {
    const response = await fetch("https://meme-api.com/gimme");
    const data = await response.json();
    const url = data.url;
    img.src = url;
    memeTitle.innerHTML = data.title;
  } catch (error) {
    console.error(error);
  }
}

generateBtn.addEventListener("click", randomMemeGenerator);
randomMemeGenerator();


// const img = document.querySelector(".main img");
// const memeTitle = document.querySelector(".main .meme-title");
// const source = document.querySelector(".body .meme-source");

// const update = (url,texts,page_url) =>{
//     img.setAttribute("src",url);
//     memeTitle.innerHTML = texts;
//     source.innerHTML = `Source : ${page_url}`
// };

// const generate = () =>{
//     fetch("https://meme-api.com/gimme")
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data);
//         update(data.url,data.texts,data.page_url);
//     });
// };

// generate();
