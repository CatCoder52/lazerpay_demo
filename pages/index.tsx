import type { NextPage } from "next";
import {
  NavHeader,
  SeoHeader,
  Footer,
  PageIntro,
  Cart,
} from "../src/components";

const Home: NextPage = () => {
  return (
    <div>
      <SeoHeader title={"Cart page"} />
      <main>
        <NavHeader />
        <PageIntro name={"Shopping Cart"} />
        <Cart />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
