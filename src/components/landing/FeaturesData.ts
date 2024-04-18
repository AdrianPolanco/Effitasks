import {
    Devices,
    LockReset,
    MoneyOff,
    School,
    Upgrade,
} from "@mui/icons-material";
import { FeatureProps } from "../../types/FeatureProps";


export const features: FeatureProps[] = [
    {
        title: "100% Free",
        details:
            "Our app is completely free to use, you will not get any kind of bill due to its use.",
        icon: MoneyOff,
    },
    {
        title: "Usable",
        details:
            "Our app is easy to use and easy to learn, so you will be able to take advantage of it in no time.",
        icon: School,
    },
    {
        title: "Secure",
        details:
            "Our authentication method is based on the email you provided when signing up, giving you absolute control on the access to your account.",
        icon: LockReset,
    },
    {
        title: "Adaptable",
        details:
            " Our app is developed to be used whenever you need it, be it on your phone, tablet or computer.",
        icon: Devices,
    },
    {
        title: "Dynamic",
        details:
            "Our app is constantly being updated with new features to bring the user more valuable features.",
        icon: Upgrade,
    },
];
