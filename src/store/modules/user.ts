// store/modules/app.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  now: number;
}
export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    now: Date.now()
  },
  mutations: {
    setNow(state, data: number) {
      state.now = data;
    }
  },
  actions: {}
});

export function appStore() {
  return baseUseStore(key);
}
