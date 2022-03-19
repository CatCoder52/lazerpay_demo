import React, { useEffect } from "react";
import useLocalDBCheck from "../hooks/useLocalDBCheck";
import useCartHandle from "../hooks/useCartHandle";
import { useLazerpay } from "lazerpay-react";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import Link from "next/link";

const Cart = () => {
  const { localDBCheck, cartData, totalCartItemPrice } = useLocalDBCheck();
  const { itemAddQuantity, itemRemoveQuantity, deleteItem } = useCartHandle();
  const router = useRouter();
  useEffect(() => {
    localDBCheck();
  }, []);

  const config = {
    publicKey: "pk_test_Jd3IKX7YnMq1RMyO89USK9t54YgofYvz4Q3dfugHgqX6qvijOL",
    customerName: "Ibe Andyson Andrew",
    customerEmail: "ibeandyson@gmail.com",
    currency: "USD", // USD, NGN, AED, GBP, EUR
    amount: totalCartItemPrice, // amount as a number or string
    reference: uuid(), //Math.floor(Math.random() * totalCartItemPrice).toString(), // unique identifier
    acceptPartialPayment: true,
    onSuccess: (response: any) => {
      console.log(response);
      router.push({
        pathname: `/success_page`,
      });
    },
    onClose: () => {
      location.reload();
    },
    onError: (response: any) => {
      console.log(response);
    },
  };
  const initializePayment = useLazerpay(config);

  return (
    <div>
      <section className="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mb-5">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr className="text-center">
                      <th className="table-title text-start">Product</th>
                      <th className="table-title">Price</th>
                      <th className="table-title">Quantity</th>
                      <th className="table-title">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData?.map((data: any) => (
                      <tr key={data.id} className="border-bottom text-center">
                        <td className="text-start">
                          <div className="table-img">
                            <img
                              src={data.image_url}
                              alt=""
                              className="img-fluid"
                            />
                            <div
                              onClick={() => deleteItem(data.id)}
                              style={{
                                marginLeft: "-5%",
                                marginTop: "-3%",
                                marginRight: "4%",
                              }}
                            >
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                                  fill="black"
                                />
                                <path
                                  d="M7.8002 4.19995L4.2002 7.79995"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M4.2002 4.19995L7.8002 7.79995"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div>
                              <p
                                className="mb-2 mt-2"
                                style={{ fontSize: "12px", color: "#000000" }}
                              >
                                {data.name}
                              </p>
                              <p
                                className=" mb-2"
                                style={{ fontSize: "12px", color: "#A1A8C1" }}
                              >
                                Color: {data.color}
                              </p>
                              <p
                                className=" mb-2"
                                style={{ fontSize: "12px", color: "#A1A8C1" }}
                              >
                                Size: {data.size}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td style={{ fontSize: "12px", color: "#15245E" }}>
                          ${data.price}
                        </td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              disabled={data.quantity === 1 ? true : false}
                              onClick={() => itemRemoveQuantity(data.id)}
                              style={{ backgroundColor: "#bebfc2" }}
                              className="cart-btn  btn px-3"
                            >
                              -
                            </button>
                            <button
                              style={{ fontSize: "12px", color: "#15245E" }}
                              className="cart-btn  btn-outline btn px-3"
                            >
                              {data.quantity}
                            </button>
                            <button
                              onClick={() => itemAddQuantity(data.id)}
                              style={{ backgroundColor: "#bebfc2" }}
                              className="cart-btn  btn px-3"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td style={{ fontSize: "12px", color: "#15245E" }}>
                          ${data.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <h4 className="table-title text-center mb-4">Cart Total</h4>
              <div className="card bg-light border-0">
                <div className="card-body py-5">
                  <ul className="list-unstyled mb-5">
                    {cartData?.map((data: any) => (
                      <li
                        key={data.id}
                        className="d-flex border-bottom pb-2 pt-4  lead justify-content-between"
                      >
                        <span
                          style={{
                            color: "#1D3178",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          Subtotal:
                        </span>
                        <span
                          style={{
                            color: "#15245E",
                            fontSize: "14px",
                            fontWeight: 400,
                          }}
                        >
                          ${data.total}
                        </span>
                      </li>
                    ))}
                    <li className="d-flex border-bottom pb-2 pt-4  justify-content-between">
                      <span
                        style={{
                          color: "#1D3178",
                          fontSize: "16px",
                          fontWeight: 600,
                        }}
                      >
                        Total:
                      </span>
                      <span
                        style={{
                          color: "#15245E",
                          fontSize: "14px",
                          fontWeight: 400,
                        }}
                      >
                        ${totalCartItemPrice}
                      </span>
                    </li>
                  </ul>
                  <Link passHref href="">
                    <a
                      onClick={initializePayment}
                      className="btn btn-success w-100"
                    >
                      Complete Payment
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
