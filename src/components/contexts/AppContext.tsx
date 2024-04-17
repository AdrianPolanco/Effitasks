import { Theme, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { ReactNode, createContext } from "react";
import { mainTheme } from "../../features/themes/app/mainTheme";

export const AppContext = createContext<AppContextType>({
    isMobile: false,
    theme: mainTheme,
});
type AppContextType = {
    isMobile: boolean;
    theme: Theme;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <AppContext.Provider value={{ isMobile: matches, theme }}>
            {children}
        </AppContext.Provider>
    );
};
