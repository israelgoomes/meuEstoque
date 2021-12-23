import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sale-table',
  templateUrl: './sale-table.component.html',
  styleUrls: ['./sale-table.component.scss'],
})
export class SaleTableComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'manufacturer',
    'provider',
    'cdProductSold',
    'vlInput',
    'vlOutput',
    'amount',
    'dtSale',
    'lucro',
    'delete',
  ];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() data: any;
  @Output() cancel = new EventEmitter;
  constructor() { }

  ngOnInit() {
    console.log('CHEGOU!!', this.data)
    this.dataSource.data = this.data;
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cancelSale(param) {
    this.cancel.emit(param);
  }

}
