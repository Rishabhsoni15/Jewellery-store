import { faker } from "@faker-js/faker";

function createRandomJewellerylist() {
  return {
    name: faker.commerce.productMaterial(),
    image: "public/Images/26.webp",

    price: faker.finance.amount({ min: 2000, max: 10000 }),
  };
}

const jewlist = faker.helpers.multiple(createRandomJewellerylist, {
  count: 7,
});

export default {
  jewlist,
};
