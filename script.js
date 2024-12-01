

const goToQuoteBtn = document.getElementById("go-to-quote-btn");
const goToAboutBtn = document.getElementById("go-to-about-btn");
const goToContactBtn = document.getElementById("go-to-contact-btn");

const backToHomeBtn = document.getElementById("back-to-home-btn");
const backToHomeAboutBtn = document.getElementById("back-to-home-about-btn");
const backToHomeContactBtn = document.getElementById("back-to-home-contact-btn");

const newQuoteBtn = document.getElementById("new-quote-btn");

const homePage = document.getElementById("home-page");
const quotePage = document.getElementById("quote-page");
const aboutPage = document.getElementById("about-page");
const contactPage = document.getElementById("contact-page");

const quoteText = document.getElementById("quote-text");

goToQuoteBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    quotePage.style.display = "block";
});

goToAboutBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    aboutPage.style.display = "block";
});

goToContactBtn.addEventListener("click", () => {
    homePage.style.display = "none";
    contactPage.style.display = "block";
});

backToHomeBtn.addEventListener("click", () => {
    quotePage.style.display = "none";
    homePage.style.display = "block";
});

backToHomeAboutBtn.addEventListener("click", () => {
    aboutPage.style.display = "none";
    homePage.style.display = "block";
});

backToHomeContactBtn.addEventListener("click", () => {
    contactPage.style.display = "none";
    homePage.style.display = "block";
});

newQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomFont = Math.floor(Math.random() * fonts.length);
    quoteText.textContent = quotes[randomIndex];
    quoteText.style.fontFamily = fonts[randomFont];
});

const quotes = [
    "The best way to predict the future is to create it.",
    "In the middle of difficulty lies opportunity.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Life is what happens when you're busy making other plans.",
    "You only live once, but if you do it right, once is enough.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "You only live once, but if you do it right, once is enough.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "The only impossible journey is the one you never begin.",
    "The journey of a thousand miles begins with one step.",
    "Good things come to those who wait, but better things come to those who go out and get them.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Act as if what you do makes a difference. It does.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Believe you can and you're halfway there.",
    "Success is not in what you have, but who you are.",
    "The way to get started is to quit talking and begin doing.",
    "Dream big and dare to fail.",
    "To succeed in life, you need two things: ignorance and confidence.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "It’s not the years in your life that count. It’s the life in your years.",
    "Success is how high you bounce when you hit bottom.",
    "The only way to do great work is to love what you do.",
    "If you can dream it, you can do it.",
    "Everything you can imagine is real.",
    "Success is not measured by what you accomplish, but by the obstacles you overcome.",
    "It’s not about ideas. It’s about making ideas happen.",
    "You miss 100% of the shots you don’t take.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "I find that the harder I work, the more luck I seem to have.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "It always seems impossible until it’s done.",
    "Do one thing every day that scares you.",
    "It’s going to be hard, but hard does not mean impossible.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success is not in what you have, but who you are.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "Life is either a daring adventure or nothing at all.",
    "The only way to do great work is to love what you do.",
    "If you’re going through hell, keep going.",
    "Don’t limit your challenges. Challenge your limits.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "It is never too late to be what you might have been.",
    "The best revenge is massive success.",
    "Believe in yourself and all that you are.",
    "If you can dream it, you can do it.",
    "Your life does not get better by chance, it gets better by change.",
    "You are never too old to set another goal or to dream a new dream.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "I find that the harder I work, the more luck I seem to have.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "The harder you work, the luckier you get.",
    "Believe you can and you're halfway there.",
    "Act as if what you do makes a difference. It does.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "You are never too old to set another goal or to dream a new dream.",
    "The best way to predict the future is to create it.",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well."
];

const fonts = [
    "Arial, sans-serif", 
    "Verdana, sans-serif", 
    "Helvetica, sans-serif", 
    "Times New Roman, serif", 
    "Georgia, serif", 
    "Courier New, monospace", 
    "Lucida Console, monospace", 
    "Palatino Linotype, serif", 
    "Tahoma, sans-serif", 
    "Trebuchet MS, sans-serif", 
    "Comic Sans MS, cursive", 
    "Garamond, serif", 
    "Century Gothic, sans-serif", 
    "Pacifico, cursive", 
    "Lobster, cursive", 
    "Montserrat, sans-serif", 
    "Caveat, cursive", 
    "Oswald, sans-serif", 
    "Great Vibes, cursive", 
    "Roboto, sans-serif",
    "Poppins, sans-serif", 
    "Raleway, sans-serif", 
    "Dancing Script, cursive", 
    "Lato, sans-serif", 
    "Merriweather, serif", 
    "Open Sans, sans-serif", 
    "Playfair Display, serif", 
    "Josefin Sans, sans-serif", 
    "Lora, serif", 
    "Quicksand, sans-serif", 
    "Nunito, sans-serif", 
    "Bitter, serif", 
    "Ubuntu, sans-serif", 
    "Fira Sans, sans-serif", 
    "Cabin, sans-serif", 
    "Exo 2, sans-serif", 
    "Arimo, sans-serif", 
    "Zilla Slab, serif", 
    "Candal, sans-serif", 
    "Roboto Condensed, sans-serif", 
    "Lora, serif", 
    "Spectral, serif", 
    "Muli, sans-serif", 
    "Source Sans Pro, sans-serif", 
    "Varela Round, sans-serif", 
    "Archivo, sans-serif", 
    "Titillium Web, sans-serif", 
    "Oswald, sans-serif", 
    "PT Sans, sans-serif", 
    "Rokkitt, serif", 
    "Bitter, serif"
];
const audioPlayer = document.getElementById('audioPlayer');

audioPlayer.play();
