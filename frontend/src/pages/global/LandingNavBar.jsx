import { AppBar, IconButton, Toolbar } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

export default function LandingNavBar() {
  return (
    <div>
      <AppBar style={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar>
          <h1>MyPortal</h1>
          <IconButton>
            <SortIcon style={{ color: "#fff", fontSize: "2rem" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
