import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Typography,
  Theme,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { calculateOverallSuccess } from "../utils/calculateResultSliders";
import testStore from "../zuStore";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import CookiesBar from "../components/cookies-bar/CookiesBar";
import ResultMeter from "../components/result-meter/ResultMeter";
import MoneytaLogo from "../components/moneyta-logo/MoneytaLogo";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Results.module.scss";

const ResultsPage: FC = () => {
  const navigate = useNavigate();

  const { testResult, reset } = testStore();

  const resultsFeedback = calculateOverallSuccess(testResult);

  const scoreImageSrc = `./images/smiley_${resultsFeedback.smileyColor}.svg`;

  const startOver = () => {
    reset();
    navigate("/");
  };

  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Box className={styles.results_container}>
      <Box
        className={styles.topbox}
        sx={{ flexDirection: { sm: "row", xs: "column" } }}
      >
        <Box
          className={styles.donutbox}
          sx={{ margin: { sm: "20px 100px 20px 130px", xs: "20px auto" } }}
        >
          <Box
            component="img"
            alt="Smiley"
            src={scoreImageSrc}
            className={styles.results_smajlik}
          />
          <Box className={styles.progressbar_container}>
            <CircularProgressbar
              value={resultsFeedback.percentage}
              className={styles.full_circle}
              styles={buildStyles({
                pathColor: resultsFeedback.barColor,
                trailColor: "transparent",
                strokeLinecap: "butt",
              })}
            />
          </Box>
        </Box>
        <Box
          className={styles.main_textbox}
          sx={{ width: { sm: "50%", xs: "100%" } }}
        >
          <Typography component="h4" variant="h4" sx={{ my: "15px" }}>
            {resultsFeedback.headline}
          </Typography>
          <Typography sx={{ mb: "20px" }}>{resultsFeedback.text}</Typography>
        </Box>
        {!mobile && <MoneytaLogo style={{ top: "40%" }} />}
      </Box>
      <Box className={styles.bottombox}>
        <Typography component="h4" variant="h4">
          Your test results
        </Typography>
        <Box className={styles.metersbox}>
          <Box
            className={styles.meters_column}
            sx={{ width: { sm: "40%", xs: "100%" } }}
          >
            <ResultMeter
              name="Watching my budget"
              value={testResult.rozpocetScore}
            />
            <ResultMeter
              name="Paying off my debts"
              value={testResult.splaceniScore}
            />
            <ResultMeter name="Living smart" value={testResult.bydleniScore} />
          </Box>
          <Box
            className={styles.meters_column}
            sx={{ width: { sm: "40%", xs: "100%" } }}
          >
            <ResultMeter
              name="Making a reserve"
              value={testResult.rezervaScore}
            />
            <ResultMeter
              name="Thinking of future"
              value={testResult.budoucnostScore}
            />
            <ResultMeter
              name="My money is secure"
              value={testResult.bezpecnostScore}
            />
          </Box>
        </Box>
      </Box>
      <Card
        sx={{
          padding: "15px",
          marginInline: "auto",
          maxWidth: { sm: "45%", xs: "100%" },
        }}
      >
        <Box className={styles.appointment_text}>
          <b>Come visit us.</b> Together we'll explore the fields where you
          might need help and see how to improve them. We are available at our
          local branch or online.
        </Box>
        <Box className={styles.buttonbox}>
          <Button variant="contained">Make appointment at our branch</Button>
          <Button variant="outlined">Make online meeting</Button>
        </Box>
      </Card>
      <Button
        variant="contained"
        color="secondary"
        className={styles.reset_button}
        onClick={() => startOver()}
      >
        <ChevronLeftIcon /> Star over
      </Button>
      {!mobile && <CookiesBar color="#8f8e8e" />}
    </Box>
  );
};

export default ResultsPage;
