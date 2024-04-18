import React, { FunctionComponent, ReactNode } from "react";
import { AppProvider } from "../contexts/AppContext";
import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    Grid as MuiGrid,
    Paper,
    SvgIcon,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import SignUpHeader from "../signup/SignUpHeader";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Copyright from "../common/Copyright";
import { Link } from "react-router-dom";
import { AppMuiTheme } from "../../types/AppMuiTheme";
import { TextMuiTheme } from "../../types/TextMuiTheme";
import Header from "../common/Header";

type HeaderComponent = FunctionComponent<{}>;
type CopyrightComponent = FunctionComponent<{}>;

type BaseFormProps = {
    children: ReactNode;
    title: string;
    color: AppMuiTheme;
    headerComponent?: HeaderComponent;
    imageContainerComponent?: typeof MuiGrid;
    formIcon: typeof SvgIcon;
    copyrightComponent?: CopyrightComponent;
};
const BaseForm: FunctionComponent<BaseFormProps> = ({
    children,
    title,
    color,
    headerComponent: Header,
    imageContainerComponent: Grid,
    formIcon: Icon,
    copyrightComponent: Copyright,
}) => {
    return (
        <AppProvider>
            {Header && <Header />}
            <MuiGrid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                {Grid && <Grid />}
                <MuiGrid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: color }}>
                            {Icon && <Icon />}
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            {title}
                        </Typography>
                        {children}
                        {Copyright && <Copyright />}
                    </Box>
                </MuiGrid>
            </MuiGrid>
        </AppProvider>
    );
};

export default BaseForm;
