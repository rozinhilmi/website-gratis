import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
} from "../../../utils/constant/theme";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { BsFillSunFill } from "react-icons/bs";
const Navbar = (props: { admin_chat: any }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <HStack
        height={"1.7cm"}
        paddingX={{ base: "10px", md: "40px" }}
        width={"100%"}
        maxW={"1440px"}
        backgroundColor={secondaryColor()}
        justify={"space-between"}
        className="navbar"
        position={"fixed"}
        zIndex={"10"}
        boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
        fontSize={"14px"}
      >
        <Image src="/assets/Logo.png" width={"40px"} objectFit={"contain"} />

        <HStack gap={"30px"} display={{ base: "none", lg: "flex" }}>
          <HStack gap={"15px"}>
            <a href="#Carousel">
              <Text
                color={primaryTextColor()}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Beranda
              </Text>
            </a>

            <a href="#Benefit1">
              <Text
                color={primaryTextColor()}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Keunggulan
              </Text>
            </a>

            <a href="#Fitur">
              <Text
                color={primaryTextColor()}
                _hover={{ color: "rgb(49, 130, 206)" }}
                as={"b"}
                cursor={"pointer"}
              >
                Fitur
              </Text>
            </a>
          </HStack>
          <Link
            to={`https://wa.me/${props.admin_chat.phone}?text=${props.admin_chat.chat}`}
            target="_blank"
          >
            <Button borderRadius={"50px"} colorScheme="blue">
              Buat Website Sekarang
            </Button>
          </Link>
        </HStack>

        <Button
          colorScheme="whiteAlpha"
          variant={"outline"}
          display={{ base: "flex", lg: "none" }}
          onClick={() => {
            setShowSidebar(true);
          }}
        >
          <GiHamburgerMenu />
        </Button>
      </HStack>

      <Stack
        transform={!showSidebar ? "translateX(100%)" : "translateX(0%)"}
        transition="all 0.5s"
        display={{ base: "flex", lg: "none" }}
        paddingX={{ base: "10px", lg: "40px" }}
        paddingY={"20px"}
        width={"100%"}
        height={"100vh"}
        maxW={"1440px"}
        backgroundColor={secondaryColor()}
        position={"fixed"}
        zIndex={"11"}
      >
        <HStack justifyContent={"space-between"}>
          <Image src="/assets/Logo.png" width={"40px"} objectFit={"contain"} />
          <Button
            colorScheme="whiteAlpha"
            variant={"outline"}
            display={{ base: "flex", lg: "none" }}
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <IoMdClose />
          </Button>
        </HStack>

        <Stack gap={"10px"} my={"30px"}>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#Carousel";
            }}
          >
            Beranda
          </Button>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#Benefit1";
            }}
          >
            Keunggulan
          </Button>
          <Button
            variant={"solid"}
            colorScheme="facebook"
            onClick={() => {
              setShowSidebar(false);
              window.location.href = "#Fitur";
            }}
          >
            Fitur
          </Button>

          <Link
            to={`https://wa.me/${props.admin_chat.phone}?text=${props.admin_chat.chat}`}
            target="_blank"
          >
            <Button width={"100%"} colorScheme="blue" borderRadius={"50px"}>
              Buat Website Sekarang
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
