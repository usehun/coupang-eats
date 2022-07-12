$( document ).ready( function() {           

    $( '.slider' ).slick( {
      autoplay: true,
      autoplaySpeed: 1000,
      slidesToShow: 7,
      slidesToScroll: 1,
      pauseOnFocus: false, 
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,                  
          }
        }
      ]

    } );


    $('div[name="playCover"]').click(function(){
          var playCoverIndex = $('div[name="playCover"]').index(this),
          playurl = '',
          playHtml = '';
          if(playCoverIndex == 0 ) {
              playurl = 'https://www.youtube.com/embed/gS65eGciMfc?autoplay=1&controls=0&showinfo=0&rel=0&mute=1';
          }
          playHtml += '<iframe width="100%" height="250" src="' + playurl +'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
          $(this).find('.yt_box').html(playHtml);
      });
  } );