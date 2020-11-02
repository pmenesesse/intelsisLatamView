import { Component, OnInit } from '@angular/core';
import { SaludoService } from '../../services/saludo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-saludo',
  templateUrl: './form-saludo.component.html',
  styleUrls: ['./form-saludo.component.css']
})
export class FormSaludoComponent implements OnInit {

  loading = false;
  error: boolean;
  primerNombre: string;
  primerApellido: string;
  fechaNacimiento: Date;
  mensajeError: string  = null;
  infoCliente: any = null;


  constructor(private saludoService: SaludoService ) {

   }

  ngOnInit(): void {
  }

getInfoPersona(formulario: NgForm){
this.loading = true;
console.log('Entro al metodo Accion ');
if (formulario.valid) {
this.saludoService.getInfopersona(this.primerNombre + ' ' + this.primerApellido, this.fechaNacimiento )
.subscribe( (data: any) => {
  console.log(data);
  this.infoCliente = data;
  console.log(this.infoCliente);
  this.loading = false;
}, ( errorServicio ) => {

  this.loading = false;
  this.error = true;
  console.log(errorServicio);
  this.mensajeError = errorServicio.error.error.message;

});
}else{
  this.mensajeError = 'Campos Requeridos, completar ';
  this.loading = false;

}
}

}