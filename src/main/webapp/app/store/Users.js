Ext.define('AM.store.Users', {
   extend : 'Ext.data.Store',
   model: 'AM.model.User',
   autoLoad: true,
   proxy: {
      type: 'ajax',
      api: {
         read: 'rest/users',
         update: 'rest/users'
      },
      reader: {
         type: 'json',
         idProperty: 'id'
      },
      writer: {
         encode: false,
         writeAllFields: true
      }
   }
});