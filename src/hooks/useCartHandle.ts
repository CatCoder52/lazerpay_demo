import { useDispatch, useStore } from "../context/reducer/cartReducer"
import { SET_CART_DATA, SET_TOTAL_PRICE } from "../context/actionType"

const useCartHandle = () => {
    const store = useStore();
    const dispatch = useDispatch();

    //func to add item quantity
    const itemAddQuantity = (data: any) => {
        let storageData: any = store.cartData
        let objIndex = storageData?.findIndex((obj: any) => (obj.id == data))
        storageData[objIndex].quantity = storageData[objIndex].quantity + 1
        storageData[objIndex].total = storageData[objIndex].price * storageData[objIndex].quantity
        dispatch({ type: SET_CART_DATA, payload: storageData });
        localStorage.setItem("cartData", JSON.stringify(storageData))
        let val = storageData?.map((data: any) => data.total);
        const reducer = (accumulator: any, curr: any) => accumulator + curr;
        let data2 = val?.reduce(reducer);
        dispatch({ type: SET_TOTAL_PRICE, payload: JSON.parse(data2) });
    }

    //func to remove item quantity
    const itemRemoveQuantity = (data: any) => {
        let storageData: any = store.cartData
        let objIndex = storageData?.findIndex((obj: any) => (obj.id == data))
        storageData[objIndex].quantity = storageData[objIndex].quantity - 1
        storageData[objIndex].total = storageData[objIndex].price * storageData[objIndex].quantity
        dispatch({ type: SET_CART_DATA, payload: storageData });
        localStorage.setItem("cartData", JSON.stringify(storageData))
        let val = storageData?.map((data: any) => data.total);
        const reducer = (accumulator: any, curr: any) => accumulator + curr;
        let data2 = val?.reduce(reducer);
        dispatch({ type: SET_TOTAL_PRICE, payload: JSON.parse(data2) });
    }


    const deleteItem = (data: any) => {
        let storageData: any = store.cartData
        let newData = storageData.filter((item: any) => item.id != data);
        dispatch({ type: SET_CART_DATA, payload: newData });
        localStorage.setItem("cartData", JSON.stringify(newData))

        if (newData.length  < 1) {
            let storageData: any = store.cartData
            let newData = storageData.filter((item: any) => item.id != data);
            dispatch({ type: SET_CART_DATA, payload: newData });
            localStorage.removeItem("cartData")
            dispatch({ type: SET_TOTAL_PRICE, payload: 0 });
        }

        if (newData?.length > 0) {
            let val = newData?.map((data: any) => data.total);
            const reducer = (accumulator: any, curr: any) => accumulator + curr;
            let data2 = val?.reduce(reducer);
            dispatch({ type: SET_TOTAL_PRICE, payload: JSON.parse(data2) });
        }

    }


    return {
        itemAddQuantity,
        itemRemoveQuantity,
        deleteItem
    }
}

export default useCartHandle