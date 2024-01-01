import { FC } from "react";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import illustration from "/images/money-with-wings.svg";
import CookiesBar from "../components/cookies-bar/CookiesBar";
import { CHECKLIST } from "../data/checklist";
import styles from "./Home.module.scss";

const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/test");
  };

  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Box className={styles.hero_box}>
        <Container maxWidth="md" className={styles.hero_container}>
          <Typography
            component="h3"
            sx={{ typography: { sm: "h3", xs: "h5" } }}
          >
            THE MONEY HEALTH QUIZ
          </Typography>
          <Typography
            component="h4"
            sx={{ typography: { sm: "h4", xs: "h5" } }}
          >
            Test Your Financial Health
          </Typography>
        </Container>
      </Box>
      <Box className={styles.bottom_box}>
        <Container
          maxWidth="md"
          className={styles.bottom_container}
          sx={{ flexDirection: { sm: "row", xs: "column" } }}
        >
          <Box
            component="img"
            alt="Illustration"
            src={illustration}
            sx={{ maxWidth: { sm: "300px", xs: "70%" }, mx: "auto" }}
          />
          <Box className={styles.list_box}>
            <Typography variant="h4" component="h4">
              In This Quiz
            </Typography>
            <List>
              {CHECKLIST.map((item) => (
                <ListItem key={item}>
                  <ListItemIcon sx={{ color: "#1976d2" }}>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText>{item}</ListItemText>
                </ListItem>
              ))}
            </List>
            <Button variant="contained" onClick={handleRedirect}>
              Run the Test
            </Button>
          </Box>
        </Container>
        {!mobile && <CookiesBar color="#8f8e8e" />}
      </Box>
    </>
  );
};

export default HomePage;
