export type Question = {
  questionId: string;
  targetContainerHTML: string;
  objectContainerHTML: string;
  initialCSS: string;
  instructions: String;
  points: Number;
  difficulty: "easy" | "medium" | "hard";
};
