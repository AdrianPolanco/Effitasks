import { AppBar, Box, Toolbar, Typography, SxProps } from "@mui/material";
import { TaskAlt } from "@mui/icons-material";
import { ReactNode } from "react";

const BaseHeader = ({
    children,
    toolBarStyles,
    appBarStyles,
}: {
    children?: ReactNode;
    toolBarStyles?: SxProps;
    appBarStyles?: SxProps;
}) => {
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
                {children}
            </Toolbar>
        </AppBar>
    );
};

export default BaseHeader;
