import type { NextPage } from "next";
import { NavHeader, SeoHeader, Footer, PageIntro } from "../src/components";
import Link from "next/link";

const successPage: NextPage = () => {
  return (
    <div>
      <SeoHeader title={"Order Completed page"} />
      <main>
        <NavHeader />
        <PageIntro name={"Order Completed"} />
        <section className="body">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center">
                  <img
                    src="asset/icons/Vector 15.png"
                    className="mb-5"
                    alt=""
                  />
                  <h1
                    style={{
                      color: "#101750",
                      fontSize: "36px",
                      fontWeight: 700,
                    }}
                    className="mb-4"
                  >
                    Your Order Is Completed
                  </h1>
                  <p
                    style={{
                      color: "#8D92A7",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                    className=" mb-4"
                  >
                    Thank you for your order! Your order is being processed and
                    will be completed within 3-6 hours. You will receive an
                    email confirmation when your order is completed.
                  </p>
                  <Link passHref href="/">
                    <a
                      style={{
                        backgroundColor: "#FF1788",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                      className="btn btn-pink py-3 px-5"
                    >
                      Continue Shopping
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default successPage;
