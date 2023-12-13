function rand() {

    var qoute=[" “Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”",
    " “So many books, so little time.”",
     " “If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” ",
     " “The fool doth think he is wise, but the wise man knows himself to be a fool” ",
     " “I solemnly swear that I am up to no good” " ];

    var said = ["-Albert Einstein","-Frank Zappa","-J.K. Rowling","-William Shakespeare","-J.K. Rowling"];
  
    var num= Math.floor(Math.random()*qoute.length);

    document.getElementById("qoute").innerHTML=qoute[num];
    document.getElementById("said-by").innerHTML=said[num];

}