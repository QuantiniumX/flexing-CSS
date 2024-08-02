export type Question = {
  questionId: String;
  targetContainerHTML: String;
  objectContainerHTML: String;
  initialCSS: String;
  instructions: String;
  points: Number;
  difficulty: "easy" | "medium" | "hard";
};
