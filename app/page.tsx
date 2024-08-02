import Main from "@/components/Main";
import Topbar from "@/components/Topbar";
import { QuestionProvider } from "@/context/QuestionContext";

export default function Home() {
  return (
    <>
      <QuestionProvider>
        <Topbar />
        <Main />
      </QuestionProvider>
    </>
  );
}
