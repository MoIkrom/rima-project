import React, { useState } from "react";
import styles from "../cart/CardCart.module.css";
import img_chair from "../../assets/cart/img_chair.png";

function CardCart(props) {
   let [result, setResult] = useState(1);
   let [delbar, setDelbar] = useState("");

   const counterUp = () => {
      setResult(result + 1);
   };
   const counterDown = () => {
      setResult(result <= 1 ? (result = 1) : result - 1);
   };
   const handleDelete = () => {
      setDelbar(`d-none`);
   };
   console.log(delbar);
   return (
      <>
         <div>
            <tr className={`${styles.product} ${delbar}`}>
               <td className="w-50">
                  <span className="d-flex justify-content-start align-items-center">
                     <span
                        className={`${styles.delete} `}
                        onClick={handleDelete}
                     >
                        <i className="bi bi-x pe-0 pe-sm-3"></i>
                     </span>
                     <img
                        className={`${styles.img_product}`}
                        src={img_chair}
                        alt="img_chair"
                     />
                     <span
                        className={`${styles.name_product} ms-0 ms-sm-0 ms-md-5 ms-lg-5`}
                     >
                        <p>Fabric Mid Century Chair</p>
                     </span>
                  </span>
               </td>
               <div className="w-50 d-flex justify-content-between align-items-center">
                  <td className="text-center">$10.50</td>
                  <td className="text-center">
                     <span className="d-flex flex-column flex-sm-row flex-md-row justify-content-center align-items-center">
                        <span onClick={counterDown} className={styles.btn__qty}>
                           -
                        </span>
                        <span>
                           <input
                              className={styles.input__qty}
                              type="number"
                              value={result}
                           />
                        </span>
                        <span onClick={counterUp} className={styles.btn__qty}>
                           +
                        </span>
                     </span>
                  </td>
                  <td className="text-center fw-bold">$21.00</td>
               </div>
            </tr>
         </div>
      </>
   );
}

export default CardCart;
