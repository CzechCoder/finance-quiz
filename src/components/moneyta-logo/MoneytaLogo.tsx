import { Box, Link } from "@mui/material";
import styles from "./MoneytaLogo.module.scss";

interface MoneytaLogoProps {
  style?: object;
}

const MoneytaLogo = ({ style }: MoneytaLogoProps) => (
  <Box>
    <Link href="https://moneta.cz" className={styles.logo} style={style} />
  </Box>
);

export default MoneytaLogo;
