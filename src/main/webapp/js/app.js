Ext.application({
   name : 'AM',
   controllers: ['Users'],
   launch : function() {
      Ext.create('Ext.container.Viewport', {
         layout : 'flex',
         items : [ {xtype: 'userlist'} ],
         width: 800,
         height: 600
      });
   }
});