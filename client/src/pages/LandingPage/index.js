// import { useState } from "react";
// import BurgerList from "../components/BurgerList";


// export default function Home({ burgerList, admin }) {
//     const [close, setClose] = useState(true);
//     return (
//       <div className={styles.container}>
//         <Header>
//           <title>Burger Restaurant in San Diego</title>
//           <meta name="description" content="Best burger shop in town" />
//           <link rel="icon" href="/favicon.ico" />
//         </Header>
//         <BurgerList BurgerList={BurgerList} />
//       </div>
//     );
//   }
import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import Cart from '../../pages/Cart';

const LandingPage = () => {
  return (
    <div className="container">
        <h2>THis is the landing page/
        Best Burger Restaurant in San Diego
        </h2>
      <ProductList />
      {/* <Cart /> */}
    </div>
  );
};

export default LandingPage;
