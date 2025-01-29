document.addEventListener('DOMContentLoaded', function () {
    // Инициализация слайдера
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        gap: 10,
        focusAt: 'center',
        breakpoints: {
            1300: {
                perView: 2,
                gap: 5,
            },
            850: {
                perView: 1,
                gap: 20,
            },
        },
    }).mount();

    // Получаем все изображения в слайдере
    const images = document.querySelectorAll('.glide__slide img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');

    // Добавляем обработчик клика на каждое изображение
    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block'; // Показываем модальное окно
            modalImg.src = img.src; // Устанавливаем изображение в модальное окно
        });
    });

    // Закрытие модального окна при клике на крестик
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне изображения
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Закрытие модального окна при нажатии на клавишу Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});