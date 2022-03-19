import { onLoadData } from "../../helper/fakeDB";
import { useDispatch, useStore } from "../context/reducer/cartReducer"
import { SET_CART_DATA, SET_TOTAL_PRICE } from "../context/actionType"

const useLocalDBCheck = () => {
    const store = useStore();
    const dispatch = useDispatch();
    const localDBCheck = () => {


        if (localStorage.getItem("cartData") === null) {
            let saveLocalStorageData: any = onLoadData;
            dispatch({ type: SET_CART_DATA, payload: saveLocalStorageData });
            localStorage.setItem("cartData", JSON.stringify(saveLocalStorageData));

            let val = saveLocalStorageData?.map((data: any) => data.total);
            const reducer = (accumulator: any, curr: any) => accumulator + curr;
            let data = val?.reduce(reducer);
            dispatch({ type: SET_TOTAL_PRICE, payload: JSON.parse(data) });
        } else {
            let data: any = localStorage.getItem("cartData");
            dispatch({ type: SET_CART_DATA, payload: JSON.parse(data) });
            if (JSON.parse(data)?.length > 1) {
                let val = JSON.parse(data)?.map((data: any) => data.total);
                const reducer = (accumulator: any, curr: any) => accumulator + curr;
                let data2 = val?.reduce(reducer);
                dispatch({ type: SET_TOTAL_PRICE, payload: JSON.parse(data2) });
            }

        }
    }

    return {
        localDBCheck,
        cartData: store.cartData,
        totalCartItemPrice: store.totalPrice
    }
}

export default useLocalDBCheck;