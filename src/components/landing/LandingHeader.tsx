import Header from "../common/Header";
import { landingHeaderData } from "./LandingHeaderData";

const LandingHeader = () => {
    return (
        <>
            <Header headerOptions={landingHeaderData}></Header>
        </>
    );
};

export default LandingHeader;
