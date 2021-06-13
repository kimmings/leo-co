export const Orange = 'orange';
export const Apple = 'apple';

enum Prices {
  apple = 0.6,
  orange = 0.25,
};

export const checkout = (basket: string[]) => {
  let appleCount = 0;
  let orangeCount = 0;

  const total = basket.sort().reduce((acc, item) => {
    switch(item) {
      case Orange:
        if(orangeCount >= 2) {
          orangeCount = 0;
        } else {
          orangeCount += 1;
          acc += Prices[item];
        }
        break;
      case Apple:
        if(appleCount >= 1){ 
          appleCount = 0;
        } else {
          appleCount += 1; 
          acc += Prices[item];
        }
        break;
    }
    return acc;
  }, 0);

  return total.toFixed(2);
};

