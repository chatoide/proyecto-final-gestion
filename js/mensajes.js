$(document).ready(function(){
	/*Mostrar ocultar area de notificaciones*/

 /*ingresar cliente del sistema*/
    $('.btn-addClient').on('click', function(){
        swal({
  title: '¿Estás seguro?',
  text: "Los datos se guardaran en el sistema",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Guardar!',
  cancelButtonText: 'No, cancelar!',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: true
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location='cliente.html'; 
            }
        });
    });

     /*actualizar cliente del sistema*/
    $('.btn-updClient').on('click', function(){
        swal({
  title: '¿Estás seguro?',
  text: "Realizarás una modificación en el sistema",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Modificar!',
  cancelButtonText: 'No, cancelar!',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: true
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location='cliente.html'; 
            }
        });
    });



 /*buscar cliente del sistema*/
 $('.btn-seaClient').on('click', function(){
        swal({
  title: '¿Estás seguro?',
  text: "Realizarás una búsqueda en el sistema en el sistema",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Buscar!',
  cancelButtonText: 'No, cancelar!',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: true
        },
        function(isConfirm) {
            if (isConfirm) {
                window.location='cliente.html'; 
            }
        });
    });

    /*eliminar cliente del sistema*/
    $('.btn-delClient').on('click', function(){
    	swal({
  title: '¿Estás seguro?',
  text: "¡No podrás revertir esto! eliminaras datos del sistema",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Elminar!',
  cancelButtonText: 'No, cancelar!',
  confirmButtonClass: 'btn btn-success',
  cancelButtonClass: 'btn btn-danger',
  buttonsStyling: true
		},
		function(isConfirm) {
		  	if (isConfirm) {
		    	window.location='cliente.html'; 
		  	}
		});
    });
    










});
