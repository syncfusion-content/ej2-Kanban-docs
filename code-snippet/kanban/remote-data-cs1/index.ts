

import { Kanban, DialogEventArgs } from '@syncfusion/ej2-kanban';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

let data: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Kanban',
    adaptor: new ODataAdaptor
});
let kanbanObj: Kanban = new Kanban({
    dataSource: data,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    },
    allowDragAndDrop: false,
    dialogOpen: dialogOpen
});
kanbanObj.appendTo('#Kanban');

function dialogOpen(args: DialogEventArgs): void {
    args.cancel = true;
}


