import { ReactPortal, useEffect } from "react";
import ReactDOM from "react-dom";

import { ModalProps } from "./types";

const modalOnStyle =
  "filter: blur(2px); pointer-events: none; opacity: .5; overflow: hidden;";
const modalOffStyle = "filter: none; pointer-events: auto; opacity: 1;";

const Modal = ({ isOpen, children }: ModalProps): ReactPortal | null => {
  useEffect(() => {
    const app = document.getElementById("root");
    if (app) {
      if (isOpen) app.setAttribute("style", modalOnStyle);
      else app.setAttribute("style", modalOffStyle);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="absolute flex items-center justify-center z-20 inset-0 h-full w-auto">
      <div className="bg-white rounded-xl p-8 drop-shadow">{children}</div>
    </div>,
    document.body,
  );
};

export default Modal;
