import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { datos } from '../datos';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {


  ELEMENT_DATA = new MatTableDataSource<any>;
  

  dataInicial: Alumno[] = datos.listaAlumnos;

  columnas: string[] =["nombreCompleto", "edad", "curso", "accion"];

  constructor() { }
  
  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataInicial;
  }

  borrarRegistro(id:number) : void {
    let pos = this.dataInicial.findIndex(alumno => alumno.id === id)
    this.dataInicial.splice(pos,1)
    this.ELEMENT_DATA.data = this.dataInicial
    }

    editarRegistro() {
      // console.log(this.listaAlumnos[0] | nombreApellido);
      }

}
