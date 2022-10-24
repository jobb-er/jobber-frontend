import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

const App = (): ReactElement => {
  const { t } = useTranslation();

  return <span>{t("hello")}</span>;
};

export default App;
