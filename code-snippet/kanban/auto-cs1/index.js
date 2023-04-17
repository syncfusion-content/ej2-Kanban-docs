var kanbanObj = new ej.kanban.Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'In Progress', keyField: 'InProgress' },
        { headerText: 'Testing', keyField: 'Testing' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    width: 'auto',
    height: 'auto',
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    }
});
kanbanObj.appendTo('#Kanban');

