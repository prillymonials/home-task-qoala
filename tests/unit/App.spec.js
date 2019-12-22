import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Header from "@/components/Header.vue";
import CardList from "@/components/CardList.vue";
import { generateDataLocalStorage } from "../helper/dataProvider";

describe("App.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is A Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("has Header element", () => {
    const header = wrapper.find(Header);
    expect(header.is(Header)).toBeTruthy();
  });

  it("has CardList element", () => {
    const cardList = wrapper.find(CardList);
    expect(cardList.is(CardList)).toBeTruthy();
  });

  it("Age Rank must be 1", () => {
    let ageRank1 = wrapper.vm.getAgeRank(21);
    let ageRank2 = wrapper.vm.getAgeRank(55);
    let ageRank3 = wrapper.vm.getAgeRank(47);

    expect(ageRank1).toBe(1);
    expect(ageRank2).toBe(1);
    expect(ageRank3).toBe(1);
  });

  it("Age Rank must be 2", () => {
    let ageRank1 = wrapper.vm.getAgeRank(56);
    let ageRank2 = wrapper.vm.getAgeRank(70);
    let ageRank3 = wrapper.vm.getAgeRank(99);

    expect(ageRank1).toBe(2);
    expect(ageRank2).toBe(2);
    expect(ageRank3).toBe(2);
  });

  it("Age Rank must be 3", () => {
    let ageRank1 = wrapper.vm.getAgeRank(10);
    let ageRank2 = wrapper.vm.getAgeRank(20);
    let ageRank3 = wrapper.vm.getAgeRank(1);

    expect(ageRank1).toBe(3);
    expect(ageRank2).toBe(3);
    expect(ageRank3).toBe(3);
  });

  it('Active Content must be "color"', () => {
    expect(wrapper.vm.activeContent).toBe("");
    wrapper.vm.setActiveContent("color");
    expect(wrapper.vm.activeContent).toBe("color");
  });

  it('Active Content must be "cities"', () => {
    expect(wrapper.vm.activeContent).toBe("");
    wrapper.vm.setActiveContent("cities");
    expect(wrapper.vm.activeContent).toBe("cities");
  });
});

describe("App.vue with LS", () => {
  let wrapper;

  afterEach(() => {
    wrapper.destroy();
    localStorage.clear();
  });

  it("Data must be empty", () => {
    wrapper = shallowMount(App);

    expect(wrapper.vm.userList.length).toBe(0);
  });

  it("Data must contain 5 data", () => {
    localStorage.setItem(
      "userList",
      JSON.stringify(generateDataLocalStorage(5))
    );
    wrapper = shallowMount(App);

    expect(wrapper.vm.userList.length).toBe(5);
  });
});
