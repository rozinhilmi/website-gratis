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
const Benefit1 = () => {
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
      <Stack width={{ base: "100%", lg: "50%" }}>
        <Text as={"b"} fontSize={{ md: "1xl" }} color={primaryTextColor()}>
          Alasan membangun website bersama kami
        </Text>

        <Text
          as={"b"}
          fontSize={{ base: "2xl", md: "4xl" }}
          color={primaryTextColor()}
        >
          Website Hemat, Professional & Tepat
        </Text>
        <Text color={secondaryTextColor()}>
          Bersama kami, anda mendapatkan website dalam waktu yang cepat, hemat
          anggaran, serta website yang sudah kami optimisasi dan tampilan
          layanan yang profesional!
        </Text>
      </Stack>
      <Grid
        gridTemplateColumns={"repeat(2, 1fr)"}
        width={{ base: "100%", lg: "50%" }}
        gap={"20px"}
      >
        <Stack
          bgColor={secondaryColor()}
          borderRadius={"12px"}
          padding={"20px"}
        >
          <IconButton
            width={"40px"}
            borderRadius={"50px"}
            aspectRatio={"1/1"}
            colorScheme="green"
            aria-label="icon"
            icon={<MdVerified />}
          />
          <Text as={"b"} color={primaryTextColor()}>
            Sudah Teroptimasi
          </Text>
          <Text color={secondaryTextColor()}>
            Website yang kami buat untukmu sudah dioptimisasi dengan baik!
          </Text>
        </Stack>
        <Stack
          bgColor={secondaryColor()}
          borderRadius={"12px"}
          padding={"20px"}
        >
          <IconButton
            width={"40px"}
            borderRadius={"50px"}
            aspectRatio={"1/1"}
            colorScheme="blue"
            aria-label="icon"
            icon={<MdAccessTimeFilled />}
          />
          <Text as={"b"} color={primaryTextColor()}>
            Hemat Waktu
          </Text>
          <Text color={secondaryTextColor()}>
            Proses cepat dan tidak memakan waktu, segera luncurkan layananmu
            sendiri!
          </Text>
        </Stack>
        <Stack
          bgColor={secondaryColor()}
          borderRadius={"12px"}
          padding={"20px"}
        >
          <IconButton
            width={"40px"}
            borderRadius={"50px"}
            aspectRatio={"1/1"}
            colorScheme="purple"
            aria-label="icon"
            icon={<FaWallet />}
          />
          <Text as={"b"} color={primaryTextColor()}>
            Hemat Anggaran
          </Text>
          <Text color={secondaryTextColor()}>
            Membuat layanan topup dari nol akan memakan anggaran yang banyak,
            bersama kami menjadi hemat!
          </Text>
        </Stack>
        <Stack
          bgColor={secondaryColor()}
          borderRadius={"12px"}
          padding={"20px"}
        >
          <IconButton
            width={"40px"}
            borderRadius={"50px"}
            aspectRatio={"1/1"}
            colorScheme="orange"
            aria-label="icon"
            icon={<BsLaptopFill />}
          />
          <Text as={"b"} color={primaryTextColor()}>
            Profesional Website
          </Text>
          <Text color={secondaryTextColor()}>
            Website yang profesional membuat customer anda nyaman dan senang!
          </Text>
        </Stack>
      </Grid>
    </HStack>
  );
};

export default Benefit1;
