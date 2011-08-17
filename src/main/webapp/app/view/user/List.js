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
      {header : 'Email', dataIndex : 'email', flex: true},
      {
         xtype: 'actioncolumn',
         width: 50,
         items: [
            {
               icon: '/images/delete.gif',
               tooltip: 'Please delete me',
               handler: function(grid, rowIndex, colIndex) {
                  console.log("clicked on me!!!!");
//                  var rec = store.getAt(rowIndex);
//                  alert("Sell " + rec.get('company'));
               }
            }
//            {
//               getClass: function(v, meta, rec) {          // Or return a class from a function
//                  if (rec.get('change') < 0) {
//                     this.items[1].tooltip = 'Hold stock';
//                     return 'alert-col';
//                  } else {
//                     this.items[1].tooltip = 'Buy stock';
//                     return 'buy-col';
//                  }
//               },
//               handler: function(grid, rowIndex, colIndex) {
//                  var rec = store.getAt(rowIndex);
//                  alert((rec.get('change') < 0 ? "Hold " : "Buy ") + rec.get('company'));
//               }
//            }
         ]
      }
   ]
});