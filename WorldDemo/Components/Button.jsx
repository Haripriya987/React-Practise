import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ children, onClick, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]} `} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "back", "position"]),
};
