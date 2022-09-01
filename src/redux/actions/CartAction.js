export const addToCart = (item) => {
    return {
        type: "ADD",
        payload: item
    }
}

export const increaseQty = (product_id, quantity) => {
    return {
        type: "INCREASE",
        payload: {
            product_id,
            quantity
        }
    }
}

export const decreaseQty = (product_id, quantity) => {
    return {
      type: "DECREASE",
        payload: {
            product_id,
            quantity
        }
    }
}

export const removeFromCart = (product_id) => { 
  return {
    type: "REMOVE",
    payload: product_id
  };
}