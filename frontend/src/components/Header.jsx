import { useState, useEffect } from "react";

import "../styles/homepageStyles.css";
import { AppBar, IconButton, Toolbar, Collapse } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link as Scroll } from "react-scroll";

export default function Header() {
  const [logoAnimation, setLogoAnimation] = useState(false);

  useEffect(() => {
    setLogoAnimation(true);
  }, []);
  return (
    <div
      id="header"
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar style={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar style={{ width: "80%", margin: "0 auto" }}>
          <h1 style={{ flexGrow: "1" }}>
            Space<span style={{ color: "#da98f8" }}>Station</span>.
          </h1>
          <div>
            <IconButton>
              <SortIcon style={{ color: "#fff", fontSize: "2rem" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Collapse
        in={logoAnimation}
        {...(logoAnimation ? { timeout: 1000 } : {})}
        collapseheight={50}
      >
        <div>
          <h1 style={{ fontSize: "4rem", textAlign: "center", color: "#fff" }}>
            Welcome to Space <span style={{ color: "#da98f8" }}>Station</span>.
            <br />
            <Scroll to="main" smooth={true}>
              <IconButton>
                <KeyboardDoubleArrowDownIcon
                  style={{ color: "#fff", fontSize: "2rem" }}
                />
              </IconButton>
            </Scroll>
          </h1>
        </div>
      </Collapse>
    </div>
  );
}
