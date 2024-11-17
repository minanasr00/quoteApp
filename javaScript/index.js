var quote = document.getElementById("quote");
var author = document.getElementById("author");
var quotes = [{
    quote: "Be yourself; everyone else is already taken.",
    author : 'Oscar Wilde'
}, {
    quote: "Be the change that you wish to see in the world.",
    author : 'Mahatma Gandhi'
    }, {
    quote: "If you tell the truth, you don't have to remember anything.",
    author : "Mark Twain"
    }, {
    quote: "You only live once, but if you do it right, once is enough.",
    author : "Mae West"
    }, {
    quote : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author : "Mahatma Gandhi" 
    }]

var memory
function addQuote() {
    var Qindex = Math.floor(Math.random() * 5)
    if (Qindex==memory) {
        addQuote()
    } else {
        memory=Qindex
        quote.innerText = quotes[Qindex].quote;        
        author.innerText = quotes[Qindex].author;        
    }
}


