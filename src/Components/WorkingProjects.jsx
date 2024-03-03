import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import coworkingProjectPhoto from "../Images/coworkingProjectPhoto.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import rutaDirecta from "../Images/rutaDirecta.png";

export function WorkingProjects() {
  const cardInfo = [
    {
      image: coworkingProjectPhoto,
      title: "Coworking medical companion",
      description:
        "Individual project developed on Material UI, Redux and React JavaScript and PostgreSQL.",
      gitHubButton: "https://github.com/elhombrej/Coworking-medical-companion",
      webSiteButton: "https://devex-video.vercel.app",
    },
    {
      image: rutaDirecta,
      title: "Ruta Directa",
      description:
        "Web App of geolocalization and map routing with React, Material UI, Ant Design and TomTom API.",
      gitHubButton: "",
      webSiteButton: "https://ruta-directa.vercel.app",
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      paddingTop={3}
      spacing={4}
    >
      <Grid item>
        <Typography
          sx={{
            typography: { xs: "h4", sm: "h3" },
          }}
          fontFamily="monospace"
          fontWeight="bold"
        >
          Working projects
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
          {cardInfo.map((element) => (
            <Grid item>
              <Card
                sx={{
                  maxWidth: 300,
                  minHeight: 400,
                }}
              >
                <CardMedia
                  loading="lazy"
                  component="img"
                  alt={element.title}
                  height="140"
                  image={element.image}
                />
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontFamily="monospace"
                      >
                        {element.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        fontFamily="monospace"
                      >
                        {element.description}
                      </Typography>
                    </CardContent>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      sx={{
                        direction: "row",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                      }}
                      spacing={5}
                    >
                      {element.gitHubButton !== "" && (
                        <Grid item>
                          <a href={element.gitHubButton}>
                            <GitHubIcon
                              sx={{
                                fontSize: 40,
                              }}
                            />
                          </a>
                        </Grid>
                      )}

                      {element.webSiteButton !== "" && (
                        <Grid item>
                          <a href={element.webSiteButton}>
                            <LaunchIcon
                              sx={{
                                fontSize: 40,
                              }}
                            />
                          </a>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
