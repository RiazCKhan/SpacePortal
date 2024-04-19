import "../../styles/homepageStyles.css";
import { CssBaseline } from "@mui/material";
import LandingNavBar from "../global/LandingNavBar";

export default function Homepage() {
  return (
    <div className="landing">
      <CssBaseline />
      <LandingNavBar />
    </div>
  );
}
