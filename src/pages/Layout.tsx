import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box bgColor="#f5f8fe">
            <Outlet/>
        </Box>
    );
}

export default Layout;