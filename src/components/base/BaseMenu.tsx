import { IconButton, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Fragment } from "react";
import { MenuWrapperProps } from "../../types/MenyWrapperProps";

/**/

const BaseMenu = ({ children, open, setOpen, color }: MenuWrapperProps) => {
    return (
        <Fragment>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                onClick={() => setOpen(!open)}
            >
                <MenuIcon sx={{ color }} />
            </IconButton>
            <Menu
                id="mobile-positioned-menu"
                aria-labelledby="mobile-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                {children}
            </Menu>
        </Fragment>
    );
};

export default BaseMenu;
