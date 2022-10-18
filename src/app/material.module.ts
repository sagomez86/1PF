import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule
    ]

})



export class MaterialModule{}