Ext.define('AM.model.User', {
   extend : 'Ext.data.Model',
   fields : [ 'id', 'name', 'email' ],
   idProperty: 'id',
   proxy: {
      type: 'rest',
      url: 'rest/users',
      reader: {
         type: 'json',
         root: 'result'
      },
      writer: {
         type: 'json'
      },

      successProperty: 'success',

      listeners: {
         exception: function(me, response, operation, options) {
            console.log('there is somthing wrong in the connection');
         }
      }
   }
});