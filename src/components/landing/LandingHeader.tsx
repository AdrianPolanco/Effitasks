import BaseHeader from "../base/BaseHeader";
import { useTheme } from "@mui/material/styles";
import { Link as Router } from "react-router-dom";
import { Box, Button } from "@mui/material";

const LandingHeader = () => {
    const theme = useTheme();
    return (
        <BaseHeader
            toolBarStyles={{
                backgroundColor: theme.palette.primary.light,
            }}
            appBarStyles={{ boxShadow: "none" }}
        >
            <Box
                sx={{
                    display: "flex",
                }}
                gap={2}
            >
                <Router to="/login" style={{ textDecoration: "none" }}>
                    <Button
                        sx={{
                            fontWeight: 500,
                        }}
                        variant="outlined"
                    >
                        Sign In
                    </Button>
                </Router>
                <Router to="/register" style={{ textDecoration: "none" }}>
                    <Button
                        sx={{
                            fontWeight: 500,
                        }}
                        variant="contained"
                    >
                        {" "}
                        Sign Up
                    </Button>
                </Router>
            </Box>
        </BaseHeader>
    );
};

export default LandingHeader;
