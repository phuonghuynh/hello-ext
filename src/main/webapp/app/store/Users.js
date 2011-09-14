Ext.define('AM.store.Users', {
   extend : 'Ext.data.Store',
   model: 'AM.model.User',
   autoLoad: true,
   autoSync: true,
   listeners: {
      remove: function(store, record, index, options) {
         this.removeItem(store, record, index, options);
      }
   },

   removeItem: function(store, record, index, options) {
   }
});