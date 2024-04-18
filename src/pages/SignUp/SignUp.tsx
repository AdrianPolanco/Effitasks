import { Button, Grid, TextField, useTheme } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import SignUpHeader from "../../components/signup/SignUpHeader";
import BaseForm from "../../components/base/BaseForm";
import CustomCopyright from "../../components/common/CustomCopyright";

const SignUp = () => {
    const theme = useTheme();

    return (
        <BaseForm
            title="Sign Up"
            color={{ color: "secondary.main" }}
            formIcon={<LockOutlinedIcon />}
            headerComponent={<SignUpHeader />}
            copyrightComponent={<CustomCopyright color="secondary" />}
            showBackgroundImage={true}
        >
            {/*<SignUpHeader />
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
                />*/}

            {/*<LockOutlinedIcon />*/}

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
            {/* <Copyright />*/}
        </BaseForm>
    );
};

export default SignUp;
