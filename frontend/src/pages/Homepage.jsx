import "../styles/homepageStyles.css";
import { CssBaseline } from "@mui/material";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Homepage() {
  return (
    <div className="landing">
      <CssBaseline />
      <Header />
      <Main />
    </div>
  );
}
