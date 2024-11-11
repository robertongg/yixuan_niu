import { Flex } from "@chakra-ui/react";
import AboutUs from "../sections/AboutUs";
import Navigation from "../sections/Navigation";
import Photos from "../sections/Photos";
import Sequence from "../sections/Sequence";

export const contentMaxWidth = {
    base: 940,
    xl: 1100
};

export const sectionGap = 10;

const Home = () => {
    return (
        <Flex flexDirection="column">
            <Navigation/>
            <AboutUs/>
            <Photos/>
            <Sequence/>
        </Flex>
    );
}

export default Home;