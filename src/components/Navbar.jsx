import React from "react";
import styles from "./navbar.module.css";
import data from "../../src/data/navBar.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  console.log("data", data);

  const renderMenuItem = () => (
    <ul className={styles.menu__list}>
      {data?.map((item, index) => {
        return (
          <li className={`menu__list__item styles.${item.active}`} key={index}>
            <FontAwesomeIcon icon={`fa-solid ${item.icon}`} />
            <span>{item?.type}</span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__wrapper}>
        <div className={styles.navbar__top}>
          <h3>Booking Website</h3>
          <div className={styles.navbar__button}>
            <button type="">Register</button>
            <button type="">Login</button>
          </div>
        </div>

        <div className={styles.navbar__bottom}>{renderMenuItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
