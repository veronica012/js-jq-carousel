//ogni click sulla freccia next (destra) si visualizza l'immagine successiva
//bisogna intercettare il click e ad ogni click si visualizzerà l'immagine successiva che avrà classe active
$('.next').click(function() {
    //creo la variabile img corrente con classe 'active' per recuperarla
    var img_corrente = $('img.active');
    //creo la variabile pallino corrente con classe 'active' per recuperarla
    var pallino_corrente = $('.fa-circle.active');
    //tolgo la classe active all'immagine corrente per poterla poi applicare alla successiva
    img_corrente.removeClass('active');
    //rimuovo da pallino la classe active per poterla poi applicare al pallino successivo
    pallino_corrente.removeClass('active');
    //creo la variabile immagine successiva per recuperarla
    var img_successiva = img_corrente.next('img');
    //creo la variabile pallino successivo per recuperarlo
    var pallino_successivo = pallino_corrente.next('.fa-circle');
    //verifico che esista una img successiva
    if (img_successiva.length != 0) {
        //esiste l'img successiva quindi modifico l'img successiva con la classe active
        img_successiva.addClass('active');
        //modifico il pallino successivo con la classe active
        pallino_successivo.addClass('active');
    } else {
        //non c'è un'img successiva allora torno alla prima img e applico la classe active
        img_successiva = $('img:first-child');
        img_successiva.addClass('active');
        //modifico pallino pallino_successivo
        pallino_successivo = $('.fa-circle:first-child');
        pallino_successivo.addClass('active');
    }
});

//lo stesso procedimento si applica al click sulla freccia prev a sinistra
//bisogna intercettare il click e ad ogni click si visualizzerà l'immagine precedente che avrà classe active
$('.prev').click(function() {
    //creo la variabile img corrente con classe 'active' per recuperarla
    var img_corrente = $('img.active');
    console.log(img_corrente);
    var pallino_corrente = $('.fa-circle.active');
    //tolgo la classe active all'immagine corrente per poterla poi applicare alla precedente
    img_corrente.removeClass('active');
    pallino_corrente.removeClass('active');
    //creo la variabile immagine precedente per recuperarla
    var img_precedente = img_corrente.prev('img');
    console.log(img_precedente);
    var pallino_precedente = pallino_corrente.prev('.fa-circle');
    //verifico che esista una img img_precedente
    if(img_precedente.length != 0) {
    //modifico l'img precedente con la classe active
        img_precedente.addClass('active');
        pallino_precedente.addClass('active');
    } else {
         //se non c'è l'img precedente
         //torno sull'ultima foto e applico la classe active
        img_precedente = $('img:last-of-type');
        img_precedente.addClass('active');
        pallino_precedente = $('.fa-circle:last-child');
        pallino_precedente.addClass('active');
    }
});


//rendere i pallini cliccabili
//intercettare il click sui pallini
  $('.dots i').click(function(){
    //creo la variabile per recupera l'indice_corrente
    var indice_corrente = $(this).index();
    //associo l'indice corrente all'immagine corrispondente creando la variabile elemento corrente
    var elemento_corrente = $('img').eq(indice_corrente);
    //rimuovo su immagine corrente la classe active
    $('img.active').removeClass('active');
    //modifico elemento corrente con la classe active
    elemento_corrente.addClass('active');

    $('i.active').removeClass('active');
    $(this).addClass('active');
  });


//intercettare il click su button #start
  $('#start').click(function(){
      var slideIndex = 0;
      carousel();

      function carousel() {
          var img_corrente = $('img.active');
          //creo la variabile pallino corrente con classe 'active' per recuperarla
          var pallino_corrente = $('.fa-circle.active');
          //tolgo la classe active all'immagine corrente per poterla poi applicare alla successiva
          img_corrente.removeClass('active');
          //rimuovo da pallino la classe active per poterla poi applicare al pallino successivo
          pallino_corrente.removeClass('active');
          //creo la variabile immagine successiva per recuperarla
          var img_successiva = img_corrente.next('img');
          //creo la variabile pallino successivo per recuperarlo
          var pallino_successivo = pallino_corrente.next('.fa-circle');
          //verifico che esista una img successiva
          if (img_successiva.length != 0) {
              //esiste l'img successiva quindi modifico l'img successiva con la classe active
              img_successiva.addClass('active');
              //modifico il pallino successivo con la classe active
              pallino_successivo.addClass('active');
          } else {
              //non c'è un'img successiva allora torno alla prima img e applico la classe active
              img_successiva = $('img:first-child');
              img_successiva.addClass('active');
              //modifico pallino pallino_successivo
              pallino_successivo = $('.fa-circle:first-child');
              pallino_successivo.addClass('active');
          }
          setTimeout(carousel, 2000); // l'immagine cambia ogni 2 secondi
      }

  });
