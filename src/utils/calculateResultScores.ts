import { Answer, TestResult } from "../zuStore";

export const calculateResultScores = (answerList: Answer[]): TestResult => {
  const testResult: TestResult = {
    rozpocetScore: Math.floor(
      (100 / answerList[0].answerNo + 100 / answerList[1].answerNo) / 2
    ),
    splaceniScore: Math.floor(
      (100 / answerList[3].answerNo + 100 / answerList[4].answerNo) / 2
    ),
    bydleniScore: Math.floor(
      (100 / answerList[7].answerNo + 100 / answerList[8].answerNo) / 2
    ),
    rezervaScore: Math.floor(
      (100 / answerList[6].answerNo + 100 / answerList[2].answerNo) / 2
    ),
    budoucnostScore: Math.floor(
      (100 / answerList[5].answerNo + 100 / answerList[6].answerNo) / 2
    ),
    bezpecnostScore: Math.floor(
      (100 / answerList[10].answerNo + 100 / answerList[9].answerNo) / 2
    ),
  };
  return testResult;
};
