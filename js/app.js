// scripts for manu to make it more responive and better use
const Menu = document.querySelector('.collapse_menu');
const links = document.querySelector('.links');
const items = document.querySelector('.grid');
Menu.addEventListener('click', DisplayMenu);

function DisplayMenu(even) {
  for (let i = 0; i < Menu.childNodes.length; i++) {
    Menu.childNodes[i].classList.toggle('open');
    Menu.classList.toggle('open');
  }

  if (Menu.classList.contains('open')) {
    links.style.display = 'flex';
  } else {
    links.style.display = 'none';
  }
}

$(window).load(function () {
  $('.grid-item img').click(function () {
    $('.lightbox').fadeIn(300);
    $('.lightbox').append(
      "<img src='" +
        $(this).attr('src') +
        "' alt='" +
        $(this).attr('alt') +
        "' />"
    );
    $('.filter').css('background-image', 'url(' + $(this).attr('src') + ')');
    /*$(".title").append("<h1>" + $(this).attr("alt") + "</h1>");*/
    $('html').css('overflow', 'hidden');
    if ($(this).is(':last-child')) {
      $('.arrowr').css('display', 'none');
      $('.arrowl').css('display', 'block');
    } else if ($(this).is(':first-child')) {
      $('.arrowr').css('display', 'block');
      $('.arrowl').css('display', 'none');
    } else {
      $('.arrowr').css('display', 'block');
      $('.arrowl').css('display', 'block');
    }
  });

  $('.close').click(function () {
    $('.lightbox').fadeOut(300);
    $('.lightbox h1').remove();
    $('.lightbox img').remove();
    $('html').css('overflow', 'auto');
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      $('.lightbox').fadeOut(300);
      $('.lightbox img').remove();
      $('html').css('overflow', 'auto');
    }
  });

  $('.arrowr').click(function () {
    var imgSrc = $('.lightbox img').attr('src');
    console.log(imgSrc);
    var search = $('.grid').find("div[src$='" + imgSrc + "']");
    console.log(search);
    var newImage = search.next().attr('src');
    console.log(newImage);

    /*$(".lightbox img").attr("src", search.next());*/
    $('.lightbox img').attr('src', newImage);

    $('.filter').css('background-image', 'url(' + newImage + ')');

    if (!search.next().is(':last-child')) {
      $('.arrowl').css('display', 'block');
    } else {
      $('.arrowr').css('display', 'none');
    }
  });

  $('.arrowl').click(function () {
    var imgSrc = $('.lightbox img').attr('src');
    var search = $('.grid').find("div[src$='" + imgSrc + "']");
    var newImage = search.prev().attr('src');
    /*$(".lightbox img").attr("src", search.next());*/
    $('.lightbox img').attr('src', newImage);
    $('.filter').css('background-image', 'url(' + newImage + ')');

    if (!search.prev().is(':first-child')) {
      $('.arrowr').css('display', 'block');
    } else {
      $('.arrowl').css('display', 'none');
    }
  });
});
