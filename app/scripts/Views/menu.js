// imports
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// GET data from api
$.ajax( {
  url : 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json',
  type: 'GET',
  success: response => {
    let items = _.toArray( arguments );
    console.log( items );  
  }
});

//return 


export default renderMenu