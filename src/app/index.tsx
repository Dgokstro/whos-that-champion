import { FunctionComponent } from "react";
import { useStyles } from "./styles";

export const App: FunctionComponent = () => {
  const styles = useStyles();
  return <div css={styles.root}> teste </div>;
};

export default App;
