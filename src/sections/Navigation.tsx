import { Flex, Image, Link } from "@chakra-ui/react";
import { Link as AnchorLink } from "react-scroll";

import { contentMaxWidth } from "../pages/Home";

import imageBgDesktop from "../static/images/nav_background_desktop.png";
import imageBgMobile from "../static/images/nav_background_mobile.png";
import imageName from "../static/images/nav_name.png";
import imagePhoto from "../static/images/nav_photo.png";

import imageNavItem_AboutUs from "../static/images/nav_item_about_us.png";
import imageNavItem_FAQ from "../static/images/nav_item_faq.png";
import imageNavItem_Floorplan from "../static/images/nav_item_floorplan.png";
import imageNavItem_Menu from "../static/images/nav_item_menu.png";
import imageNavItem_Photos from "../static/images/nav_item_photos.png";
import imageNavItem_RSVP from "../static/images/nav_item_rsvp.png";
import imageNavItem_Sequence from "../static/images/nav_item_sequence.png";
import imageNavItem_ThankMessage from "../static/images/nav_item_thank_message.png";

const navItems = [
    {
        image: imageNavItem_RSVP,
        type: "link",
        href: ""
    }, {
        image: imageNavItem_Menu,
        type: "link",
        href: ""
    }, {
        image: imageNavItem_AboutUs,
        type: "anchor",
        href: "aboutus"
    }, {
        image: imageNavItem_Sequence,
        type: "anchor",
        href: ""
    }, {
        image: imageNavItem_Photos,
        type: "anchor",
        href: ""
    }, {
        image: imageNavItem_Floorplan,
        type: "anchor",
        href: ""
    }, {
        image: imageNavItem_ThankMessage,
        type: "anchor",
        href: ""
    }, {
        image: imageNavItem_FAQ,
        type: "anchor",
        href: ""
    }
]

const Navigation = () => {
    const bgImage = {
        base: `url(${imageBgMobile.toString()})`,
        md: `url(${imageBgDesktop.toString()})`
    }

    return (
        <Flex flexDirection="column" gap={10} bgImage={bgImage} bgRepeat="no-repeat" bgSize="cover" bgPos="center bottom">
            <Flex w="full" maxW={contentMaxWidth} m="auto" justifyContent="center" gapX={{base: 50, xl: 100}} flexWrap="wrap">
                <Image w={{base: 300, sm: 400, xl: 500}} mt={10} src={imageName} objectFit="contain" />
                <Image w={{base: 250, sm: 300, xl: 400}} ml={20} src={imagePhoto} objectFit="contain" />
            </Flex>
            <Flex w="full" maxW={contentMaxWidth} m="auto" alignItems="flex-end" justifyContent="center" gap={5} flexWrap="wrap" mb={5}>
                {navItems.map((item) => {

                    const imageElement = (
                        <Image w={{base: 100, xl: 120}} src={item.image} objectFit="contain" cursor={item.href === "" ? "default": "pointer"} />
                    );

                    if (item.href === "") {
                        return imageElement;
                    }

                    if (item.type.toUpperCase() === "ANCHOR") {
                        return (
                            <AnchorLink to={item.href} smooth={true} duration={750}>
                                {imageElement}
                            </AnchorLink>
                        )
                    }

                    return (
                        <Link href={item.href} target="_blank">
                            {imageElement}
                        </Link>
                    );
                })}
            </Flex>
        </Flex>
    );
}

export default Navigation;