import { store } from '../store/setup';
import { findOperation, formatDate } from '../helpers/utils';

type AddToBookmarksType = {
  left: number;
  right: number;
  opt: string;
  result: number;
};

const addToBookmarks = ({ left, right, opt, result }: AddToBookmarksType) => {
  const data = findOperation({
    left,
    right,
    opt,
  });

  if (data >= 0 || data <= 0) {
    store.commit('addToBookmarks', {
      id: Math.random(), // génération d'un identifiant aléatoire pour éviter les collisions de clés
      date: formatDate(new Date()),
      operation: `${left} ${opt} ${right}`,
      result,
    });
  }
};

const removeFromBookmarks = (id: number) => {
  store.commit('removeFromBookmarks', id);
};

const removeAllFromBookmarks = () => {
  store.commit('removeAllFromBookmarks');
};

export { addToBookmarks, removeFromBookmarks, removeAllFromBookmarks };
