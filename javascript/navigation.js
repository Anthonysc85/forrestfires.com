/**
 *
 *  navigation.js
 *
 * Date: 2017. 10. 13. 22:04
 * Version: 1.0
 * Author: Kádár Péter <kp@kpdesign.hu>
 * Project: forrestfires.com
 */

jQuery(document).ready(function ($) {
  var $overlay = $('<div class="overlay"></div>'),
      $body = $('body'),
      $navbar = $('.js-navbar'),
      $navbarToggle = $('.js-navbar-toggle');

  $body.append($overlay);

  $navbarToggle.on('click', function(event) {
    event.preventDefault();

    if ($body.hasClass('nav-is-visible')) {
      closeNav();
    } else {
      openNav();
    }
  });

  $overlay.on('click', function (event) {
    event.preventDefault();
    closeNav();
  });

  function openNav() {
    $body.addClass('nav-is-visible');
    $overlay.addClass('is-visible');
    $navbar.addClass('is-open');
    $navbarToggle.addClass('is-active');
  }

  function closeNav() {
    $body.removeClass('nav-is-visible');
    $overlay.removeClass('is-visible');
    $navbar.removeClass('is-open');
    $navbarToggle.removeClass('is-active');
  }
});

