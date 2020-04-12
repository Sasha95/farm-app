import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStylesTable = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: 10,
      paddingRight: 10
    },
  }),
);