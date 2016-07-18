import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// The Order Model 
// Default properties:
// an `items` array to store ordered items
// a `total` variable to track the sum of all items in `items` array
// and a variable to track 8.25% of the total price as its defaults. 


const OrderModel = Backbone.model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/squirkOrders',
  idAttribute : '_id',
  defaults:  {
    items: [],
    tax: 0,
    total: 0
  }
});

// Functionality ( add to prototype )
// add an item from the menu to the order ( its 'items' array )
// find sales tax (8.25%) of all items in 'items' array
// add the prices of 'items' with tax.

OrderModel.prototype.addToOrder = function( orderedItem ){
  let arr = this.get( 'items' );
  let orderedItems = arr.concat( orderedItem );
  this.set( 'items', orderedItems );
};

OrderModel.prototype.addTax = function(){
  let orderTax = 0;
  let arr = this.get( 'items' );
  arr.forEach( item => {
    orderTax += ( item.price * 0.825 );
    this.set( 'tax', orderTax );
  });
};

OrderModel.prototype.addTotal = function(){
  let orderTotal = 0;
  let arr = this.get( 'items' );
  arr.forEach( item => {
    orderTotal += item.price;
    this.set( 'total', orderTotal + this.get( 'tax' ) );
  });
};


let order = new OrderModel();
export default order;

//.Models/orderModel.js