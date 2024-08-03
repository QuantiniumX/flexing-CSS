export type Question = {
  questionId: String;
  targetContainerHTML: string;
  objectContainerHTML: string;
  initialCSS: string;
  instructions: String;
  points: Number;
  difficulty: "easy" | "medium" | "hard";
};
