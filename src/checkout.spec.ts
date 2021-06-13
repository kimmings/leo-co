import { checkout, Orange, Apple } from './checkout';

describe('Checkout', () => {
  test('should return zero for empty basket', () => {
    const expectedTotal = '0.00';
    expect(checkout([])).toBe(expectedTotal);
  });

  test('should ignore unknown basket items', () => {
    const expectedTotal = '0.00';
    expect(checkout(['lemons'])).toBe(expectedTotal);
  });

  test('should compute the total cost', () => {
    const expectedTotal = '1.10';
    const basket = [Orange, Apple, Orange];
    expect(checkout(basket)).toBe(expectedTotal);
  });
});
