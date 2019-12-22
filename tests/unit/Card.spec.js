import faker from "faker";
import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Card.vue", () => {
  let wrapper;

  afterEach(() => {
    wrapper.destroy();
  });

  it("is A Vue instance", () => {
    wrapper = shallowMount(Card, {
      propsData: {
        user: {
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
        }
      }
    });
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("is Render with current data", () => {
    wrapper = shallowMount(Card, {
      propsData: {
        user: {
          age: 40,
          picture: "https://picsum.photos/200",
          title: "Mr.",
          first: "Cornelius",
          last: "Prilly",
          email: "cprilly@example.com",
          city: "Jakarta Selatan",
          state: "DKI Jakarta",
          postcode: "12190",
          registeredDate: "2019-01-01T07:00:00Z"
        }
      }
    });

    expect(wrapper.find(".CardImage").attributes().src).toEqual(
      "https://picsum.photos/200"
    );
    expect(wrapper.find(".CardName > h3").text()).toEqual(
      "Mr. Cornelius Prilly"
    );
    expect(wrapper.find(".CardName > label").text()).toEqual("40");
    expect(wrapper.find(".CardEmail").text()).toEqual("cprilly@example.com");
    expect(wrapper.find(".CardAddress").text()).toEqual(
      "Jakarta Selatan, DKI Jakarta, 12190"
    );
  });

  it('Return "CardRed"', () => {
    wrapper = shallowMount(Card, {
      propsData: {
        user: {
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
        }
      }
    });

    expect(wrapper.vm.getBackgroundColor(17)).toEqual('CardRed');
    expect(wrapper.vm.getBackgroundColor(20)).toEqual('CardRed');
    expect(wrapper.vm.getBackgroundColor(5)).toEqual('CardRed');
  });

  it('Return "CardGreen"', () => {
    wrapper = shallowMount(Card, {
      propsData: {
        user: {
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
        }
      }
    });

    expect(wrapper.vm.getBackgroundColor(21)).toEqual('CardGreen');
    expect(wrapper.vm.getBackgroundColor(44)).toEqual('CardGreen');
    expect(wrapper.vm.getBackgroundColor(55)).toEqual('CardGreen');
  });

  it('Return "CardBlue"', () => {
    wrapper = shallowMount(Card, {
      propsData: {
        user: {
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
        }
      }
    });

    expect(wrapper.vm.getBackgroundColor(56)).toEqual('CardBlue');
    expect(wrapper.vm.getBackgroundColor(70)).toEqual('CardBlue');
    expect(wrapper.vm.getBackgroundColor(81)).toEqual('CardBlue');
  });

  it('Must have "CardRed" class', () => {
    wrapper = shallowMount(Card, {
      propsData: {
        user: {
          age: 19,
          picture: faker.image.avatar(),
          title: faker.name.title(),
          first: faker.name.firstName(),
          last: faker.name.lastName(),
          email: faker.internet.email(),
          city: faker.address.city(),
          state: faker.address.state(),
          postcode: faker.address.zipCode(),
          registeredDate: faker.date.recent()
        }
      }
    });

    expect(wrapper.find('.Card.CardRed').exists()).toBeTruthy();
  })

  it('Must have "CardGreen" class', () => {
    wrapper = shallowMount(Card, {
      propsData: {
        user: {
          age: 40,
          picture: faker.image.avatar(),
          title: faker.name.title(),
          first: faker.name.firstName(),
          last: faker.name.lastName(),
          email: faker.internet.email(),
          city: faker.address.city(),
          state: faker.address.state(),
          postcode: faker.address.zipCode(),
          registeredDate: faker.date.recent()
        }
      }
    });

    expect(wrapper.find('.Card.CardGreen').exists()).toBeTruthy();
  })

  it('Must have "CardBlue" class', () => {
    wrapper = shallowMount(Card, {
      propsData: {
        user: {
          age: 77,
          picture: faker.image.avatar(),
          title: faker.name.title(),
          first: faker.name.firstName(),
          last: faker.name.lastName(),
          email: faker.internet.email(),
          city: faker.address.city(),
          state: faker.address.state(),
          postcode: faker.address.zipCode(),
          registeredDate: faker.date.recent()
        }
      }
    });

    expect(wrapper.find('.Card.CardBlue').exists()).toBeTruthy();
  })
});
