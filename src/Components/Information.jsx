import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

export function Information() {
  const gitHubImage = "https://avatars.githubusercontent.com/u/94816708?v=4";

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingTop={4}
      spacing={4}
    >
      <Grid item>
        <a href="https://github.com/elhombrej">
          <Avatar
            src={gitHubImage}
            alt="lazy loading"
            sx={{
              width: 200,
              height: 200,
            }}
          />
        </a>
      </Grid>

      <Grid item>
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h3", md: "h2", lg: "h2" },
          }}
          fontWeight="bold"
        >
          Joaquin Padron
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          fontWeight="bold"
          component="h1"
          sx={{
            typography: { xs: "h6", sm: "h4", md: "h4", lg: "h4" },
          }}
        >
          Web developer
        </Typography>
      </Grid>

      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingTop={3}
          spacing={4}
        >
          <Grid item>
            <a href="mailto:Joaquinpadron@outlook.com?subject=Me&body=Hello Joaquin!">
              <Typography
                sx={{
                  typography: { xs: "body2", sm: "h6", md: "h6" },
                }}
              >
                Joaquinpadron@outlook.com
              </Typography>
            </a>
          </Grid>

          <Grid item>
            <a href="https://www.linkedin.com/in/joaqu%C3%ADn-padr%C3%B3n-4b883b138">
              <Typography
                sx={{
                  typography: { xs: "body2", sm: "h6", md: "h6" },
                }}
              >
                LinkedIn
              </Typography>
            </a>
          </Grid>

          <Grid item>
            <Typography
              sx={{
                typography: { xs: "body2", sm: "h6", md: "h6" },
              }}
              // color='#388e3c'
            >
              WhatsApp (+54)1138531167
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
