import styles from "styles/CategoryItem.module.scss";
import { Link } from "react-router-dom";
import linkBG from "images/shopBG.jpg";

const CategoryItem = ({ data, setNavIsOpen }) => {
  return (
    <li className={styles.item}>
      <Link
        to={`/category/${data}`}
        className={styles.sub_a}
        onClick={() => setNavIsOpen && setNavIsOpen(false)}
      >
        <img src={linkBG} alt="" />
        <h3>{data}</h3>
      </Link>
    </li>
  );
};

export default CategoryItem;
