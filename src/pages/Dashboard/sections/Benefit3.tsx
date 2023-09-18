import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";

const Benefit3 = (props: { benefit3: any }) => {
  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      bg={secondaryColor()}
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
          {props.benefit3.heading}
        </Text>
        <Text
          width={{ base: "100%", lg: "60%" }}
          textAlign={"center"}
          color={secondaryTextColor()}
        >
          {props.benefit3.description}
        </Text>
      </Stack>

      <Stack gap={"80px"} my={"30px"}>
        {props.benefit3.benefits.map((item: any, index: number) => (
          <HStack
            justifyContent={"space-between"}
            key={index}
            flexDirection={{
              base: "column-reverse",
              md: index % 2 !== 0 ? "row-reverse" : "row",
            }}
            gap={"30px"}
          >
            <Stack width={{ base: "100%", xl: "50%" }}>
              <Text
                color={primaryTextColor()}
                as={"b"}
                fontSize={{ base: "xl", md: "2xl", xl: "4xl" }}
                textAlign={{
                  base: "start",
                  md: index % 2 == 0 ? "end" : "start",
                }}
                lineHeight={"1"}
              >
                {item.title}
              </Text>
              <Text
                color={secondaryTextColor()}
                textAlign={{
                  base: "start",
                  md: index % 2 == 0 ? "end" : "start",
                }}
              >
                {item.description}
              </Text>
            </Stack>

            <Stack width={{ base: "100%", xl: "50%" }}>
              <Image
                zIndex={"1"}
                padding={"10px"}
                backgroundColor={"whiteAlpha.300"}
                borderRadius={"5px"}
                bottom={"2cm"}
                left={"2cm"}
                objectFit={"contain"}
                width={{ base: "220px", md: "80%", xl: "50%" }}
                alignSelf={{
                  base: "center",
                  md: index % 2 == 0 ? "flex-start" : "flex-end",
                  lg: "center",
                }}
                src={`/assets/${item.src}`}
                loading="lazy"
              />
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Benefit3;
