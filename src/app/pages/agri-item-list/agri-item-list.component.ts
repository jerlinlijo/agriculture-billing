import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddItemPopupComponent } from '../add-item-popup/add-item-popup.component';
@Component({
  selector: 'agri-item-list',
  imports: [MatButtonModule],
  templateUrl: './agri-item-list.component.html',
  styleUrl: './agri-item-list.component.scss'
})
export class AgriItemListComponent {
  constructor(private matDialog: MatDialog){}
  openPopUpItem(){
    this.matDialog.open(AddItemPopupComponent,{
      width: '1100px',
      height:'700px'
    })
  }
}
