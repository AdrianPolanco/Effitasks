import { AppBar, Box, Toolbar, Typography, SxProps } from "@mui/material";
import { TaskAlt } from "@mui/icons-material";
import { ReactNode, useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import BaseMenu from "./BaseMenu";

const BaseHeader = ({
    children,
    toolBarStyles,
    appBarStyles,
    logoColor,
}: {
    children?: ReactNode;
    toolBarStyles?: SxProps;
    appBarStyles?: SxProps;
    logoColor: string;
}) => {
    const { isMobile } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    return (
        <AppBar
            position="sticky"
            sx={{
                boxShadow: isMobile ? "none" : "0 2px 4px rgba(0, 0, 0, 0.1)",
                ...appBarStyles,
            }}
        >
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
                    <TaskAlt sx={{ color: logoColor ?? "#00cd98" }} />
                    <Typography
                        variant="h1"
                        sx={{
                            color: logoColor ?? "#00cd98",
                            fontSize: 32,
                            fontWeight: 600,
                        }}
                    >
                        EffiTasks
                    </Typography>
                </Box>

                <Box>
                    {isMobile ? (
                        <BaseMenu
                            open={open}
                            setOpen={setOpen}
                            color={logoColor}
                        >
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
