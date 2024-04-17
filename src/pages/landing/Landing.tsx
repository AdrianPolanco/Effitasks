import { Box } from "@mui/material";
import "../../App.css";
import LandingHero from "../../components/landing/LandingHero";
import LandingFeatures from "../../components/landing/LandingFeatures";
import LandingFooter from "../../components/landing/LandingFooter";
import { AppProvider } from "../../components/contexts/AppContext";
import LandingHeader from "../../components/landing/LandingHeader";

const Landing = () => {
    return (
        <AppProvider>
            <LandingHeader />
            <Box m={0}>
                <LandingHero />
                <LandingFeatures />
                <LandingFooter />
            </Box>
        </AppProvider>
    );
};

export default Landing;
