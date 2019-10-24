var columnDefs = [
    // group cell renderer needed for expand / collapse icons
    { field: 'name', cellRenderer: 'agGroupCellRenderer' },
    { field: 'account' },
    { field: 'calls' },
    { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" }
];

var gridOptions = {
    columnDefs: columnDefs,
    masterDetail: true,
    detailCellRendererParams: {
        detailGridOptions: {
            columnDefs: [
                { field: 'callId' },
                { field: 'direction' },
                { field: 'number' },
                { field: 'duration', valueFormatter: "x.toLocaleString() + 's'" },
                { field: 'switchCode' }
            ],
            onFirstDataRendered: function(params) {
                params.api.sizeColumnsToFit();
            }
        },
        getDetailRowData: function(params) {
            params.successCallback(params.data.callRecords);
        },
        template:
            '<div style="height: 100%; background-color: #edf6ff; padding: 20px; box-sizing: border-box;">' +
            '  <div style="height: 10%;">Call Details</div>' +
            '  <div ref="eDetailGrid" style="height: 90%;"></div>' +
            '</div>'
    },
    onFirstDataRendered: onFirstDataRendered
};

function onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();

    // arbitrarily expand a row for presentational purposes
    setTimeout(function() { params.api.getDisplayedRowAtIndex(1).setExpanded(true); }, 0);
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({ url: 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/latest/src/javascript-grid-master-detail/string-template-customisation/data/data.json' }).then(function(data) {
        gridOptions.api.setRowData(data);
    });
});