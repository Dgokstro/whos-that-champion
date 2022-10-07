import { css, useTheme } from "@emotion/react";

export const useStyles = () => {
  const theme = useTheme();
  return {
    root: css({
      display: "flex",
      color: theme.colors.primary.main,
    }),
  };
};

export default useStyles;
