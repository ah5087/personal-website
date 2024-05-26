import { FC } from "react";
import { AppProps } from "./App.types";

const App: FC<AppProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default App;
