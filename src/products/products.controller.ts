import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { identity } from 'rxjs';
import { ProductDto } from './dto/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Post()
  addProducts(@Body() productDto: ProductDto) {
    return this.productService.addProducts(
      productDto.id,
      productDto.name,
      productDto.price,
    );
  }

  @Delete()
  deleteProducts(@Body() ProductDto: ProductDto) {
    return this.productService.deleteProducts(ProductDto.id);
  }

  @Get('discountPrice/:id/:disc')
  getDisPrice(@Param('id') id, @Param('disc') discount) {
    return this.productService.getDiscPrice(id, discount);
  }
}
