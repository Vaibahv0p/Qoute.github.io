

const fonts = [

  'Arial', sans-serif;

'Verdana', sans-serif;

'Helvetica', sans-serif;

'Times New Roman', serif;

'Georgia', serif;

'Courier New', monospace;

'Lucida Console', monospace;

'Palatino Linotype', serif;

'Tahoma', sans-serif;

'Trebuchet MS', sans-serif;

'Impact', sans-serif;

'Garamond', serif;

'Comic Sans MS', cursive;

'Franklin Gothic Medium', sans-serif;

'Century Gothic', sans-serif;

'Bookman Old Style', serif;

'Copperplate Gothic Light', sans-serif;

'Didot', serif;

'Rockwell', serif;

'Monaco', monospace;

'Brush Script MT', cursive;

'Baskerville', serif;

'Futura', sans-serif;

'Gill Sans', sans-serif;

'Optima', sans-serif;

'Avenir', sans-serif;

'Cambria', serif;

'Calibri', sans-serif;

'Constantia', serif;

'Segoe UI', sans-serif;

'Ubuntu', sans-serif;

'Lato', sans-serif;

'Raleway', sans-serif;

'Merriweather', serif;

'Open Sans', sans-serif;

'Roboto', sans-serif;

'Dancing Script', cursive;

'Playfair Display', serif;

'Josefin Sans', sans-serif;

'Pacifico', cursive;

'Lobster', cursive;

'Montserrat', sans-serif;

'Caveat', cursive;

'Oswald', sans-serif;

'Quicksand', sans-serif;

'Great Vibes', cursive;

'PT Serif', serif;

'Vollkorn', serif;

'Noto Sans', sans-serif;

'Zilla Slab', serif;

'Baloo', cursive;

'Fredoka One', sans-serif;
];

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

    "Good things come to those who wait, but better things come to those who go out and get them.",

    "Be yourself; everyone else is already taken.",

    "What we think, we become.",

    "Your time is limited, so don't waste it living someone else's life.",

    "The only limit to our realization of tomorrow is our doubts of today.",

    "The secret of getting ahead is getting started.",

    "Difficulties strengthen the mind, as labor does the body.",

    "Believe you can and you're halfway there.",

    "Success is not in what you have, but who you are.",

    "Act as if what you do makes a difference. It does.",

    "Happiness is not something ready-made. It comes from your own actions.",

    "It always seems impossible until it's done.",

    "The only way to do great work is to love what you do.",

    "Change your thoughts and you change your world.",

    "An unexamined life is not worth living.",

    "Whether you think you can or you think you can't, you're right.",

    "The purpose of our lives is to be happy.",

    "To live is the rarest thing in the world. Most people exist, that is all.",

    "The greatest glory in living lies not in never falling, but in rising every time we fall.",

    "In the end, we only regret the chances we didn't take.",

    "Dream big and dare to fail.",

    "Success usually comes to those who are too busy to be looking for it.",

    "You miss 100% of the shots you don't take.",

    "Nothing is impossible. The word itself says 'I'm possible!'",

    "Don't watch the clock; do what it does. Keep going.",

    "We may encounter many defeats but we must not be defeated.",

    "The best revenge is massive success.",

    "A journey of a thousand miles begins with a single step.",

    "The harder you work for something, the greater you'll feel when you achieve it.",

    "The future depends on what you do today.",

    "Only I can change my life. No one can do it for me.",

    "If you can dream it, you can do it.",

    "Don't let yesterday take up too much of today.",

    "Everything you can imagine is real.",

    "Perseverance is not a long race; it is many short races one after the other.",

    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",

    "If opportunity doesn't knock, build a door.",

    "What you do today can improve all your tomorrows.",

    "It is never too late to be what you might have been.",

    "Do not wait for the perfect moment; take the moment and make it perfect.",

    "Success is not final, failure is not fatal: it is the courage to continue that counts.",

    "Our lives begin to end the day we become silent about things that matter.",

    "A goal without a plan is just a wish.",

    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",

    "You have within you right now, everything you need to deal with whatever the world can throw at you.",

    "The best preparation for tomorrow is doing your best today.",

    "Live each day as if your life had just begun.",

    "The only person you are destined to become is the person you decide to be.",

    "Work hard in silence, let your success be your noise.",

    "The way to get started is to quit talking and begin doing.",

    "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",

    "Success is not the absence of failure; it's the persistence through failure.",

    "Your life does not get better by chance, it gets better by change.",

    "It’s not whether you get knocked down, it’s whether you get up.",

    "Don’t wait. The time will never be just right.",

    "Everything you’ve ever wanted is on the other side of fear.",

    "If you want to lift yourself up, lift up someone else.",

    "Life is like riding a bicycle. To keep your balance, you must keep moving.",

    "Success is stumbling from failure to failure with no loss of enthusiasm.",

    "You are never too old to set another goal or to dream a new dream.",

    "Opportunities don't happen, you create them.",

    "Act as though it is impossible to fail.",

    "Don’t cry because it’s over, smile because it happened.",

    "He who has a why to live can bear almost any how.",

    "Stay close to anything that makes you glad you are alive.",

    "Life isn’t about finding yourself. It’s about creating yourself.",

    "Do one thing every day that scares you.",

    "If you judge people, you have no time to love them.",

    "You don't have to be great to start, but you have to start to be great.",

    "Failure is simply the opportunity to begin again, this time more intelligently.",

    "The more you praise and celebrate your life, the more there is in life to celebrate.",

    "In order to write about life, first you must live it.",

    "Great things never came from comfort zones.",

    "Do what you can, with what you have, where you are.",

    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",

    "Keep your face always toward the sunshine—and shadows will fall behind you.",

    "The only thing standing between you and your goal is the story you keep telling yourself.",

    "Doubt kills more dreams than failure ever will.",

    "A mind is like a parachute. It doesn't work if it is not open.",

    "The best way out is always through.",

    "The real opportunity for success lies within the person and not in the job.",

    "Sometimes you win, sometimes you learn.",

    "Challenges are what make life interesting. Overcoming them is what makes life meaningful."

];