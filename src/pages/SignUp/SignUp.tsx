import {
    Avatar,
    Box,
    Button,
    Checkbox,
    CssBaseline,
    FormControlLabel,
    Grid,
    Paper,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import SignUpHeader from "../../components/signup/SignUpHeader";
import { AppProvider } from "../../components/contexts/AppContext";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            Copyright ©
            <Typography color="secondary" variant="h6">
                Effitasks
            </Typography>
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const SignUp = () => {
    const theme = useTheme();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };
    return (
        <AppProvider>
            <SignUpHeader />
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
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
                <Grid
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
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="username"
                                label="Username"
                                type="text"
                                aria-required={true}
                                id="username"
                                color="secondary"
                                autoComplete="username"
                                helperText="Example: johnDoe5642"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="name"
                                label="Name"
                                type="text"
                                aria-required={true}
                                id="name"
                                color="secondary"
                                autoComplete="name"
                                helperText="Example: John Doe"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                color="secondary"
                                autoFocus
                                helperText="A valid email: johndoe@gmail.com"
                            />

                            <TextField
                                margin="normal"
                                fullWidth
                                id="phone"
                                label="Phone number"
                                name="phone"
                                autoComplete="phone"
                                color="secondary"
                                autoFocus
                                helperText="A phone number: +18297486987"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    color: theme.palette.primary.contrastText,
                                }}
                            >
                                Sign Up
                            </Button>
                            <Grid
                                container
                                sx={{
                                    marginTop: 5,
                                }}
                            >
                                <Grid item sx={{ marginBottom: 5 }}>
                                    <Link
                                        to="/login"
                                        style={{
                                            color: theme.palette.secondary.main,
                                        }}
                                    >
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </AppProvider>
    );
};

export default SignUp;
