import React from "react";
import { ClockIcon } from "../../assets/svg/clockIcon";
import { MailIcon } from "../../assets/svg/mailIcon";
import { PhoneIcon } from "../../assets/svg/phoneIcon";
import { WebIcon } from "../../assets/svg/webIcon";
import { LocationIcon } from "../../assets/svg/locationIcon";

export const legalData = [
    {
        icon: <MailIcon />,
        title: "Email:",
        info: "germanembassy@info.com"
    },
    {
        icon: <PhoneIcon />,
        title: "Phone:",
        info: "+994 12 465 41 00"
    },
    {
        icon: <PhoneIcon />,
        title: "Phone:",
        info: "+994 12 465 41 28"
    },
    {
        icon: "",
        title: "Opening hours:",
        info: "Mon.-Thu. 5 p.m. - 10 p.m., Fri. 2 p.m. - 10 p.m., Sat.-Sun 08:00 - 22:00)"
    },
    {
        icon: <WebIcon />,
        title: "Site:",
        info: "http://www.baku.diplo.de"
    },
    {
        icon: <LocationIcon color="#130F26" width={16} height={16} />,
        title: "Location:",
        info: "ISR Plaza, 69 Nizami St., AZ 1005 Baku"
    },

];