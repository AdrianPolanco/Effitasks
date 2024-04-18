import { Button, Grid, TextField, useTheme } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Link } from "react-router-dom";
import SignUpHeader from "../../components/signup/SignUpHeader";
import BaseForm from "../../components/base/BaseForm";
import CustomCopyright from "../../components/common/CustomCopyright";
import { ChangeEvent, FormEvent, useState } from "react";
import "react-phone-input-2/lib/style.css";
import {
    validateEmail,
    validateName,
    validateUsername,
} from "../../helpers/Validators";

const SignUp = () => {
    const theme = useTheme();
    const [values, setValues] = useState({
        username: {
            value: "",
            clicked: false,
            valid: false,
        },
        name: {
            value: "",
            clicked: false,
            valid: false,
        },
        email: {
            value: "",
            clicked: false,
            valid: false,
        },
    });
    const validateForm = () => {
        setValues({
            ...values,
            username: {
                ...values.username,
                valid: validateUsername(values.username.value),
            },
            name: { ...values.name, valid: validateName(values.name.value) },
            email: {
                ...values.email,
                valid: validateEmail(values.email.value),
            },
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Submitted");
    };

    return (
        <BaseForm
            title="Sign Up"
            color={{ color: "secondary.main" }}
            formIcon={<AppRegistrationIcon />}
            headerComponent={<SignUpHeader />}
            copyrightComponent={<CustomCopyright color="secondary" />}
            showBackgroundImage={true}
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
                error={values.username.clicked && !values.username.valid}
                helperText="Example: johnDoe5642"
                onFocus={() =>
                    setValues({
                        ...values,
                        username: { ...values.username, clicked: true },
                    })
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValues({
                        ...values,
                        username: {
                            ...values.username,
                            value: e.target.value,
                            valid: validateUsername(e.target.value),
                        },
                    })
                }
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label="Name"
                type="text"
                error={values.name.clicked && !values.name.valid}
                aria-required={true}
                id="name"
                color="secondary"
                helperText="Example: John Doe"
                onFocus={() =>
                    setValues({
                        ...values,
                        name: { ...values.name, clicked: true },
                    })
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValues({
                        ...values,
                        name: {
                            ...values.name,
                            value: e.target.value,
                            valid: validateName(e.target.value),
                        },
                    })
                }
            />

            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                error={values.email.clicked && !values.email.valid}
                label="Email Address"
                name="email"
                color="secondary"
                helperText="A valid email: johndoe@gmail.com"
                onFocus={() =>
                    setValues({
                        ...values,
                        email: { ...values.email, clicked: true },
                    })
                }
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setValues({
                        ...values,
                        email: {
                            ...values.email,
                            value: e.target.value,
                            valid: validateEmail(e.target.value),
                        },
                    })
                }
            />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                disabled={
                    values.username.valid &&
                    values.name.valid &&
                    values.email.valid
                        ? false
                        : true
                }
                sx={{
                    mt: 3,
                    mb: 2,
                    color: theme.palette.primary.contrastText,
                }}
                onClick={handleSubmit}
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
        </BaseForm>
    );
};

export default SignUp;
