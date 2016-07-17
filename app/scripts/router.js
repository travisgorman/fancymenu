import $ from 'jquery';
import Backbone from 'backbone';
import renderMenu from './views/menu';
import renderOrder from './views/order';


const Router = Backbone.Router.extend({
  routes: {
    menu  : 'callMenu',
    order : 'callOrder'
  },

  callMenu: function(){
    let $menu = renderMenu();
    $( '.container' ).empty().append( $menu )
  },

  callOrder: function(){
    let $order = renderOrder()
      $( '.container' ).empty().append( $order );
  }

});

const router = new Router();

export default router;