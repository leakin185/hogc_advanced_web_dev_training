import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private productsRepository: ProductsRepository) {}

  getProducts() {
    return this.productsRepository.getProducts();
  }

  addProducts(id, name, price) {
    return this.productsRepository.addProducts(id, name, price);
  }

  deleteProducts(id) {
    return this.productsRepository.deleteProducts(id);
  }

  getDiscPrice(id, discount) {
    const product = this.productsRepository.getProductById(id);
    const disc_price = product.price * (discount / 100);
    return disc_price;
  }
}
