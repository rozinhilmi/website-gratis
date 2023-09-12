import { Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Carousel = (props: { admin_chat: any; carousel_content: any }) => {
  return (
    <HStack
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      minHeight={{ base: "85vh", lg: "700px" }}
      paddingY={"40px"}
      gap={"5px"}
      flexWrap={"wrap"}
      id="Carousel"
      paddingTop={"2.2cm"}
      bg={secondaryColor()}
      paddingX={{ base: "15px", lg: "30px" }}
      borderBottomRightRadius={"40%"}
    >
      <Stack
        gap={"20px"}
        alignItems={{ base: "center", md: "start" }}
        justifyContent={"center"}
        width={{ base: "100%", md: "50%" }}
        maxWidth={{ md: "500px" }}
      >
        <Text
          zIndex={"2"}
          color={primaryTextColor()}
          as={"b"}
          fontSize={{ base: "2xl", md: "4xl" }}
          lineHeight={"1"}
          textAlign={{ base: "center", lg: "start" }}
        >
          {props.carousel_content.heading}
        </Text>
        <Link
          to={`https://wa.me/${props.admin_chat.phone}?text=${props.admin_chat.chat}`}
          target="_blank"
        >
          <Button
            width={"300px"}
            borderRadius={"50px"}
            colorScheme="blue"
            gap={"5px"}
          >
            Buat Websitemu Sekarang
            <BsArrowRight />
          </Button>
        </Link>

        <Text color={secondaryTextColor()}>
          {props.carousel_content.description}
        </Text>
        <HStack flexWrap={"wrap"}>
          {props.carousel_content.clients.map((item: string) => (
            <Image
              key={item}
              src={`/assets/${item}`}
              height={"40px"}
              objectFit={"contain"}
              loading="lazy"
            />
          ))}
        </HStack>
        <Text color={primaryTextColor()} as={"b"} fontSize={"2xl"}>
          + 150 Client Lainya
        </Text>
      </Stack>
      <Image
        width={{ base: "100%", md: "50%" }}
        objectFit={"contain"}
        src="/assets/landingpage.png"
        loading="lazy"
      />
    </HStack>
  );
};

export default Carousel;
