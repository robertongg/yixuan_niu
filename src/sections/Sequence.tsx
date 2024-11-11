import { Box, Image } from "@chakra-ui/react"

import imageSequence from "../static/images/sequence_content.png";
import { contentMaxWidth, sectionGap } from "../pages/Home";

const Sequence = () => {
    return (
        <Box id="sequence"
            w="full" maxW={contentMaxWidth}
            m="auto" pt={sectionGap} px={4}
        >
            <Image src={imageSequence} />
        </Box>
    );
}

export default Sequence;