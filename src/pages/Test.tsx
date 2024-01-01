import { useEffect } from "react";
import {
  Box,
  Button,
  List,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useNavigate } from "react-router-dom";
import { calculateResultScores } from "../utils/calculateResultScores";
import testStore from "../zuStore";
import CookiesBar from "../components/cookies-bar/CookiesBar";
import Counter from "../components/counter/Counter";
import MoneytaLogo from "../components/moneyta-logo/MoneytaLogo";
import { QUESTIONS } from "../data/questions";
import styles from "./Test.module.scss";

const TestPage = () => {
  const {
    currentQuestion,
    answerList,
    setCurrentQuestion,
    setAnswerList,
    setTestResult,
  } = testStore();

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestion(0);
  }, [setCurrentQuestion]);

  const { question, choices, bgColor } = QUESTIONS[currentQuestion];

  const lastPage: boolean = currentQuestion + 1 === QUESTIONS.length;

  const handleAnswer = () => {
    if (lastPage) {
      const testResult = calculateResultScores(answerList);
      setTestResult(testResult);
      navigate("/results");
    } else setCurrentQuestion(currentQuestion + 1);
  };

  const onAnswerClick = (answerNo: number) => {
    const newList = [...answerList];
    newList[currentQuestion] = {
      questionNo: currentQuestion + 1,
      answerNo: answerNo,
    };
    setAnswerList(newList);
  };

  const isItemSelected = (i: number): boolean => {
    if (answerList[currentQuestion]) {
      return answerList[currentQuestion].answerNo === i + 1;
    } else {
      return false;
    }
  };

  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      className={styles.test_container}
      sx={{ background: bgColor, padding: { sm: "0", xs: "10px" } }}
    >
      {!mobile && <MoneytaLogo />}
      <Counter
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
      <Box className={styles.question_wrapper}>
        <Box sx={{ width: { sm: "60%", xs: "100%" } }}>
          <Box
            component="img"
            alt="Illustration"
            src={`./images/questions/${currentQuestion + 1}.svg`}
            className={styles.question_image}
          />
          <Box className={styles.question}>
            <Typography
              component="h3"
              sx={{ typography: { sm: "h3", xs: "h5" } }}
            >
              {question}
            </Typography>
          </Box>
          <Box className={styles.choices_container}>
            <List>
              {choices.map((answer, i) => (
                <li
                  onClick={() => onAnswerClick(i + 1)}
                  key={answer}
                  className={styles.choice}
                  style={{
                    background: isItemSelected(i)
                      ? "rgba(255,255,255,0.3)"
                      : "",
                  }}
                >
                  {isItemSelected(i) ? (
                    <CheckCircleIcon />
                  ) : (
                    <RadioButtonUncheckedIcon />
                  )}
                  {answer}
                </li>
              ))}
            </List>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            className={styles.next_button}
            sx={{
              display: answerList[currentQuestion] ? "block" : "none",
            }}
            onClick={handleAnswer}
          >
            {lastPage ? "Test results" : "Next question"}
          </Button>
        </Box>
      </Box>
      {!mobile && <CookiesBar />}
    </Box>
  );
};

export default TestPage;
