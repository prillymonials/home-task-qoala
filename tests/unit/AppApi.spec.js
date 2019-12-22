import flushPromises from "flush-promises";
import ApiService from "@/services";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import { generateDataFromApi } from "../helper/dataProvider";

jest.mock("@/services");

describe("App.vue Axios Mock", () => {
  let wrapper;

  beforeEach(() => {
    const randomizedAge = [78, 45, 9, 73, 40, 88, 39, 93, 49, 29];
    const randomizedCities = [
      "South Trentonborough",
      "Hermanland",
      "Erdmanmouth",
      "Luettgenmouth",
      "East Osbornehaven",
      "Vinceborough",
      "South Boriston",
      "Alessandroberg",
      "Lake Charitytown",
      "West Ashaville"
    ];

    const responseData = generateDataFromApi().map((response, index) => {
      return {
        ...response,
        dob: { age: randomizedAge[index] },
        location: {
          ...response.location,
          city: randomizedCities[index]
        }
      };
    });

    ApiService.getUserList.mockImplementation(() => {
      return Promise.resolve(responseData);
    });
  });

  afterEach(() => {
    wrapper.destroy();
    ApiService.getUserList.mockClear();
  });

  it("Basic API Call", async () => {
    wrapper = shallowMount(App);

    await flushPromises();
    expect(wrapper.vm.userList.length).toBe(10);

    const userListLocalStorageRaw = localStorage.getItem("userList");
    expect(userListLocalStorageRaw).not.toBeNull();
    const userListLocalStorage = JSON.parse(userListLocalStorageRaw);
    expect(userListLocalStorage.length).toBe(10);
  });

  it("Sort Color API Call", async () => {
    wrapper = shallowMount(App);
    wrapper.setData({ activeContent: "color" });

    await flushPromises();
    const userListAge = wrapper.vm.sortedUserList.map(user => user.age);

    expect(userListAge).toEqual([29, 39, 40, 45, 49, 73, 78, 88, 93, 9]);
  });

  it("Sort Cities API Call", async () => {
    wrapper = shallowMount(App);
    wrapper.setData({ activeContent: "cities" });

    await flushPromises();
    const userListCity = wrapper.vm.sortedUserList.map(user => user.city);

    expect(userListCity).toEqual([
      "Alessandroberg",
      "East Osbornehaven",
      "Erdmanmouth",
      "Hermanland",
      "Lake Charitytown",
      "Luettgenmouth",
      "South Boriston",
      "South Trentonborough",
      "Vinceborough",
      "West Ashaville"
    ]);
  });
});
