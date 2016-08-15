$(document).ready(function(){
  $("form#sentence").submit(function(event){
    event.preventDefault();
    var sentence = $('#inputSentence').val();

    var words = sentence.split(' ');

    var longWords = [];

    words.forEach(function(word){
      if(word.length >= 3){
        longWords.push(word);
      }
    })
    longWords.reverse()

    var str = longWords.join(' ');

    alert(str);

  });
});
