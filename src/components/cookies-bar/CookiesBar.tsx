import styles from "./CookiesBar.module.scss";
import { Link, Typography } from "@mui/material";

const CookiesBar = ({ color }: { color?: string }) => {
  const textColor = color ?? "#fff";
  return (
    <div className={`${styles.bar_container} d-inline-flex`}>
      <Typography className="p-0" style={{ color: textColor }}>
        © 2024 MONEYTA Money Bank, a.s |{" "}
        <Link style={{ color: textColor }}>Privacy policy</Link> |{" "}
        <Link style={{ color: textColor }}>Cookies policy</Link>
      </Typography>
    </div>
  );
};

export default CookiesBar;
