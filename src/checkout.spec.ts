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

  test('should apply bogof on more than one apple', () => {
    const expectedTotal = '1.45';
    const basket = [Apple, Orange, Apple, Apple];
    expect(checkout(basket)).toBe(expectedTotal);
  });

  test('should apply bogof on two apples', () => {
    const expectedTotal = '0.85';
    const basket = [Apple, Orange, Apple];
    expect(checkout(basket)).toBe(expectedTotal);
  });

  test('should apply bogof on multplesof two apples', () => {
    const expectedTotal = '1.45';
    const basket = [Apple, Orange, Apple, Apple, Apple];
    expect(checkout(basket)).toBe(expectedTotal);
  });

  test('should not apply bogof on single apple', () => {
    const expectedTotal = '0.85';
    const basket = [Apple, Orange];
    expect(checkout(basket)).toBe(expectedTotal);
  });

  test('should not apply three for two on less than three oranges', () => {
    const expectedTotal = '1.10';
    const basket = [Apple, Orange, Orange];
    expect(checkout(basket)).toBe(expectedTotal);
  });

  test('should apply three for two on three oranges', () => {
    const expectedTotal = '1.10';
    const basket = [Apple, Orange, Orange, Orange];
    expect(checkout(basket)).toBe(expectedTotal);
  });

  test('should apply three for two on multiples of three oranges', () => {
    const expectedTotal = '1.60';
    const basket = [Orange, Apple, Orange, Orange, Orange, Orange, Orange];
    expect(checkout(basket)).toBe(expectedTotal);
  });
});
