import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

export function Main() {

    const gitHubImage = "https://avatars.githubusercontent.com/u/94816708?v=4";

    return (
        <Grid
            container
            direction='column'
            justifyContent="center"
            alignItems="center"
            paddingTop={4}
            spacing={4}
            minHeight='600px'
        >
            <Grid
                item
            >
                <a href="https://github.com/elhombrej">

                    <Avatar
                        src={gitHubImage}
                        alt='lazy loading'
                        sx={{
                            width: 200,
                            height: 200,
                        }}
                    />
                </a>
            </Grid>

            <Grid
                item
            >
                <Typography
                    variant='h1'
                    component='h1'
                    fontWeight='bold'
                    fontFamily='monospace'
                >
                    Joaquin Padron
                </Typography>
            </Grid>

            <Grid
                item
            >
                <Typography
                    variant='h5'
                    fontWeight='bold'
                    fontFamily='monospace'
                >
                    Web developer
                </Typography>
            </Grid>

            <Grid
                item
            >

                <Grid
                    container
                    direction='row'
                    justifyContent="center"
                    alignItems="center"
                    paddingTop={3}
                    spacing={4}
                >

                    <Grid
                        item
                    >

                        <a href='mailto:Joaquinpadron@outlook.com?subject=Me&body=Hello Joaquin!'>
                            <Typography
                                variant='h6'
                                fontFamily='monospace'
                            >
                                Joaquinpadron@outlook.com
                            </Typography>
                        </a>

                    </Grid>

                    <Grid
                        item
                    >

                        <a href='https://www.linkedin.com/in/joaqu%C3%ADn-padr%C3%B3n-4b883b138'>
                            <Typography
                                variant='h6'
                                fontFamily='monospace'
                            >
                                LinkedIn
                            </Typography>
                        </a>

                    </Grid>

                    <Grid
                        item
                    >
                        <Typography
                            variant='h6'
                            fontFamily='monospace'
                        >
                            WhatsApp (+54)1138531167
                        </Typography>

                    </Grid>

                </Grid>

            </Grid>

        </Grid>
    )
};