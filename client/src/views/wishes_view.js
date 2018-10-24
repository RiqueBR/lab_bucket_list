const PubSub = require('../helpers/pub_sub.js')

const WishesView = function (container){
  this.container = container;
  // this.wish = wish;
}

// Very important!! I can either locally pass an element wish here in my render function or
// hard code a this.wish that takes on a wish element.

WishesView.prototype.render = function (wish) {
  // console.log('hi');
  // Create a container
  const wishContainer = document.createElement('div');
  wishContainer.id = 'wish';

  // Create content
  const title = document.createElement('h3')
  title.textContent = wish.title
  title.classList.add('title')
  wishContainer.appendChild(title);

  const more_info = document.createElement('p')
  more_info.textContent = wish.more_info
  more_info.classList.add('more_info')
  wishContainer.appendChild(more_info);

  // Create delete button:
  const deleteButton = this.createDeleteButton(wish._id)
  wishContainer.appendChild(deleteButton);

  // append outer container
  this.container.appendChild(wishContainer)

};


WishesView.prototype.createDeleteButton = function (wishId) {
  const button = document.createElement('button');
  button.value = wishId
  button.textContent = 'Delete'

  button.addEventListener('click', (event) => {
    PubSub.publish('WishView:delete-data', event.target.value)
  })

  return button
};


module.exports = WishesView;
