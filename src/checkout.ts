export const Orange = 'orange';
export const Apple = 'apple';

enum Prices {
  apple = 0.6,
  orange = 0.25,
};

export const checkout = (basket: string[]) => {
  const total = basket.reduce((acc, item) => {
    switch(item) {
      case Orange:
        acc += Prices[item];
        break;
      case Apple:
        acc += Prices[item];
        break;
    }
    return acc;

  }, 0);

  return total.toFixed(2);
};

