import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { datos } from '../datos';

@Component({
  selector: 'app-abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrls: ['./abmalumnos.component.css']
})
export class ABMAlumnosComponent implements OnInit {


  @Output() estudiantesFormulario: EventEmitter<any> = new EventEmitter<any>(); 
  
  formulario = this.fb.group({
    nombre: ['',[Validators.required]],
    apellido: ['',[Validators.required]],
    edad: ['',[Validators.required]],
    curso: ['',[Validators.required]],
  })


  nombreFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  agregarAlumno() {
    //A implementar...
    console.log(this.formulario.value);
    // datos.listaAlumnos.push(
    //   {
    //     ...this.formulario.value,
    //     id!: datos.listaAlumnos.length + 1,
    //   }
    // );
    }

}
