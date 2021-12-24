import { createStore } from 'vuex';

interface State {
  bookmarks: Array<{
    id: number;
    date: Date;
    operation: string;
    result: number;
  }>;
}

export const store = createStore<State>({
  state: {
    bookmarks: [],
  },
  mutations: {
    addToBookmarks(state, payload) {
      state.bookmarks.push(payload);
      console.log(state.bookmarks);
    },
    removeFromBookmarks(state, payload) {
      const id = state.bookmarks.map((item) => item.id).indexOf(payload);
      state.bookmarks.splice(id, 1);
    },
    removeAllFromBookmarks(state) {
      state.bookmarks.splice(0, state.bookmarks.length);
    },
  },
});
