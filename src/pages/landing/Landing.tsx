import { Box, ThemeProvider } from "@mui/material";
import "../../App.css";
import LandingHeader from "../../components/landing/LandingHeader";
import { mainTheme } from "../../features/themes/app/mainTheme";
import LandingHero from "../../components/landing/LandingHero";
import LandingFeatures from "../../components/landing/LandingFeatures";
import LandingFooter from "../../components/landing/LandingFooter";

const Landing = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <Box m={0}>
                <LandingHeader />
                <LandingHero />
                <LandingFeatures />
                <LandingFooter />
            </Box>
        </ThemeProvider>
    );
};

export default Landing;
