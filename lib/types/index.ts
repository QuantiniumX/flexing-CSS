export type Question = {
  _id: string;
  questionId: string;
  targetContainerHTML: string;
  objectContainerHTML: string;
  initialCSS: string;
  instructions: String;
  points: Number;
  difficulty: "easy" | "medium" | "hard";
};
