import { Grid, Typography } from "@mui/material";
import React from "react";

export function Knowledge() {
  const tecnologies = [
    '## "node": "12.18.3"',
    '## "npm": "6.14.6"',
    '## "axios": "1.2.0"',
    '## "express": "4.18.2"',
    '## "sequelize": "6.25.8"',
    '## "react": "17.0.2"',
    '## "redux": "4.0.5"',
    "## JavaScript ECMASript 6",
    "## Visual Studio Code",
    "## pgAdmin4",
    "## Postman",
    "## Bash",
    "## Zsh",
    "## Material UI",
    "## Vercel",
    "## Railway",
    "## Dbeaver",
    "## Java",
    "## Eclipse IDE",
    "## InteliJ IDE",
    "## GIT",
    "## GitHub",
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      paddingTop={3}
      // spacing={4}
    >
      <Grid item>
        <Typography
          fontFamily="monospace"
          fontWeight="bold"
          sx={{
            typography: { xs: "h4", sm: "h3" },
          }}
        >
          Knowledge
        </Typography>
      </Grid>

      <Grid item>
        {tecnologies.map((element) => (
          <Typography variant="h6" fontWeight="bold" fontFamily="monospace">
            {element}
          </Typography>
        ))}
      </Grid>

      <Grid item></Grid>

      <Grid item></Grid>
    </Grid>
  );
}
