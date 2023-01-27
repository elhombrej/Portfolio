import { Grid, Typography } from "@mui/material";
import React from "react";

export function WorkingProjects() {
    return (
        <Grid
            container
            direction='column'
            justifyContent="flex-start"
            alignItems="center"
            paddingTop={3}
            spacing={4}
        >
            <Grid
                item
            >
                <Typography
                    variant='h3'
                    fontFamily='monospace'
                    fontWeight='bold'
                >
                    Working projects
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
                    </Grid>

                    <Grid
                        item
                    >
                        <Typography
                            variant='h5'
                            fontFamily='monospace'
                            fontWeight='bold'
                        >
                            Nothing here yet
                        </Typography>
                    </Grid>


                </Grid>
            </Grid>

        </Grid>
    )
};