import styles from "../styles/layout.module.css";
const Layout = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.hover}>
        <img
          style={{ height: "300px", width: "300px" }}
          src="/highlight about.webp"
        />
      </div> */}
      <a className={styles.about}><img className = {styles.about} src="/about.webp" /></a>
    </div>
  );
};
export default Layout;
