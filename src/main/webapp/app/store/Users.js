Ext.define('AM.store.Users', {
   extend : 'Ext.data.Store',
   model: 'AM.model.User',
   autoLoad: true,
   listeners: {
      remove: function(store, record, index, options) {
         console.log(arguments);
         this.removeItem(store, record, index, options);
      }
   },

   removeItem: function(store, record, index, options) {
      console.log("item already removed");
      console.log(arguments);
   }
});