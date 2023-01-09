import { ReactElement } from "react";

import About from "./about";
import Experience from "./experience";
import Education from "./education";
import Additional from "./additional";

const View = (): ReactElement => (
  <div className="flex flex-col gap-6 px-10 h-full pb-10 overflow-y-auto text-primary">
    <About />
    <Experience />
    <Education />
    <Additional />
  </div>
);

export default View;
