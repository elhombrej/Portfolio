import { Grid, Typography } from "@mui/material";
import React from "react";

export function Knowledge() {
  const tecnologies = [
    "- FrontEnd",
    "- Backend",
    "- Node.js",
    "- HTML",
    "- CSS",
    "- NPM",
    "- Express",
    "- Sequelize",
    "- React",
    "- Redux",
    "- JavaScript",
    "- TypeScript",
    "- SQL",
    "- Postman",
    "- Bash",
    "- Zsh",
    "- Mobile Development",
    "- Material UI",
    "- Ant Design",
    "- Vercel",
    "- Railway",
    "- Microsoft Azure",
    "- Java",
    "- Eclipse IDE",
    "- InteliJ IDE",
    "- GIT",
    "- GitHub",
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
    </Grid>
  );
}
