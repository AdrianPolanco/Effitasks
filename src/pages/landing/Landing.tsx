import { Box } from "@mui/material";
import "../../App.css";
import LandingHero from "../../components/landing/LandingHero";
import LandingFeatures from "../../components/landing/LandingFeatures";
import LandingFooter from "../../components/landing/LandingFooter";
import { LandingProvider } from "../../components/contexts/LandingContext";
import LandingHeader from "../../components/landing/LandingHeader";

const Landing = () => {
    return (
        <LandingProvider>
            <LandingHeader />
            <Box m={0}>
                <LandingHero />
                <LandingFeatures />
                <LandingFooter />
            </Box>
        </LandingProvider>
    );
};

export default Landing;
