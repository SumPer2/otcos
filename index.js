document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        gap: 10,
        focusAt: 'center',
        breakpoints: {
            1300: {
                perView: 1,
                gap: 20,
            },
            850: {
                perView: 1,
                gap: 20,
            },
        },
    }).mount();

    const slides = document.querySelectorAll('.glide__slide');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');
    const modalArrows = document.querySelectorAll('.modal-arrow');
    let currentIndex = 0;

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            const img = slide.querySelector('img');
            if (img) {
                modal.style.display = 'block';
                modalImg.src = img.src;
                currentIndex = index;
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });

    modalArrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.stopPropagation();
            if (arrow.dataset.glideDir === '<') {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            } else {
                currentIndex = (currentIndex + 1) % slides.length;
            }
            const img = slides[currentIndex].querySelector('img');
            modalImg.src = img.src;
        });
    });
});
