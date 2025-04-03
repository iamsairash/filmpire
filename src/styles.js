import { styled } from "@mui/material/styles";

// export default makeStyles(() => ({
//   root: {
//     display: "flex",
//     height: "100%",
//     backgroundColor: "yellow",
//   },
// }));// this is outdated

export const Root = styled("div")(({ theme }) => ({
  display: "flex",
  height: "100%",
  padding: theme.spacing(2),
}));

export const Toolbar = styled("div")(() => ({
  height: "70px",
}));

export const Content = styled("div")(() => ({
  flexGrow: "1",
  padding: "2em",
}));
