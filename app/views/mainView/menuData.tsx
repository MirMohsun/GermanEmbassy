import React from "react";
import { Path3Icon } from "../../assets/svg/path3Icon";
import { BookIcon } from "../../assets/svg/bookIcon";
import { PeopleIcon } from "../../assets/svg/peopleIcon";
import { GovernmentIcon } from "../../assets/svg/governmentIcon";
import { BuildingIcon } from "../../assets/svg/buildingIcon";
import { ROUTES } from "../../modules/navigation/routes";

export const menuData = [
    {
        icon: <Path3Icon />,
        goTo: ROUTES.RouteView,
        title: "Route A"
    },
    {
        icon: <Path3Icon color="#F03939" />,
        goTo: ROUTES.RouteView,
        title: "Route B"
    },
    {
        icon: <BookIcon />,
        goTo: ROUTES.BookView,
        title: "Book pdf"
    },
    {
        icon: <PeopleIcon />,
        goTo: ROUTES.ArchitectsView,
        title: "Architects"
    },
    {
        icon: <GovernmentIcon />,
        goTo: ROUTES.AboutUsView,
        title: "About us"
    },
    {
        icon: <BuildingIcon />,
        goTo: ROUTES.BuildingsView,
        title: "Buildings"
    }
];