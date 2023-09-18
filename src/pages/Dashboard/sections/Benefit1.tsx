import { Grid, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import {
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";

import { MdVerified, MdAccessTimeFilled } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BsLaptopFill } from "react-icons/bs";
const Benefit1 = (props: { benefit1: any }) => {
  const benefit = [
    {
      title: "Sudah Teroptimasi",
      description:
        "Website yang kami buat untukmu sudah dioptimisasi dengan baik!",
      icon: <MdVerified />,
      colorcheme: "green",
    },
    {
      title: "Hemat Waktu",
      description:
        "Proses cepat dan tidak memakan waktu, segera luncurkan layananmu sendiri!",
      icon: <MdAccessTimeFilled />,
      colorcheme: "blue",
    },
    {
      title: "Hemat Anggaran",
      description:
        "Membuat layanan topup dari nol akan memakan anggaran yang banyak, bersama kami menjadi hemat!",
      icon: <FaWallet />,
      colorcheme: "purple",
    },
    {
      title: "Profesional Website",
      description:
        "Website yang profesional membuat customer anda nyaman dan senang!",
      icon: <BsLaptopFill />,
      colorcheme: "orange",
    },
  ];
  return (
    <HStack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      bg={primaryColor()}
      margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      id="Benefit1"
      gap={"30px"}
      flexDirection={{ base: "column", lg: "row-reverse" }}
    >
      <Stack
        width={{ base: "100%", lg: "50%" }}
        textAlign={{ base: "center", lg: "start" }}
      >
        <Text as={"b"} fontSize={{ md: "1xl" }} color={primaryTextColor()}>
          {props.benefit1.heading2}
        </Text>

        <Text
          as={"b"}
          fontSize={{ base: "2xl", md: "4xl" }}
          color={primaryTextColor()}
        >
          {props.benefit1.heading1}
        </Text>
        <Text color={secondaryTextColor()}>{props.benefit1.description}</Text>
      </Stack>
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        width={{ base: "100%", lg: "50%" }}
        gap={"20px"}
      >
        {benefit.map((item: any, index: number) => (
          <Stack
            bgColor={secondaryColor()}
            borderRadius={"12px"}
            padding={"20px"}
            key={index}
            alignItems={{ base: "center", md: "flex-start" }}
            textAlign={{ base: "center", md: "start" }}
          >
            <IconButton
              width={"40px"}
              borderRadius={"50px"}
              aspectRatio={"1/1"}
              colorScheme={item.colorcheme}
              aria-label="icon"
              icon={item.icon}
            />
            <Text as={"b"} color={primaryTextColor()}>
              {item.title}
            </Text>
            <Text color={secondaryTextColor()}>{item.description}</Text>
          </Stack>
        ))}
      </Grid>
    </HStack>
  );
};

export default Benefit1;
