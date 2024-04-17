import { AppBar, Box, Toolbar, Typography, SxProps } from "@mui/material";
import { TaskAlt } from "@mui/icons-material";
import { ReactNode, useContext, useState } from "react";
import { LandingContext } from "../contexts/LandingContext";
import BaseMenu from "./BaseMenu";

const BaseHeader = ({
    children,
    toolBarStyles,
    appBarStyles,
}: {
    children?: ReactNode;
    toolBarStyles?: SxProps;
    appBarStyles?: SxProps;
}) => {
    const { isMobile } = useContext(LandingContext);
    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky" sx={{ ...appBarStyles }}>
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    ...toolBarStyles,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center",
                    }}
                >
                    <TaskAlt sx={{ color: "#00cd98" }} />
                    <Typography
                        variant="h1"
                        sx={{ color: "#00cd98", fontSize: 32, fontWeight: 600 }}
                    >
                        EffiTasks
                    </Typography>
                </Box>

                <Box>
                    {isMobile ? (
                        <BaseMenu open={open} setOpen={setOpen}>
                            {children}
                        </BaseMenu>
                    ) : (
                        children
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default BaseHeader;
