const Wishes = require('./models/wishes.js')
const WishFormView = require('./views/wishes_form_view.js')
const WishesGridView = require('./views/wishes_grid_view.js')


document.addEventListener('DOMContentLoaded', () => {
// console.log('java script loaded');

const wishForm = document.querySelector('form#wish-form')
const wishFormView = new WishFormView(wishForm);
wishFormView.bindEvents();

const wishContainer = document.querySelector('div#bucket-list')
const wishGridView = new WishesGridView(wishContainer);
wishGridView.bindEvents();


const wishURL = 'http://localhost:3000/api/wishes';
const wish = new Wishes(wishURL)
wish.getData();
wish.bindEvents()
})
