// код ниже чисто для теста редюсера, его потом убрать

import store from '@/shared/store';

// Добавить товар в список просмотренных
store.dispatch(addProduct({ id: 1, name: 'Товар 1' }));

// Получить последние просмотренные товары
const viewedProducts = store.getState().viewedProducts;
console.log(viewedProducts);