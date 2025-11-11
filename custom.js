(function () {
    // Iterate over them
    Array.from(document.querySelectorAll('[title]')).forEach((el) => {
        // Get the message from the data-content element
        var tooltipContainer = document.createElement('span');
        tooltipContainer.classList.add('tooltip-container');

        el.after(tooltipContainer);
        tooltipContainer.append(el);
        tooltipContainer.innerHTML += '<span role="tooltip" aria-hidden="true"><span>' + el.getAttribute('title') + '</span></span>';
        el = tooltipContainer.querySelector('[title]');
        el.removeAttribute('title');

        // Toggle the message
        tooltipContainer.addEventListener('mouseover', function (e) {
            tooltipContainer.classList.add('hover');
        });

        tooltipContainer.addEventListener('mouseleave', function (e) {
            tooltipContainer.classList.remove('hover');
        });

        // Close on outside
        el.addEventListener('focus', function (e) {
            el.classList.add('focused');
        });

        el.addEventListener('blur', function (e) {
            el.classList.remove('focused');
        });

        // Remove tooltip on ESC
        document.addEventListener('keydown', function (e) {
            if ((e.keyCode || e.which) === 27) {
                tooltipContainer.classList.remove('hover');
                el.classList.remove('focused');
            }
        });
    });

    Array.from(document.querySelectorAll('[data-popover]')).forEach((el) => {
        // Get the message from the data-content element
        var popoverContainer = document.createElement('span');
        popoverContainer.classList.add('popover-container');

        el.after(popoverContainer);
        popoverContainer.append(el);
        popoverContainer.innerHTML += '<span role="status"><span></span></span>';
        el = popoverContainer.querySelector('[data-popover]');

        // Get the live region element
        var liveRegion = popoverContainer.querySelector('[role="status"]').querySelector('span');

        // Toggle the message
        el.addEventListener('click', e => {
            if (popoverContainer.classList.contains('open')) {
                popoverContainer.classList.remove('open');
                liveRegion.innerText = '';
                el.setAttribute('aria-pressed', false);
            } else {
                popoverContainer.classList.add('open');
                window.setTimeout(() => {
                    liveRegion.innerText = el.getAttribute('data-popover');
                }, 1);
                el.setAttribute('aria-pressed', true);
            }
        });

        // Close on outside click
        document.addEventListener('click', e => {
            if (!popoverContainer.contains(e.target)) {
                popoverContainer.classList.remove('open');
                liveRegion.innerText = '';
                el.setAttribute('aria-pressed', false);
            }
        });

        // Remove tooltip on ESC
        document.addEventListener('keydown', function (e) {
            if ((e.keyCode || e.which) === 27) {
                popoverContainer.classList.remove('open');
                liveRegion.innerText = '';
                el.setAttribute('aria-pressed', false);
            }
        });
    });
}());

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});