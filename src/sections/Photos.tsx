import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { contentMaxWidth, sectionGap } from "../pages/Home";

import imagePhotos from "../static/images/photos_photos.png";
import imageMorePhotos from "../static/images/photos_more_photos.png";

const Photos = () => {
    const morePhotosLink = "";

    return (
        <Flex id="photos"
            w="full" maxW={contentMaxWidth}
            m="auto" pt={sectionGap} px={4}
            justifyContent="center"
            position="relative"
        >
            <Image src={imagePhotos} />
            <Link href={morePhotosLink}>
                <Image src={imageMorePhotos} position="absolute" bottom="0" left="0" w="calc(100% * 0.2)" />
            </Link>
        </Flex>
    );
}

export default Photos;