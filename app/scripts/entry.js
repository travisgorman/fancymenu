// imports
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
// GET data out of the api - put onto the page 


let settings = {
  url: 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
  success: function( response ){
    // console.log( response );

    let menu = response;
   
    _.each( menu, function( section ){
      section.forEach( function( sectionItem ){
        console.log( sectionItem );
       // console.log( sectionItem.item );
       
        let $menuItem = $(`

          <div class="item">
            <h4> ${sectionItem.item} </h4>
            <main> ${ sectionItem.description } </main>
            <section class="item-info">
              <section class="bottom">
                <span class="icons"></span>
                <span class="price">$ ${sectionItem.price} </span>
                <input type="button" value="add to order" class="add" id="addToOrder">
              </section>
            </section>
          </div>
        `);

       $('#results').prepend( $menuItem );

      });//close forEach
    });//close _.each

  }//close success function
}//close settings object

$.ajax( settings );
