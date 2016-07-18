import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import router from '../router';
import order from '../Models/orderModel';

function renderOrder( orderedItem ){
  let itemsOrdered = order.get( 'items' );

  let $items = $(`

       <div id="order" class="order">
          <h3>Foodstuffs Soon to be Yours</h3>
          <ul> </ul> // append stuff to this list
          <div class="price"> // display the tax and total
            <h5 class="tax">+ Tax: $${order.get( 'tax' ).toFixed(2)}</h5>
            <h4 class="total">Total: $$:{order.get( 'total' ).toFixed(2)}</h5>
          </div>
          <input type="button" id="orderNow" value="order Now">
       </div>

    `);

  itemsOrdered.forEach( item => {

    let $orderedItem = $(`

      <li>
        <p>${item.item}</p>
        <data>$ ${Number( item.price ).toFixed( 2 )}</data>
      </li>

    `)

    // put it in the DOM
    $items.find('ul').append( $orderedItem );

  });

  // put an event listener on orderNow button
  $items.find( '#orderNow' ).on( 'click', function( evt ){
    router.navigate( 'order', {trigger: true} );
  } );

  return $items;
}

export default renderOrder;