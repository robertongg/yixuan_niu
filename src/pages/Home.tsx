import { Flex } from "@chakra-ui/react";
import Navigation from "../sections/Navigation";

export const contentMaxWidth = {
    base: 940,
    xl: 1100
};

const Home = () => {
    return (
        <Flex flexDirection="column" gapY={10}>
            <Navigation/>
        </Flex>
    );
}

export default Home;