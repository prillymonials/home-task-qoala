import faker from "faker";

export function generateDataLocalStorage(totalData) {
  totalData = totalData || 5;
  const result = [];

  for (let idx = 0; idx < totalData; idx++) {
    result.push({
      age: faker.random.number({ min: 10, max: 99 }),
      picture: faker.image.avatar(),
      title: faker.name.title(),
      first: faker.name.firstName(),
      last: faker.name.lastName(),
      email: faker.internet.email(),
      city: faker.address.city(),
      state: faker.address.state(),
      postcode: faker.address.zipCode(),
      registeredDate: faker.date.recent()
    });
  }

  return result;
}

export function generateDataFromApi() {
  const results = [];

  for (let idx = 0; idx < 10; idx++) {
    results.push({
      name: {
        title: faker.name.title(),
        first: faker.name.firstName(),
        last: faker.name.lastName()
      },
      dob: {
        age: faker.random.number({ min: 10, max: 99 })
      },
      picture: {
        large: faker.image.avatar()
      },
      email: faker.internet.email(),
      location: {
        city: faker.address.city(),
        state: faker.address.state(),
        postcode: faker.address.zipCode()
      },
      registered: {
        date: faker.date.recent()
      }
    });
  }

  return results;
}
