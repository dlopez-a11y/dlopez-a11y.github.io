// nice select
$(document).ready(() => {
    $('#header').load("/assets/header.html");
    $('#footer').load("/assets/footer.html");

    setTimeout(() => {
        $('a[target="_blank"]').each(function (index, element) {
            if ($(element).find('img').length == 0 && $(element).find('[role="img"]').length == 0) {
                $(element).append('<i class="bi bi-box-arrow-up-right"></i>');
            }
            $(element).attr('aria-details', 'Abre en nueva pestaña');
        });
    }, 1);
});

(function () {
    window.setTimeout(() => {
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

        // Iterate over them
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

            // Remove popover on ESC
            document.addEventListener('keydown', function (e) {
                if ((e.keyCode || e.which) === 27) {
                    popoverContainer.classList.remove('open');
                    liveRegion.innerText = '';
                    el.setAttribute('aria-pressed', false);
                }
            });
        });
    }, 100);
}());