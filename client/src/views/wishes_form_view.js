const PubSub = require('../helpers/pub_sub.js')

const WishFormView = function (form) {
  this.form = form
}

// Here is bindEvents... Ask the meaning of --> this. <--
WishFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event)=> {
    this.handleSubmit(event);
  });
};



// Ask what this does...
WishFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newWish = this.createWish(event.target)
  PubSub.publish('WishView:wish-submitted', newWish)
  event.target.reset();
};



// I have created a new object
WishFormView.prototype.createWish = function (form) {
  const newWish = {
    title: form.title.value,
    more_info: form.more_info.value
  }

  return newWish;
};


module.exports = WishFormView;
