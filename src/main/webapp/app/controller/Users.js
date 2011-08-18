Ext.define('AM.controller.Users', {
   extend : 'Ext.app.Controller',
   stores : [ 'Users' ],
   models : [ 'User' ],
   views : [ 'user.List', 'user.Edit' ],

   init : function() {
      this.control({
         'userlist' : {
            itemdblclick : this.editUser
         },

         'userlist actioncolumn item[action=destroy]': {
            click: this.destroyUser
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

   destroyUser:function(grid, rowIndex, colIndex) {
//      handler: function() {
                  console.log("clicked on me!!!!");
//                  var store = grid.getStore('Users');
//                  var record = store.getAt(rowIndex);
//                  record.destroy();
//                  store.reload();
//                  store.removeAt(rowIndex);
//                  store.sync();
//                  Ext.example.msg('remove', 'abc');
//                  alert("Sell " + rec.get('company'));
//               }
   }
});