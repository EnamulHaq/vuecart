import axios from "axios"
export function getProducts({ commit }) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    axios.get(url).then((response) => {
        commit("setProducts", response.data);
    }).catch(error => {
        console.log(error);
    });
}

export function addCart({ commit, getters }, payload) {
    // console.log(payload)
    //
    //
    // const cartItems = getState().cart.cartItems.slice();
    // let allreadyIncart = false;
    // cartItems.forEach(x => {
    //     if (x._id === product._id) {
    //         allreadyIncart = true;
    //         x.count++
    //     }
    // });
    //
    // if (!allreadyIncart) {
    //     cartItems.push({ ...product, count: 1 })
    // }
    //
    console.log()
    let cart = getters.cart.slice()
    // console.log(cart)
    let allreadyIncart = false;
    cart.forEach(x => {
        if (x.id === payload.product.id) {
            allreadyIncart = true;
            x.count++
        }
    });
    if (!allreadyIncart) {
        cart.push({...payload.product, count: 1})
    }
    commit("setCart", cart)
}

export function removeCart({ commit, getters }, id) {
    let cart = []
    if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}