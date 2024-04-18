import { FunctionComponent, ReactElement, ReactNode } from "react";
import { AppProvider } from "../contexts/AppContext";
import {
    Avatar,
    Box,
    CssBaseline,
    Grid as MuiGrid,
    Paper,
    Typography,
} from "@mui/material";
import { AppMuiTheme } from "../../types/AppMuiTheme";

type BaseFormProps = {
    children: ReactNode;
    title: string;
    color: AppMuiTheme;
    headerComponent?: ReactElement;
    showBackgroundImage?: boolean;
    formIcon: ReactElement;
    copyrightComponent?: ReactElement<AppMuiTheme>;
};
const BaseForm: FunctionComponent<BaseFormProps> = ({
    children,
    showBackgroundImage,
    title,
    color,
    headerComponent: Header,
    formIcon: Icon,
    copyrightComponent: Copyright,
}) => {
    return (
        <AppProvider>
            {Header && Header}
            <MuiGrid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                {showBackgroundImage && (
                    <MuiGrid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage:
                                "url(https://source.unsplash.com/random?wallpapers)",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                )}
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
                        <Avatar sx={{ m: 1, bgcolor: color.color }}>
                            {Icon && Icon}
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            {title}
                        </Typography>
                        {children}
                        {Copyright && Copyright}
                    </Box>
                </MuiGrid>
            </MuiGrid>
        </AppProvider>
    );
};

export default BaseForm;
