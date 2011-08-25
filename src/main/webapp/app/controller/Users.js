Ext.define('AM.controller.Users', {
   extend : 'Ext.app.Controller',
   stores : [ 'Users' ],
   models : [ 'User' ],
   views : [ 'user.List', 'user.Edit' ],

   init: function() {
      this.control({
         'userlist' : {
            itemdblclick : this.editUser
         },

         'userlist actioncolumn': {
            click: this.onUserClickAction
         },

         'useredit button[action=save]' : {
            click : this.updateUser
         }
      });
   },

   editUser : function(grid, record) {
      var view = Ext.widget('useredit');
      view.down('form').loadRecord(record);
   },

   updateUser : function(button) {
      var win = button.up('window'), form = win.down('form'), record = form.getRecord(), values = form.getValues();
      record.set(values);
      win.close();
      this.getStore('Users').sync();
   },

   onUserClickAction: function(view, cell, rowIndex, colIndex, e) {
      var m = e.getTarget().className.match(/\bact-(\w+)\b/);
      if (m === null || m === undefined) {
         return;
      }

      var action = m[1];
      switch (action) {
         case 'destroy':
            var store = this.getStore('Users');
            var record = store.getAt(rowIndex);
            record.destroy({
               success: function() {
                  console.log('destroyed an user');
                  store.removeAt(rowIndex);
               },
               failure: function(record, operation) {
                  console.log('destroyed an user not success');
                  console.log(record);
                  console.log(operation);
               }
            });
//            var removes = store.getRemovedRecords();
//            store.removeAt(rowIndex);
//            store.sync();
            break;
      }
   }
});