import { ABOUT_ROUTE, CATEGORY_ROUTE, CONTACT_ROUTE, HOME_ROUTE, ORDER_ROUTE, PRODUCT_ROUTE } from "@/route/route";

 const navlinks=[
    {
        label:"Home",
        href:HOME_ROUTE,
        isAuth: false
    },
    {
        label:"Products",
        href:PRODUCT_ROUTE,
        isAuth: false
    },
    {
        label:"Orders",
        href:ORDER_ROUTE,
        isAuth: true,
    },
    {
        label:"Contact",
        href:CONTACT_ROUTE,
        isAuth:false
    },
]
export default navlinks;