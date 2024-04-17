import BaseHeader from "../base/BaseHeader";
import { Link as Router } from "react-router-dom";
import { Box, Button, MenuItem } from "@mui/material";
import { useContext } from "react";
import { LandingContext } from "../contexts/LandingContext";
import { Guid } from "guid-typescript";

export type HeaderOptions = {
    title: string;
    path: string;
    important: boolean;
};

const Header = ({ headerOptions }: { headerOptions: HeaderOptions[] }) => {
    const { isMobile, theme } = useContext(LandingContext);

    return (
        <BaseHeader
            toolBarStyles={{
                backgroundColor: theme.palette.primary.light,
            }}
            appBarStyles={{ boxShadow: "none" }}
        >
            {isMobile ? (
                headerOptions?.map((option) => (
                    <MenuItem key={Guid.create().toString()}>
                        <Router
                            to={option.path}
                            style={{
                                textDecoration: "none",
                                color: option.important
                                    ? theme.palette.primary.main
                                    : theme.palette.primary.contrastText,
                            }}
                        >
                            {option.title}
                        </Router>
                    </MenuItem>
                ))
            ) : (
                <Box
                    sx={{
                        display: "flex",
                    }}
                    gap={2}
                >
                    {headerOptions?.map((option) => (
                        <Router
                            key={Guid.create().toString()}
                            to={option.path}
                            style={{
                                textDecoration: "none",
                                color: option.important
                                    ? theme.palette.primary.main
                                    : theme.palette.primary.contrastText,
                            }}
                        >
                            <Button
                                sx={{
                                    fontWeight: 500,
                                }}
                                variant={
                                    option.important ? "contained" : "outlined"
                                }
                            >
                                {option.title}
                            </Button>
                        </Router>
                    ))}
                </Box>
            )}
        </BaseHeader>
    );
};

export default Header;
