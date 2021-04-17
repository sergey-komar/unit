$(function(){

    $('#button').on('click', function(){
      $ ('#modal').addClass('modal_active');
    });

    $('#close').on('click', function(){
        $('#modal').removeClass('modal_active');
   
	})
// Работа с навигацией
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
	});
});
// Работа с навигацией







// Работа с кнопкой поиска
const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');
searchButton.addEventListener('click', function (e) {
		event.preventDefault();
		searchForm.classList.toggle('search--visible');
});

// Работа с кнопкой поиска



// Модалка
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки - Открыть Модалку
modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {
		const modalId = this.dataset.modalButton;
		const modal = document.querySelector('#' + modalId);
		modal.classList.remove('hidden');

		// Находим внутри открываемой модалки блок .modal-window и запрещаем ему передавать клики "наверх"
		modal.querySelector('.modal-window').addEventListener('click', function (e) {
			e.stopPropagation();
		});
	})
})

// Кнопки - Закрыть Модалку
modalClosebuttons.forEach(function (item) {
    item.addEventListener('click', function () {
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    })
})

// Закрытие модалок по фейду
allModals.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
	});
});


});