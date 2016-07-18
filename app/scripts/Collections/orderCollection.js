import Backbone from 'backbone';
import modelOrder from '../models/orderModel';

const Orders = Backbone.Collection.extend({
  url: 'https://tiny-za-server.herokuapp.com/collections/squirkOrders',
  model: modelOrder
});

let orderCollection = new Orders();

export default orderCollection;

