import InitialCSS from "./InitialCSS";
import { Button } from "./ui/button";

const CSSEditor: React.FC = () => {
  return (
    <>
      <div className="mx-auto rounded flex flex-col bg-zinc-300 px-8 py-8 gap-2 shadow-2xl border-black border">
        <pre>{"#container: {"}</pre>
        <div className="css">
          <div className="mx-10 ">
            <InitialCSS />
          </div>
        </div>
        <div className="flex w-full">
          <label htmlFor="css-input" className="sr-only">
            Enter CSS
          </label>
          <input
            id="css-input"
            type="text"
            placeholder="Enter CSS"
            className="px-2 mx-10 flex-1 w-full rounded border-black border-2 "
          />
        </div>
        <pre>{"}"}</pre>
      </div>
      <Button
        variant="outline"
        className="mx-auto bg-black text-white transition-colors mt-8 block rounded px-6 py-2"
      >
        Submit
      </Button>
    </>
  );
};

export default CSSEditor;
