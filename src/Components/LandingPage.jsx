import {
  BottomNavigation,
  BottomNavigationAction,
  Card,
  CardContent,
  Grid,
  Paper,
  Switch,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CodeIcon from "@mui/icons-material/Code";
import InfoIcon from "@mui/icons-material/Info";
import HardwareIcon from "@mui/icons-material/Hardware";
import { Information } from "./Information";
import { useTheme } from "@mui/material/styles";
import { DoneProjects } from "./DoneProjects";
import { WorkingProjects } from "./WorkingProjects";
import { Knowledge } from "./Knowledge";

export function LandingPage({ mode, setMode }) {
  const [checked, setChecked] = useState(true);

  const [currentPage, setCurrentPage] = React.useState(<Information />);

  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleClick = (element) => {
    // element.preventDefault()
    console.log(element);
    setCurrentPage(element);
  };

  const theme = useTheme();

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <Paper
      sx={{
        minHeight: "100vh",
      }}
      xs={12}
    >
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={1}
        // spacing={4}
        xs={12}
      >
        <Grid item paddingTop={4} paddingBottom={4}>
          <Brightness7Icon />
          <Switch checked={checked} onChange={handleChange} />
          <Brightness4Icon />
        </Grid>

        <Grid item paddingBottom={10} xs={12}>
          <Card
            variant="outlined"
            sx={{
              backgroundColor: theme.palette.mode === "light" && "#eeeeee",
              // width: '100vw'
            }}
          >
            <CardContent>{currentPage}</CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <ins
            class="adsbygoogle"
            style={{ display: "block", width: "400px" }}
            data-ad-client="ca-pub-1213560966666293"
            data-ad-slot="1577681603"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </Grid>

        <Grid item xs={12}>
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                label="Info"
                icon={<InfoIcon />}
                onClick={() => handleClick(<Information />)}
              />

              <BottomNavigationAction
                label="Done projects"
                icon={<DoneAllIcon />}
                onClick={() => handleClick(<DoneProjects />)}
              />

              {/* <BottomNavigationAction
                label="Working projects"
                icon={<HardwareIcon />}
                onClick={() => handleClick(<WorkingProjects />)}
              /> */}

              <BottomNavigationAction
                label="Knowledge"
                icon={<CodeIcon />}
                onClick={() => handleClick(<Knowledge />)}
              />
            </BottomNavigation>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}
