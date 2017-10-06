const skiSizes = [
  'xxs',
  'xs',
  'm',
  'l',
  'xl',
];

const defaultOptions = {
  gender: 'man',
  age: 20,
  size: skiSizes[2],
};

export default class Apartment {
  bookSki(opt) {
    this.options = {
      ...defaultOptions,
      ...opt,
    };

    this.getSkiSize(opt);
    console.log(`Congratulations. You have booked ${this.options.size.toUpperCase()} size`);
  }

  getSkiSize(opt) {
    if (opt.age < 16) {
      [this.options.size] = skiSizes;
    }

    if (opt.age < 16) {
      [, this.options.size] = skiSizes;
    }

    if (opt.age >= 16 && opt.age <= 35) {
      [, , this.options.size] = skiSizes;
    }

    if (opt.age > 35) {
      [, , , this.options.size] = skiSizes;
    }
  }
}
