$(document).ready(function(){

  setTimeout(function() {
    let sentences = document.querySelectorAll('.sentence');
    let characterCount = 0;
  
    for (let i = 0; i < sentences.length; i++) {
      let sentence = sentences[i];
      let newContent = '';
  
      // percorre todos os caracteres da frase
      for (let j = 0; j < sentence.textContent.length; j++) {
        let substring = sentence.textContent.substr(j, 1);
        // se tivermos um caractere, envolva-o
        if (substring !== " ") {
          newContent += `<span style="--animation-order: ${characterCount};">${substring}</span>`;
        } else {
          newContent += substring;
        }
        characterCount++;
      }
      sentence.innerHTML = newContent;
    }
    $('.sentence').css('display', 'block');
  }, 1500); 

  $('.closeLoading').on('click', function(){
    $('.loading').fadeOut();
  });

  $('.card').on('click', function() {
    $(this).find('.front').css({
      'transform': 'perspective(800px) rotateY(-170deg)',
      'background-color': 'rgb(205, 205, 205)'
    });
    $(this).find('.back').css({
      'transform': 'perspective(800px) rotateY(-170deg)',
      'box-shadow': '7px 0px 2px 0px rgba(0, 0, 0, 0.3), inset 2px 0px 15px 0px rgba(0, 0, 0, 0.1)',
      'background-color': '#fffffa'
    });
  });

  setTimeout(function() {
    $('.closeLoading').fadeIn();
  }, 29000); 
});

