import styles from "styles/Card.module.scss";
import { Link } from "react-router-dom";
import GetIcon from "components/GetIcon";

const Card = ({ product }) => {
  return (
    <div className={styles.card}>
      <Link to={`/${product.id}`} className={styles.content}>
        <div className={styles.img}>
          <img src={product.image} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            <h3>{product.title}</h3>
          </div>
          <div className={styles.footer}>
            <div className={styles.price}>
              {product.price} <small>TRY</small>
            </div>
            <button className={styles.addToBasket}>
              <GetIcon icon="BsFillCartPlusFill" size={18} /> add to basket
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;