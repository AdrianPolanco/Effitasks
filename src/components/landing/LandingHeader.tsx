import { useContext } from "react";
import Header from "../common/Header";
import { AppContext } from "../contexts/AppContext";
import { landingHeaderData } from "./LandingHeaderData";

const LandingHeader = () => {
    const { theme } = useContext(AppContext);
    return (
        <>
            <Header
                headerOptions={landingHeaderData}
                toolbarStyles={{
                    backgroundColor: theme.palette.primary.light,
                }}
                logoColor={theme.palette.primary.main}
                appBarStyles={{ boxShadow: "none" }}
            ></Header>
        </>
    );
};

export default LandingHeader;
