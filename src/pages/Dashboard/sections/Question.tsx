import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../../../utils/constant/theme";
import { BsWhatsapp } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Question = (props: { admin_chat: any; questions: any }) => {
  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
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
          {props.questions.heading}
        </Text>
        <Text
          width={{ base: "100%", lg: "60%" }}
          textAlign={"center"}
          color={secondaryTextColor()}
        >
          {props.questions.description}
        </Text>
      </Stack>

      <Grid
        gridTemplateColumns={"repeat(10, 1fr)"}
        gap={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <GridItem colSpan={{ base: 10, lg: 6 }}>
          <Accordion>
            {props.questions.questions.map((item: any, index: number) => (
              <AccordionItem key={index} bg={secondaryColor()}>
                <AccordionButton height={"70px"}>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={primaryTextColor()}
                  >
                    {item.title}
                  </Box>
                  <AccordionIcon color={primaryTextColor()} />
                </AccordionButton>
                <AccordionPanel pb={4} color={secondaryTextColor()}>
                  {item.description}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </GridItem>

        <GridItem colSpan={{ base: 10, lg: 4 }}>
          <Stack
            bgColor={secondaryColor()}
            padding={"20px"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"12px"}
          >
            <Text color={primaryTextColor()} as={"b"}>
              Masih punya banyak pertanyaan?
            </Text>
            <Text color={secondaryTextColor()}>
              Konsultasi bersama team marketing kami untuk segera membuat
              website anda sendiri
            </Text>
            <Link
              to={`https://wa.me/${props.admin_chat.phone}?text=${props.admin_chat.chat}`}
              style={{ width: "100%" }}
            >
              <Button gap={"5px"} colorScheme="whatsapp" width={"full"}>
                Kirim Pesan ke Whatsapp <BsWhatsapp />
              </Button>
            </Link>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default Question;
