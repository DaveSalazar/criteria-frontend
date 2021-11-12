import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/models/Product';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'create-product',
  template: `
    <h1 mat-dialog-title><strong>Producto</strong></h1>
    <div mat-dialog-content>
      <div fxlayout="row" fxLayoutGap="1rem">
        <div fxFlex="100">
          <mat-form-field appearance="fill">
            <mat-label>Nombre</mat-label>
            <input matInput [(ngModel)]="product.name" />
          </mat-form-field>
          <br/>
          <mat-form-field appearance="fill">
            <mat-label>Description</mat-label>
            <input matInput [(ngModel)]="product.description" />
          </mat-form-field>
          <br/>
          <mat-form-field appearance="fill">
            <mat-label>Precio</mat-label>
            <input matInput [(ngModel)]="product.price" />
          </mat-form-field>
          <br/>
        </div>     
      </div>
    </div>
    <div mat-dialog-actions align="end">
      <button
        mat-button
        color="primary"
        [mat-dialog-close]="product"
        cdkFocusInitial
      >
        Guardar
      </button>
      <button mat-button (click)="onNoClick()">Cancelar</button>
    </div>
  `,
  styles: [`
  mat-form-field {
    width: 100%;
  }
  textarea {
    height: 100%
  }
  `],
})
export class CreateProductModal {

  public product: IProduct = {
    id: '',
    name: '',
    description: '',
    price: 0,
  };

  constructor(
    public dialogRef: MatDialogRef<CreateProductModal>,
    @Inject(MAT_DIALOG_DATA) public data: IProduct
  ) {
    if (!data) {
      this.product.id = uuidv4();
    } else {
      this.product = data;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
