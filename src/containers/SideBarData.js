import { Title } from '@react-login-page/page1'
import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PointOfSaleRoundedIcon from '@mui/icons-material/PointOfSaleRounded';

export const SideBarData = [
    {
        Title: "Home",
        icon: <HomeRoundedIcon />,
        link : "/Home"
    },
    {
        Title: "Accounts",
        icon: <AccountBalanceRoundedIcon />,
        link : "/Accounts"
    },
    {
        Title: "Orders",
        icon: <ShoppingCartRoundedIcon />,
        link : "/Orders"
    },
    {
        Title: "Retails Overview",
        icon: <PointOfSaleRoundedIcon />,
        link : "/Retails"
    }
]