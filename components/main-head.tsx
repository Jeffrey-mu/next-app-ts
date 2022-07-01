import { FC } from "react";
import styles from "../styles/Home.module.css";
import { useState } from "react";

interface Props {
  name: string;
}
const Header: FC<Props> = (props: { name: string }) => {
  const [data, setdata] = useState([]);
  return (
    <h1 className={styles.title}>
      Welcome to <a href="">{props.name}!</a>
    </h1>
  );
};

export default Header;
