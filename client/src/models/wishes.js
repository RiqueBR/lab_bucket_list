const Request = require('../helpers/request.js')
const PubSub = require('../helpers/pub_sub.js')

const Wishes = function (url) {
this.url = url;
}

// Missing bindEvents here:
Wishes.prototype.bindEvents = function () {

  PubSub.subscribe('WishView:wish-submitted', (event) => {
    this.postWish(event.detail)
  })

  // subscribe to deleting event here...
  PubSub.subscribe('WishView:delete-data', (event) => {
    this.deleteWish(event.detail)
  })

};


Wishes.prototype.getData = function () {
  const request = new Request(this.url);
  request.get() // .get takes on a promise
  .then((wishes) => {
    // console.log(wishes);
    PubSub.publish('WISHES:data-loaded', wishes)
  })
  .catch(console.error);
};

Wishes.prototype.postWish = function (wish) {
  const request = new Request(this.url);
  request.post(wish)
  .then((wishes) => {
    PubSub.publish('WISHES:data-loaded', wishes)
  })
  .catch(console.error);
};

Wishes.prototype.deleteWish = function (wishId) {
  const request = new Request(this.url)
  request.delete(wishId)
  .then((wishes) => {
    PubSub.publish('WISHES:data-loaded', wishes)
  })
};

module.exports = Wishes;
