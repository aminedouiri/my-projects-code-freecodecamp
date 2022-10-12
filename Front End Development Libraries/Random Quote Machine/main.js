var colors = [
        '#16a085','#27ae60','#2c3e50','#f39c12','#e74b3c','#9b59b6','#FB6964',
        '#342224','#472A32','#BDBB99','#77B9A9','#79A857','#ac59b6','#FB6256',
];
let quotesData;
var currentQuote = '',
    currentAuthor = '';
function getAllQuote(){
    return $.ajax({header:{Accept:'application/json'},
        url:'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
        success:function (jsonQuotes){
            if(typeof jsonQuotes == 'string'){
                quotesData = JSON.parse(jsonQuotes);
                console.log('quotesData');
                console.log(quotesData);
            }
        }
    });
}
function getOneRandomQuote(){
    return quotesData.quotes[
        Math.floor(Math.random() *
        quotesData.quotes.length)
    ];
}
function getOneQuote(){
    let oneRandomQuote = getOneRandomQuote();

    currentAuthor = oneRandomQuote.author;
    currentQuote = oneRandomQuote.quote;

    $('.quote-text').animate({opacity: 0},
        500, function () {
            $(this).animate({opacity: 1}, 500);
            $('#text').text(oneRandomQuote.quote);
        });
    
    var color = Math.floor(Math.random() * colors.length);
    $('html body').animate(
        {
            backgroundColor: colors[color],
            color:colors[color]
        },
        1000
    );
    $('.button').animate(
        {backgroundColor: colors[color]},
        1000
    );

}

$(document).ready(function () {
    getAllQuote().then(() => {
        getOneQuote();
    }); 
  
    $('#new-quote').on('click', getOneQuote)
});
