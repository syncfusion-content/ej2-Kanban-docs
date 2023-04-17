var kanbanObj = new ej.kanban.Kanban({
    keyField: 'ShipCountry',
    columns: [
        { headerText: 'Denmark', keyField: 'Denmark' },
        { headerText: 'Brazil', keyField: 'Brazil' },
        { headerText: 'Switzerland', keyField: 'Switzerland' },
        { headerText: 'Germany', keyField: 'Germany' }
    ],
    cardSettings: {
        contentField: 'ShippedDate',
        headerField: 'OrderID'
    }
});
kanbanObj.appendTo('#Kanban');
var button = document.getElementById('btn');
button.addEventListener("click", function (e) {
    var ajax = new ej.base.Ajax("https://ej2services.syncfusion.com/production/web-services/api/Orders", "GET");
    ajax.send();
    ajax.onSuccess = function (data) {
        kanbanObj.dataSource = JSON.parse(data);
    };
});

