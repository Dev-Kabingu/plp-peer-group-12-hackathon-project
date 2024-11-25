// console.log("Hello!");
// let names="Rency";
// console.log(names);
// // creating variable usinng var
// var naming='Resly';
// console.log(naming);
// // creating a variable sing let
// let name1='Cherop';
// console.log(`Hello ${name1}`);
// document.getElementById('first').innerHTML='Hello Rency';//To change contenct page
// //functions are block of code that can be executed when called
// function btn_click(){
//   document.getElementById('first').innerHTML='You have clicked the button below';
// }
// document.getElementById('second').innerHTML='Javascript ';
// alert('Hi');
const apikey='b6436d4c78e443319b1950b0cb64ce5b';
const main =document.getElementsByClassName('.main');
async function fetchRandomNews(){
  try {
    const apiURL=`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`
    const response= await fetch(apiURL)
    const data=await response.json()
    // console.log(data);
    return data.articles;
  } catch (error) {
    console.error("Error fetching random news!!",error)
    return[]
  }
}
function displayBlogs(articles){
  main.innerHTML="";
  articles.forEach((articles)=>{
    const main1=document.createElement("div");
    main1.classList.add('main1');
    const img=document.createElement("img");
    Image.src=articles.urlToImage;
    Image.alt=articles.title;
    const title=document.createElement("h2");
    title.textContent=articles.title;
    const description=document.createElement("p");
    description.textContent=articles.description;
    main1.appendChild(img);
    main1.appendChild(title);
    main1.appendChild(description);
    main.appendChild(main1);
  
  })
}
(async ()=>{
  try {
    const articles=await fetchRandomNews()
    // console.log(articles);
    displayBlogs(articles);
  } catch (error) {
    console.error("Error fetching random news!!",error)
  }
})();