import { Box, Flex, Image } from "@chakra-ui/react";

import { contentMaxWidth, sectionGap } from "../pages/Home";

import imageBackground from "../static/images/abousus_background.png";
import imageContent from "../static/images/aboutus_content.png";

const AboutUs = () => {
    const bgImage = `url(${imageBackground.toString()})`;

    return (
        <Box id="aboutus" pt={sectionGap}>
            <Box position="relative">
                <Box
                    position="absolute" top={{base: -90, sm: -20}}
                    w="full" h={1000}
                    bgImage={bgImage}
                    bgRepeat="no-repeat"
                    bgSize="contain" bgPos="top right"
                ></Box>
            </Box>
            <Flex w="full" maxW={contentMaxWidth} m="auto" justifyContent="center" px={4} position="relative" zIndex={1}>
                <Image src={imageContent} w={{base: 500, md: 650, lg: 800, xl: 1000}} mr={{base: 0, md: 100}} />
            </Flex>
        </Box>
    )
}

export default AboutUs;