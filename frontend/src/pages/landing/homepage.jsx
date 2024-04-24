import { useState, useEffect } from "react";

import "../../styles/homepageStyles.css";
import {
  AppBar,
  IconButton,
  Toolbar,
  Collapse,
  CssBaseline,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Homepage() {
  const [logoAnimation, setLogoAnimation] = useState(false);

  useEffect(() => {
    setLogoAnimation(true);
  }, []);

  return (
    <div className="landing">
      <CssBaseline />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppBar style={{ background: "transparent", boxShadow: "none" }}>
          <Toolbar style={{ width: "80%", margin: "0 auto" }}>
            <h1 style={{ flexGrow: "1" }}>
              JustFor<span style={{ color: "#256D1B" }}>Today.</span>
            </h1>
            <IconButton>
              <SortIcon style={{ color: "#fff", fontSize: "2rem" }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Collapse
          in={logoAnimation}
          {...(logoAnimation ? { timeout: 1000 } : {})}
          collapseHeight={50}
        >
          <div>
            <h1
              style={{ fontSize: "3rem", textAlign: "center", color: "#fff" }}
            >
              JustFor<span style={{ color: "#256D1B" }}>Today.</span>
              <br />
              Harm Reduction
              <br />
              <IconButton>
                <KeyboardDoubleArrowDownIcon
                  style={{ color: "#256D1B", fontSize: "2rem" }}
                />
              </IconButton>
            </h1>
          </div>
        </Collapse>
      </div>
      ;
    </div>
  );
}
