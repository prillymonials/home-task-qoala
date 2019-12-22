import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe('Header.vue', () => {
  let wrapper;

  afterEach(() => {
    wrapper.destroy();
  });

  it("is A Vue instance", () => {
    wrapper = shallowMount(Header, {
      propsData: {
        activeContent: '',
        onClickSort: () => {}
      }
    });
    expect(wrapper.isVueInstance).toBeTruthy();
  });
})