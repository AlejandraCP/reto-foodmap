// Splash
$(document).ready(function () {
  $(".view-log-sign").hide();

  function hideSplash() {
    $("#splash").fadeOut();
  }

  function showSecond() {
    $(".second-view").fadeIn();
  }
  setTimeout(hideSplash, 2500, 0.1);
  setTimeout(showSecond, 2700);
})

var $restaurants = $('#box-rest');
var $input = $('input');
var $restaurantChosse = $(".restaurants");

// Agregar total de reaturantes

function totalRestaurant(e) {
  for (i = 0; i < data.length; i++) {
    $restaurants.append('<div data-toggle="modal" data-target="#myModal" class="col-xs-5 col-md-2 restaurants" id="restaurants" data-name="' + data[i].name + '"data-type="' + data[i].type + '"><p class="name name-restaurant">' + data[i].name + '</p><img class="img-restaurant"  src=' + data[i].image + '></div>')
  }
}

totalRestaurant();

// Resultado de búsqueda en input

function showSearch() {
  var userSearch = $input.val().toLowerCase();
  $('.restaurants').hide();
  $('.restaurants').each(function () {
    var nameRestaurant = $(this).text();
    if (nameRestaurant.indexOf(userSearch) !== -1) {
      $(this).show();
    }
  });
  $('.restaurants').each(function () {
    var nameRestaurant = $(this).text();
    var typeFood = $(this).data('type');
    if (typeFood.indexOf(userSearch) !== -1) {
      $(this).show();
    }
  });
};

$input.keyup(showSearch);

// sugerencia al escribir en el input

$(function () {
  var restaurantsAll = [
    "Vegetariana",
    "Mexicana",
    "Chifa",
    "Hindú",
    "Mediterránea",
    "Fusión",
    "El Jardín de Jazmín",
    "Xauxa",
    "Madre Natura",
    "El Taco Naco",
    "Chulos",
    "La Burrería",
    "Royal",
    "Chifa Jin",
    "Chifa Nuevo Mundo",
    "Massala",
    "Mantra Indian Cuisine",
    "Mantra Garden Restobar",
    "Alameda",
    "Valentino",
    "Terra Mia",
    "Aromas Peruanos",
    "La Trastienda",
    "Mishkina"
  ];
  $("#input").autocomplete({
    source: restaurantsAll
  });
});

// modal
$('.restaurants').on('click', function () {
  for (i = 0; i < data.length; i++) {
    if ($(this).data('name') === data[i].name) {
      $('.name-restaurant-modal').html('<p>' + data[i].name + '</p>');
      $('.restaurant-image').html('<img src="' + data[i].restaurant + '" alt="Restaurante ' + data[i].name + '" class="image-modal-size">').append('<p class="phrase" >¡Aquí tienes la ruta para llegar a nosotros!</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4923059157422!2d-77.02916698551935!3d-12.126502946689822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e1!3m2!1ses!2spe!4v1514671278124" width="350" height="200" frameborder="0" style="border:0" class="image-modal-size" allowfullscreen></iframe>').append('<span class="glyphicon glyphicon-map-marker icons" aria-hidden="true"></span>').append('<span class="icons address">' + data[i].address + ' - ' + data[i].district + '</span>').append('<p class="address"><span class="glyphicon glyphicon-usd icons" aria-hidden="true"></span>  Rango de precios: ' + data[i].price + '</p>').append('<p class="address"><span class="glyphicon glyphicon-earphone icons" aria-hidden="true"></span>  ' + data[i].phonenumber + '</p>').append('<p class="address"><span class="glyphicon glyphicon-calendar icons" aria-hidden="true"></span> ' + data[i].businesshours + '</p>')
    }
  }
});