import BaseHeader from "../base/BaseHeader";
import { Link as Router } from "react-router-dom";
import { Box, Button, MenuItem, SxProps } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Guid } from "guid-typescript";
import { HeaderOptions } from "../../types/HeaderOptions";

const Header = ({
    headerOptions,
    toolbarStyles,
    appBarStyles,
    logoColor,
}: {
    headerOptions: HeaderOptions[];
    toolbarStyles?: SxProps;
    appBarStyles?: SxProps;
    logoColor: string;
}) => {
    const { isMobile, theme } = useContext(AppContext);

    return (
        <BaseHeader
            toolBarStyles={toolbarStyles}
            appBarStyles={appBarStyles}
            logoColor={logoColor}
        >
            {isMobile ? (
                headerOptions?.map((option) => (
                    <MenuItem key={Guid.create().toString()}>
                        <Router
                            to={option.path}
                            style={{
                                textDecoration: "none",
                                color: option.important
                                    ? logoColor
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
                                    ? logoColor
                                    : theme.palette.primary.contrastText,
                            }}
                        >
                            <Button
                                sx={{
                                    fontWeight: 500,
                                    backgroundColor: option.important
                                        ? logoColor
                                        : "transparent",
                                    color: option.important
                                        ? theme.palette.primary.contrastText
                                        : logoColor,
                                    borderColor: logoColor,
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
