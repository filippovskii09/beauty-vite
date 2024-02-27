import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CatalogPage from "../pages/CatalogPage";
import ProductCard from "../pages/ProductCard";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import OrderPage from "../pages/OrderPage";
import ConfirmationPage from "../pages/ConfirmationPage";
import AccountPage from "../pages/AccountPage";
import SuccessOrder from "../pages/SuccessOrder";
import FavoritePage from "../pages/FavoritePage";
import DetailsPage from "../pages/DetailsPage";

export const router = createBrowserRouter([
	{
		path:'/',
		element: <App/>
	},
	{
		path: '/makeup',
		element: <CatalogPage/>
	},
	{
		path: '/cart',
		element: <ShoppingCartPage/>
	},
	{
		path: '/order',
		element: <OrderPage/>
	},
	{
		path: '/confirm',
		element: <ConfirmationPage/>
	},
	{
		path: '/product/:id',
		element: <ProductCard/>
	},
	{
		path: '/account',
		element: <AccountPage/>
	},
	{
		path: '/ordered',
		element: <SuccessOrder/>
	},
	{
		path: '/favorite',
		element: <FavoritePage/>
	},
	{
		path: '/products/:id',
		element: <DetailsPage/>,
	},
])