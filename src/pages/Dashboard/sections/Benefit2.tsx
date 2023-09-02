import { Grid, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";

const Benefit2 = (props: { benefit2: any }) => {
  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      // bg={secondaryColor()}
      margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      id="Benefit2"
      gap={"30px"}
    >
      <Stack alignItems={"center"}>
        <Text
          as={"b"}
          fontSize={{ base: "2xl", lg: "3xl" }}
          color={primaryTextColor()}
          textAlign={"center"}
        >
          {props.benefit2.heading}
        </Text>
        <Text
          width={{ base: "100%", lg: "60%" }}
          textAlign={"center"}
          color={secondaryTextColor()}
        >
          {props.benefit2.description}
        </Text>
      </Stack>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={"20px"}
      >
        {props.benefit2.benefits.map((item: any, index: number) => (
          <Stack
            key={index}
            padding={"20px"}
            borderRadius={"12px"}
            bgColor={secondaryColor()}
            gap={"20px"}
          >
            <Text fontSize={"xl"} as={"b"} color={primaryTextColor()}>
              {item.title}
            </Text>
            <Text color={secondaryTextColor()}>{item.description}</Text>
            <Image src={`/assets/${item.src}`} loading="lazy" />
          </Stack>
        ))}
      </Grid>
    </Stack>
  );
};

export default Benefit2;
