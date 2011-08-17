Ext.define('AM.view.user.List', {
   extend : 'Ext.grid.Panel',
   alias : 'widget.userlist',
   store: 'Users',
   renderTo: Ext.getBody(),
   height: 350,
   width: 600,
   viewConfig: {
      stripeRows: true
   },

   title : 'All Users',
   columns: [
      {header : 'Name', dataIndex : 'name', width: 150},
      {header : 'Email', dataIndex : 'email', flex: true}
   ]
});