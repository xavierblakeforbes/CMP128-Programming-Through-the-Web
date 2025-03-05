let quotes = [ "Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that", " Even if you feel that only darkness lies ahead... As long as you hold hands together... See it through as one... ...the world will never end! The world exists within all of you.", "You have to believe in yourself when no one else does", "Keep moving forward"];
let quote = quotes[0]; // the first quote 
function logfirstquote()
{
  let randomquote= Math.floor(Math.random()*quotes.length);
  console.log(quotes[randomquote]);
  let myQuote=quotes[randomquote];
  let quoteDivElement= document.getElementByID("MyQuote");
  quoteDivElement.innerHTML = myQupte;
}
logfirstquote();
