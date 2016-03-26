
$('#applicationDeleteModal').on('show.bs.modal', function (e) {
    var appName = $(e.relatedTarget).data('appName');
    $('#applicationDeleteModal-name', this).text(appName);
})
