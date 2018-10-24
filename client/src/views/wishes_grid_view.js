const PubSub = require('../helpers/pub_sub.js')
const WishesView = require('./wishes_view.js')


const WishesGridView = function (container) {
this.container = container
}

WishesGridView.prototype.bindEvents = function () {
  PubSub.subscribe('WISHES:data-loaded', (event) => {
    this.render(event.detail)
  })
};


WishesGridView.prototype.render = function (wishes) {
  this.container.innerHTML = " ";
  const wishView = new WishesView(this.container)
  wishes.forEach((wish) => wishView.render(wish))
};

module.exports = WishesGridView;
