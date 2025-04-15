import { Component, computed, signal } from '@angular/core';
import { ELEMENT_DATA, TABLE_COLUMN_DEF } from './global-table.constant';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-global-table',
  imports: [MatTableModule],
  templateUrl: './global-table.component.html',
  styleUrl: './global-table.component.scss',
})
export class GlobalTableComponent {
  //Table Properties
  dataSource = ELEMENT_DATA;
  tableColumnDef = signal(TABLE_COLUMN_DEF);
  displayColumns = computed(() => {
    return this.tableColumnDef().map((res: any) => res.field);
  });
}
