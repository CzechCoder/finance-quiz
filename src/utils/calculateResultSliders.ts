import { TestResult } from "../zuStore";

export interface Result {
  smileyColor: string;
  barColor: string;
  headline: string;
  text: string;
}

interface ResultWithPercentage extends Result {
  percentage: number;
}

export const calculateSmileyColorMeter = (value: number): string => {
  if (value >= 75) return "green";
  else if (value <= 74 && value >= 40) {
    return "orange";
  } else {
    return "red";
  }
};

const overAllResults = {
  green: {
    smileyColor: "green",
    barColor: "#50c85b",
    headline: "You're doing great and you're in firm control of your finances",
    text: "Great! You are obviously taking care of your finances and don't leave the future up to a chance. However, there's always something to improve. You can get in touch with your banker and discuss further options. It's worth it, you'll see.",
  },
  orange: {
    smileyColor: "orange",
    barColor: "#ffd32a",
    headline: "You're doing well and can still make it better",
    text: "You're well on your way to wealth because you take care of your finances. You're still a few steps from perfection, though. Get in touch with your banker. Together you'll look at the fields you can improve. You'll see that you can get even more out of your money.",
  },
  red: {
    smileyColor: "red",
    barColor: "#d6081f",
    headline: "It's no ideal, but we are here to help you",
    text: "Well, it's not exactly ideal. Perhaps even you yourself feel that you could be better off. You could easily get into big trouble. You're not alone to handle your finances, though. We are ready to get your finances into perfect shape. Get in touch with your banker who will help you with your situation.",
  },
};

export const calculateOverallSuccess = (
  testResult: TestResult
): ResultWithPercentage => {
  const values = Object.values(testResult);

  const score: number =
    values.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0) / 6;

  if (score >= 75) return { ...overAllResults.green, percentage: score };
  else if (score <= 74 && score >= 40) {
    return { ...overAllResults.orange, percentage: score };
  } else {
    return { ...overAllResults.red, percentage: score };
  }
};
