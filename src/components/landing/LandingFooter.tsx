import { useTheme } from "@mui/material";
import React from "react";

const LandingFooter = () => {
    const theme = useTheme();
    return (
        <footer
            style={{
                textAlign: "center",
                backgroundColor: theme.palette.primary.main,
                padding: "10px",
            }}
        >
            Effitasks © {new Date().getFullYear()}
        </footer>
    );
};

export default LandingFooter;
