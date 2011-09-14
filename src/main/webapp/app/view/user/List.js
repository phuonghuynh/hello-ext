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

   selType: 'rowmodel',
   plugins: [ {ptype : 'cellediting', pluginId : 'cellEditor'}],

   title : 'All Users',
   columns: [
      {
         header : 'Name',
         dataIndex : 'name',
         width: 150,
         editor: {allowBlank: false}
      },
      {
         header : 'Email',
         dataIndex : 'email',
         flex: true,
         editor: {allowBlank: false, vtype: 'email'}
      },
      {
         xtype: 'actioncolumn',
         width: 30,
         align: 'center',
         items: [
            {
               icon: 'images/delete.gif',
               tooltip: 'Please delete me',
               iconCls:'act-destroy',
               handler: function(grid, rowIndex, colIndex) {
                  console.log("clicked on me!!!!");
               }
            }
         ]
      }
   ]
});