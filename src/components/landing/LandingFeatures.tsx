import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import {
    MoneyOff,
    School,
    LockReset,
    Upgrade,
    Devices,
    ArrowForward,
} from "@mui/icons-material";
import Feature from "../../assets/remember.jpg";
import { Link } from "react-router-dom";

const LandingFeatures = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                padding: 10,
            }}
        >
            <Box sx={{ textAlign: "center" }}>
                <h2>Our Features</h2>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
                <article
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                    }}
                >
                    <MoneyOff sx={{ color: theme.palette.primary.main }} />
                    <h3 style={{ color: theme.palette.primary.main }}>
                        100% Free
                    </h3>
                    <p>
                        Our app is completely free to use, you will not get any
                        kind of bill due to its use.
                    </p>
                </article>

                <article
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                    }}
                >
                    <School sx={{ color: theme.palette.primary.main }} />
                    <h3 style={{ color: theme.palette.primary.main }}>
                        Usable
                    </h3>
                    <p>
                        Our app is easy to use and easy to learn, so you will be
                        able to take advantage of it in no time.
                    </p>
                </article>
                <article
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                    }}
                >
                    <LockReset sx={{ color: theme.palette.primary.main }} />
                    <h3 style={{ color: theme.palette.primary.main }}>
                        Secure
                    </h3>
                    <p>
                        Our authentication method is based on the email you
                        provided when signing up, giving you absolute control on
                        the access to your account.
                    </p>
                </article>
                <article
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                    }}
                >
                    <Devices sx={{ color: theme.palette.primary.main }} />
                    <h3 style={{ color: theme.palette.primary.main }}>
                        Adaptable
                    </h3>
                    <p>
                        Our app is developed to be used whenever you need it, be
                        it on your phone, tablet or computer.
                    </p>
                </article>
                <article
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                    }}
                >
                    <Upgrade sx={{ color: theme.palette.primary.main }} />
                    <h3 style={{ color: theme.palette.primary.main }}>
                        Dynamic
                    </h3>
                    <p>
                        Our app is constantly being updated with new features to
                        bring the user more valuable features.
                    </p>
                </article>
            </Box>
            <Box sx={{ display: "flex", gap: 5 }}>
                <Container
                    sx={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "12px",
                    }}
                >
                    <img
                        src={Feature}
                        alt="Remember your tasks"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "12px",
                        }}
                    />
                </Container>
                <Container
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        Achieve success
                    </Typography>
                    <p>
                        Never again regret or be deprived of your goals and
                        dreams for not doing what you should have at the right
                        time. Say goodbye now to unfinished tasks, late bill
                        penalties, and outings never taken.
                    </p>
                    <Link to="/register">
                        <Button
                            variant="contained"
                            endIcon={<ArrowForward />}
                            sx={{ minWidth: "150px", maxWidth: "200px" }}
                        >
                            Start achieving your goals now.
                        </Button>
                    </Link>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingFeatures;
