import { Box, Button, Container, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Feature from "./Feature";
import FeatureImage from "../../assets/remember.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LandingContext } from "../contexts/LandingContext";
import { features } from "./FeaturesData";
import { Guid } from "guid-typescript";

const LandingFeatures = () => {
    const { isMobile, theme } = useContext(LandingContext);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: 10,
            }}
        >
            <Box
                sx={{ textAlign: "center", color: theme.palette.primary.main }}
            >
                <h2>Our Features</h2>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: isMobile ? 10 : 2,
                    flexDirection: isMobile ? "column" : "row",
                }}
            >
                {features.map((feature) => (
                    <Feature key={Guid.create().toString()} {...feature} />
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: 5,
                    flexDirection: isMobile ? "column" : "row",
                }}
            >
                <Container
                    sx={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "12px",
                    }}
                >
                    <img
                        src={FeatureImage}
                        alt="Remember your tasks"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "12px",
                        }}
                    />
                </Container>
                <Container
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        Achieve success
                    </Typography>
                    <p>
                        Never again regret or be deprived of your goals and
                        dreams for not doing what you should have at the right
                        time. Say goodbye now to unfinished tasks, late bill
                        penalties, and outings never taken.
                    </p>
                    <Link to="/register">
                        <Button
                            variant="contained"
                            endIcon={<ArrowForward />}
                            sx={{ minWidth: "150px", maxWidth: "200px" }}
                        >
                            Start achieving your goals now.
                        </Button>
                    </Link>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingFeatures;
