import { useContext } from "react";
import Header from "../common/Header";
import { signUpHeaderData } from "./SignUpHeaderData";
import { AppContext } from "../contexts/AppContext";

const SignUpHeader = () => {
    const { theme } = useContext(AppContext);
    return (
        <>
            <Header
                headerOptions={signUpHeaderData}
                appBarStyles={{ backgroundColor: "white" }}
                toolbarStyles={{ boxShadow: "none" }}
                logoColor={theme.palette.secondary.main}
            />
        </>
    );
};

export default SignUpHeader;
