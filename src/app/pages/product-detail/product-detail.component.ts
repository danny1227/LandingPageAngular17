import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  
  loading: boolean = true;
  public product?: IProduct;

  private _route = inject(ActivatedRoute);
  private _apiServices = inject(ApiService);

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiServices.getProduct(params['id']).subscribe((data: IProduct) => {4
        console.log(data);
        this.product = data;
        this.loading = false;
      });
  })
}

}
