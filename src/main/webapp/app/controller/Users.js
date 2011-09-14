Ext.define('AM.controller.Users', {
   extend : 'Ext.app.Controller',
   stores : [ 'Users' ],
   models : [ 'User' ],
   views : [ 'user.List', 'user.Edit' ],

   init: function() {
      this.control({
         'userlist actioncolumn': {
            click: this.handleUserClickAction
         }
      });
   },


   handleUserClickAction: function(view, cell, rowIndex, colIndex, e) {
      var m = e.getTarget().className.match(/\bact-(\w+)\b/);
      if (m === null || m === undefined) {
         return;
      }

      var action = m[1];
      switch (action) {
         case 'destroy':
            var store = this.getStore('Users');
            var record = store.getAt(rowIndex);
            store.remove(record);
//            record.getProxy().destroy({
//               success: function() {
//                  console.log('destroyed an user success');
//               },
//               failure: function(record, operation) {
//                  console.log('destroyed an user failed');
//               }
//            });
            break;
      }
   }
});