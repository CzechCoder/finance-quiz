import { Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "./Counter.module.scss";

interface CounterProps {
  currentQuestion: number;
  setCurrentQuestion(data: number): void;
}

const Counter = ({ currentQuestion, setCurrentQuestion }: CounterProps) => {
  return (
    <Box
      className={styles.counter_module}
      sx={{
        top: { sm: "10%", xs: "5%" },
        left: { sm: "5%", xs: "60%" },
      }}
    >
      {currentQuestion > 0 && (
        <Box
          className={styles.return_button}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          sx={{ left: { sm: "-30px", xs: "-180%" } }}
        >
          <ChevronLeftIcon />
          Back
        </Box>
      )}
      <span className={styles.question_counter}>
        {currentQuestion + 1} / 11
      </span>
    </Box>
  );
};

export default Counter;
