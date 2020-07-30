import {NgModule} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
// import { MatTableModule, MatDividerModule, MatPaginatorModule,  MatButtonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatSelectModule } from '@angular/material';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatDividerModule} from '@angular/material/divider';
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
    ],
    imports: [IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatInputModule,
        MatExpansionModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatTableModule,
        MatDividerModule,
        MatPaginatorModule,
     ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatInputModule,
        MatExpansionModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatTableModule,
        MatDividerModule,
        MatPaginatorModule,
    //    CadastroPojetoPageModule
    ]
})

export class SharedModule {}