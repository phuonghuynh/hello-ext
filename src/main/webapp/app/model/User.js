Ext.define('AM.model.User', {
   extend : 'Ext.data.Model',
   fields : [ 'id', 'name', 'email' ],
   proxy: {
      type: 'rest',
      url: '/rest/users',
      reader: {
         type: 'json'
      },
      writer: {
         type: 'json'
      }

//      listeners: {
//         exception: function(me, response, operation, options ) {
//            console.log('exception is here');
//         }
//      }
   }
});