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
         root: 'users',
         idProperty: 'id',
         successProperty: 'success'
      },
      writer: {
         encode: false,
         writeAllFields: true
      }
   }
});