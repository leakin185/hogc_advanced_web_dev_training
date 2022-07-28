import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  products = [
    {
      id: 1,
      name: 'candy',
      price: 2,
    },
  ];

  getProducts() {
    return this.products;
  }

  addProducts(id, name, price) {
    this.products.push({ id, name, price });
    return 'Product Created';
  }

  deleteProducts(id) {
    this.products = this.products.filter((products) => products.id != id);
    return 'Product deleted';
  }

  getProductById(id) {
    return this.products.find((products) => products.id == id);
  }
}
