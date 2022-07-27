import CatagoriesWide from "../componants/categoriesWide";
import Home from "../componants/home";
import PageNotFound from "../componants/PageNotFound";

export const ROUTE_DATA = [
    { path: `${process.env.PUBLIC_URL}`, comment: <Home /> },
    { path: `${process.env.PUBLIC_URL}/category-wide`, comment: <CatagoriesWide /> },
    { path: `${process.env.PUBLIC_URL}/*`, comment: <PageNotFound /> }

]