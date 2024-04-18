import { SxProps } from "@mui/material";
import { HeaderOptions } from "./HeaderOptions";

export type HeaderProps = {
    headerOptions: HeaderOptions[];
    toolbarStyles?: SxProps;
    appBarStyles?: SxProps;
    logoColor: string;
};
