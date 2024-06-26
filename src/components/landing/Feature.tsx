import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { FeatureProps } from "../../types/FeatureProps";

const Feature = ({ title, details, icon: Icon }: FeatureProps) => {
    const { theme } = useContext(AppContext);
    return (
        <article
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
            }}
        >
            {Icon && <Icon sx={{ color: theme.palette.primary.main }} />}
            <h3 style={{ color: theme.palette.primary.main }}>{title}</h3>
            <p>{details}</p>
        </article>
    );
};

export default Feature;
