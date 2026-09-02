(function() {
    'use strict';

    // ==================== Banner Carousel ====================
    var bannerSlides = document.querySelectorAll('.banner-slide');
    var bannerDots = document.querySelectorAll('.banner-dot');
    var bannerPrev = document.getElementById('bannerPrev');
    var bannerNext = document.getElementById('bannerNext');
    var currentSlide = 0;
    var bannerInterval = null;
    var BANNER_AUTOPLAY_INTERVAL = 5000;

    function showSlide(index) {
        if (index < 0) index = bannerSlides.length - 1;
        if (index >= bannerSlides.length) index = 0;

        bannerSlides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        bannerDots.forEach(function(dot) {
            dot.classList.remove('active');
        });

        bannerSlides[index].classList.add('active');
        bannerDots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoplay() {
        stopAutoplay();
        bannerInterval = setInterval(nextSlide, BANNER_AUTOPLAY_INTERVAL);
    }

    function stopAutoplay() {
        if (bannerInterval) {
            clearInterval(bannerInterval);
            bannerInterval = null;
        }
    }

    if (bannerSlides.length > 0) {
        // Dot navigation
        bannerDots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                showSlide(index);
                startAutoplay();
            });
        });

        // Arrow navigation
        if (bannerPrev) {
            bannerPrev.addEventListener('click', function() {
                prevSlide();
                startAutoplay();
            });
        }
        if (bannerNext) {
            bannerNext.addEventListener('click', function() {
                nextSlide();
                startAutoplay();
            });
        }

        // Pause on hover
        var bannerEl = document.getElementById('banner');
        if (bannerEl) {
            bannerEl.addEventListener('mouseenter', stopAutoplay);
            bannerEl.addEventListener('mouseleave', startAutoplay);
        }

        // Start autoplay
        startAutoplay();
    }

    // ==================== Back to Top ====================
    var backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            var scrollTop = window.pageYOffset;
            var scrollStep = scrollTop / 20;
            var scrollInterval = setInterval(function() {
                if (window.pageYOffset > 0) {
                    window.scrollBy(0, -scrollStep);
                } else {
                    clearInterval(scrollInterval);
                }
                if (window.pageYOffset < scrollStep) {
                    window.scrollTo(0, 0);
                    clearInterval(scrollInterval);
                }
            }, 15);
        });
    }

    // ==================== Smooth Scroll for Anchor Links ====================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offset = target.offsetTop - 60;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==================== Navigation Active State ====================
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navItems.forEach(function(nav) {
                nav.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // ==================== Product Card Hover Effect ====================
    var productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = '#1e50ae';
        });
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = '#e0e0e0';
        });
    });

})();
