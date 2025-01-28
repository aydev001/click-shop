import { MdOutlineShoppingCart } from "react-icons/md"; 
import { FaUsers } from "react-icons/fa"; 
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
export const btnData = [
    { id: 1, title: "Categories", icon: TbCategory, path: "/admin" },
    { id: 2, title: "Products", icon: MdOutlineShoppingCart , path: "/admin/products" },
    { id: 3, title: "Create category", icon: MdOutlineDashboardCustomize, path: "/admin/create-category" },
    { id: 4, title: "Create product", icon: MdAddShoppingCart, path: "/admin/create-product" },
    { id: 5, title: "Users", icon: FaUsers, path: "/admin/users" },
]