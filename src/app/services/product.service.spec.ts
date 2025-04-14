import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MOCK_PRODUCTS } from '../mocks/mock-data';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
      ],
    });
    service = TestBed.inject(ProductService);
    service.products.set([]);
    service.productsInCart.set([]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all products and update the products signal', () => {
    const mockProducts = MOCK_PRODUCTS;
    spyOn(service['http'], 'get').and.returnValue(of(mockProducts));

    service.getAllProducts().subscribe();

    expect(service.products()).toEqual(mockProducts);
  });

  it('should add a product to the cart', () => {
    const product = MOCK_PRODUCTS[0];

    service.addProductToCart(product);

    expect(service.productsInCart()).toContain(product);
  });

  it('should remove a product from the cart', () => {
    const product1 = MOCK_PRODUCTS[0];
    const product2 = MOCK_PRODUCTS[1];
    service.productsInCart.set([product1, product2]);

    service.removeProductFromCart(product1);

    expect(service.productsInCart()).not.toContain(product1);
    expect(service.productsInCart()).toContain(product2);
  });

  it('should get a product by ID', () => {
    const product1 = MOCK_PRODUCTS[0];
    const product2 = MOCK_PRODUCTS[1];
    service.products.set([product1, product2]);

    const result = service.getProductById(1);

    expect(result).toEqual(product1);
  });

  it('should return null if product ID is not found', () => {
    const product1 = MOCK_PRODUCTS[0];
    service.products.set([product1]);

    const result = service.getProductById(2);

    expect(result).toBeNull();
  });

  it('should emit true on onCartChange when a product is added', (done) => {
    const product = MOCK_PRODUCTS[0];
    service.onCartChange.subscribe(value => {
      expect(value).toBeTrue();
      done();
    });
    service.addProductToCart(product);
  });
  
  it('should emit false on onCartChange when a product is removed', (done) => {
    const product = MOCK_PRODUCTS[0];
    service.productsInCart.set([product]);
  
    service.onCartChange.subscribe(value => {
      expect(value).toBeFalse();
      done();
    });
  
    service.removeProductFromCart(product);
  });
  
});
