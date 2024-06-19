import { atom, selector } from "recoil"

export function addToCart(id, quantity) {
    const listItemCart = JSON.parse(localStorage.getItem('cart') || "[]" )
    const checkResult = listItemCart.find((item) => (item.id === id)) 
    if(checkResult) {
        alert('Đã có trong giỏ hàng!')
    }
    else {
        listItemCart.push({id, quantityCart: 1 })
        localStorage.setItem('cart', JSON.stringify(listItemCart))
        alert('Thêm thành công!') 
    }
}
export const cartState = atom({
    key: 'cartState',
    default: [],
});

export const cartTotalSelector = selector({
    key: 'cartTotalSelector',
    get: ({ get }) => {
      const cart = get(cartState);
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
});
