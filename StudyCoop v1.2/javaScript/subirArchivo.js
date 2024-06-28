// Agregar funcionalidad para arrastrar archivos
$('#archivo').on('dragover', function(event) {
    event.preventDefault();
    $(this).addClass('dragover');
});

$('#archivo').on('dragleave drop', function(event) {
    event.preventDefault();
    $(this).removeClass('dragover');
});

$('#archivo').on('drop', function(event) {
    var archivos = event.originalEvent.dataTransfer.files;
    $('#archivo').prop('files', archivos);
    $(this).removeClass('dragover');
});
