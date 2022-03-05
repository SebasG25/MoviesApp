import { ImSpinner2 } from "react-icons/im";
import styles from "../styles/Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <ImSpinner2 className={styles.spinning} size={60} />
    </div>
  );
}