import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import sleepTrackerPhoto from "../Images/sleepTrackerPhoto.png";
import pokemonProjectPhoto from "../Images/pokemonProjectPhoto.png";
import candyShopInterfacePhoto from "../Images/candyShopInterfacePhoto.png";
import candyShopTerminalPhoto from "../Images/candyShopTerminalPhoto.png";
import elMapachePodasPhoto from "../Images/elMapachePodasPhoto.png";
import tekneDataBot from "../Images/tekneDataBot.png";
import reginaPortfolio from "../Images/reginaPortfolio.png";
import rutaDirecta from "../Images/rutaDirecta.png";
import portfolioPhoto from "../Images/portfolioPhoto.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import devexPhoto from "../Images/devexPhoto.png";
import piwoProjectPhoto from "../Images/piwoProjectPhoto.png";
import cultivoInterparkProjectPhoto from "../Images/cultivoInterparkProjectPhoto.png";
import flannerProjectPhoto from "../Images/flannerProjectPhoto.png";

export function DoneProjects() {
  const cardInfo = [
    {
      image: piwoProjectPhoto,
      title: "Piwo Helados Page",
      description:
        "Web page developed business purposes with React and Material UI.",
      gitHubButton: "",
      webSiteButton: "https://piwohelados.com",
    },
    {
      image: cultivoInterparkProjectPhoto,
      title: "Cultivo Interpark Page",
      description:
        "Web page developed for business purposes with React and Material UI.",
      gitHubButton: "",
      webSiteButton: "https://cultivointerpark.com.ar",
    },
    {
      image: flannerProjectPhoto,
      title: "Flanner App",
      description: "Web app developed with Ionic available in Ios and Android.",
      gitHubButton: "",
      webSiteButton: "https://flanner.vercel.app",
    },
    {
      image: tekneDataBot,
      title: "Tekne Data Bot",
      description:
        "Web page developed for business purposes with React, Material UI, Ant Design and OpenAI API.",
      gitHubButton: "",
      webSiteButton: "https://tekne-data-labs.vercel.app",
    },
    {
      image: reginaPortfolio,
      title: "Regina Padron Portfolio",
      description: "Portfolio developed with plain HTML.",
      gitHubButton: "https://github.com/elhombrej/lanenaweb.git",
      webSiteButton: "https://reginapadron.vercel.app",
    },
    {
      image: rutaDirecta,
      title: "Ruta Directa",
      description:
        "Web App of geolocalization and map routing with React, Material UI, Ant Design and TomTom API.",
      gitHubButton: "",
      webSiteButton: "https://ruta-directa.vercel.app",
    },
    {
      image: elMapachePodasPhoto,
      title: "El mapache podas",
      description:
        "Web page developed for tree pruning business with React, Material UI and React reveal.",
      gitHubButton: "https://github.com/elhombrej/PodasEnAltura.git",
      webSiteButton: "https://el-mapache-podas.vercel.app",
    },
    {
      image: devexPhoto,
      title: "DEVEX",
      description:
        "Individual project developed on Material UI and React JavaScript for media bussiness.",
      gitHubButton: "https://github.com/elhombrej/DEVEX.git",
      webSiteButton: "https://devex-video.vercel.app",
    },
    {
      image: pokemonProjectPhoto,
      title: "Pokemon project",
      description:
        "Individual project developed on plain CSS, Redux and React JavaScript, using pokemon API and PostgreSQL.",
      gitHubButton: "https://github.com/elhombrej/Pokemon-project.git",
      webSiteButton: "https://pi-pokemon-main-one.vercel.app",
    },
    {
      image: sleepTrackerPhoto,
      title: "Sleep tracker",
      description:
        "Groupal project developed on Material UI, Redux and React JavaScript, using FitBit API and PostgreSQL.",
      gitHubButton: "https://github.com/elhombrej/sleep-tracker.git",
      webSiteButton: "https://sleep-tracker-two.vercel.app",
    },
    {
      image: candyShopInterfacePhoto,
      title: "Candy shop interface",
      description: "Groupal project developed on Java and Java Swing.",
      gitHubButton: "https://github.com/elhombrej/CandyShopInterface.git",
      webSiteButton: "",
    },
    {
      image: candyShopTerminalPhoto,
      title: "Candy shop terminal",
      description: "Individual project developed on plain Java.",
      gitHubButton: "https://github.com/elhombrej/CandyShopTerminal.git",
      webSiteButton: "",
    },
    {
      image: portfolioPhoto,
      title: "This portfolio",
      description: "Portfolio developed with React and Material UI.",
      gitHubButton: "https://github.com/elhombrej/Portfolio.git",
      webSiteButton: "",
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      paddingTop={3}
      spacing={4}
      sx={{ maxWidth: { sm: "70vw", xs: "100vw" } }}
    >
      <Grid item>
        <Typography
          sx={{
            typography: { xs: "h4", sm: "h3" },
          }}
          fontFamily="monospace"
          fontWeight="bold"
        >
          Done projects
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
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={element.gitHubButton}
                          >
                            <GitHubIcon
                              sx={{
                                fontSize: 40,
                                // marginRight: 3
                              }}
                            />
                          </a>
                        </Grid>
                      )}

                      {element.webSiteButton !== "" && (
                        <Grid item>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={element.webSiteButton}
                          >
                            <LaunchIcon
                              sx={{
                                fontSize: 40,
                                // marginLeft: 3
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
