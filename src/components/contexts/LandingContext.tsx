import { Theme, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { ReactNode, createContext } from "react";
import { mainTheme } from "../../features/themes/app/mainTheme";

export const LandingContext = createContext<LandingContextType>({
    isMobile: false,
    theme: mainTheme,
});
type LandingContextType = {
    isMobile: boolean;
    theme: Theme;
};

export const LandingProvider = ({ children }: { children: ReactNode }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <LandingContext.Provider value={{ isMobile: matches, theme }}>
            {children}
        </LandingContext.Provider>
    );
};
