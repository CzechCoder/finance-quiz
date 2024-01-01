import { create } from "zustand";

export interface Answer {
  questionNo: number;
  answerNo: number;
}

export interface TestResult {
  rozpocetScore: number;
  splaceniScore: number;
  bydleniScore: number;
  rezervaScore: number;
  budoucnostScore: number;
  bezpecnostScore: number;
}

export interface TestState {
  testActive: boolean;
  currentQuestion: number;
  answerList: Answer[];
  testResult: TestResult;
  reset(): void;
  setTestActive(data: boolean): void;
  setCurrentQuestion(data: number): void;
  setAnswerList(data: Answer[]): void;
  setTestResult(data: TestResult): void;
}

const testStore = create<TestState>((set) => ({
  testActive: false,
  currentQuestion: 0,
  answerList: [],
  testResult: {
    rozpocetScore: 0,
    splaceniScore: 0,
    bydleniScore: 0,
    rezervaScore: 0,
    budoucnostScore: 0,
    bezpecnostScore: 0,
  },
  reset: () => set({ answerList: [] }),
  setTestActive: (data: boolean) => {
    set(() => ({ testActive: data }));
  },
  setCurrentQuestion: (data: number) => {
    set(() => ({ currentQuestion: data }));
  },
  setAnswerList: (data: Answer[]) => {
    set(() => ({ answerList: data }));
  },
  setTestResult: (data: TestResult) => {
    set(() => ({ testResult: data }));
  },
}));

export default testStore;
