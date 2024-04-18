import { Typography } from "@mui/material";
import { AppMuiTheme } from "../../types/AppMuiTheme";

function CustomCopyright({ color }: AppMuiTheme) {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            Copyright ©
            <Typography color={color} variant="h6">
                Effitasks
            </Typography>
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default CustomCopyright;
