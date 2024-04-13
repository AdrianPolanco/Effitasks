import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Designing from "../../assets/designing.jpg";
import Planning from "../../assets/planning.jpg";
import { Link } from "react-router-dom";

const LandingHero = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Container sx={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h3" align="center">
                        Manage your tasks and duties efficiently with Effitasks!
                    </Typography>
                    <Typography variant="h5" align="center">
                        Reach your goals and stay organized with Effitasks!
                    </Typography>

                    <Link to="/register">
                        <Button
                            variant="contained"
                            endIcon={<ArrowForward />}
                            sx={{ minWidth: "150px", maxWidth: "200px" }}
                        >
                            Get Started Now
                        </Button>
                    </Link>
                </Box>

                <Container
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 0,
                        gridTemplateRows: "auto",
                        gridTemplateAreas: `"image1 image1 image1 void1"
                                            "void2 image2 image2 image2"`,
                        borderRadius: "12px",
                    }}
                    disableGutters
                >
                    <Container
                        sx={{
                            maxWidth: "300px",
                            maxHeight: "300px",
                            gridArea: "image1",
                        }}
                        disableGutters
                    >
                        <img
                            src={Planning}
                            alt="Planning"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "12px 0px 0px 0px",
                            }}
                        />
                    </Container>
                    <Container
                        sx={{
                            //background: theme.palette.primary.dark,
                            borderRadius: "0px 12px  0px 0px",
                            gridArea: "void1",
                        }}
                        disableGutters
                    ></Container>
                    <Container
                        sx={{
                            //background: theme.palette.secondary.dark,
                            borderRadius: "0px 0px  0px 12px",
                            grid: "void2",
                        }}
                        disableGutters
                    ></Container>
                    <Container
                        sx={{
                            padding: 0,

                            gridArea: "image2",
                        }}
                        disableGutters
                    >
                        <img
                            src={Designing}
                            alt="Designing"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "0px 0px 12px 0px",
                            }}
                        />
                    </Container>
                </Container>
            </Container>
        </Box>
    );
};

export default LandingHero;
