import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
@Component({
  selector: 'app-add-item-popup',
  imports: [MatFormFieldModule, MatInputModule, FormsModule,
    ReactiveFormsModule,
    MatSelectModule,],
  templateUrl: './add-item-popup.component.html',
  styleUrl: './add-item-popup.component.scss'
})
export class AddItemPopupComponent {

}
