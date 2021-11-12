import { Component, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { IProduct, Product } from './models/Product';
import { ProductService } from './services/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreateProductModal } from './components/create-product-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  displayedColumns: string[] = [
    'name',
    'description',
    'price',
    'options',
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;
  
  public dataSource!: MatTableDataSource<Product>;
 

  constructor(
    private settingService: ProductService,
    public dialog: MatDialog
    ) {}

  openDialog(setting: IProduct): void {
    const dialogRef = this.dialog.open(CreateProductModal, {
      width: '70%', data: setting
    });
    dialogRef.afterClosed()
    .pipe(switchMap(result => this.settingService.saveData(result, result.id)))
    .subscribe(() => this.loadData());
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.settingService.getData().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Product>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    (err) => {
      this.dataSource = new MatTableDataSource<Product>([]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }


}
