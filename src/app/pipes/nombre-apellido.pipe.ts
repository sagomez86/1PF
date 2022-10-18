import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(value:Alumno, ...arg:any[]): string {
    //console.log(value.apellido)
    return value.nombre + " " + value.apellido.toUpperCase();
  }

}
