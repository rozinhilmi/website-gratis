import { Button, Grid, GridItem, Input, Stack, Text } from "@chakra-ui/react";
import {
  primaryColor,
  primaryTextColor,
  secondaryColor,
} from "../../../utils/constant/theme";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";

const ContactUs = (props: { admin_chat: any }) => {
  const [namaInput, setNamaInput]: any = useState(null);
  const [tokotInput, setTokoInput]: any = useState(null);
  const [socialMediaInput, setSocialMediaInput]: any = useState(null);

  return (
    <Stack
      padding={{ base: "15px", lg: "30px" }}
      paddingY={"30px"}
      bgColor={secondaryColor()}
      margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      id="Benefit2"
      gap={"30px"}
    >
      <Grid
        gridTemplateColumns={"repeat(10, 1fr)"}
        gap={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <GridItem colSpan={{ base: 10, lg: 6 }}>
          <Text
            zIndex={"2"}
            color={primaryTextColor()}
            as={"b"}
            fontSize={{ base: "2xl", lg: "3xl" }}
            lineHeight={"1"}
            textAlign="center"
          >
            Hubungi kami untuk membuat website impian mu
          </Text>
        </GridItem>

        <GridItem colSpan={{ base: 10, lg: 4 }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(
                `https://wa.me/${props.admin_chat.phone}?text=halo nama saya ${namaInput} saya dari toko ${tokotInput}, saya ingin membuat website. akun social media saya ${socialMediaInput}`,
                "_blank"
              );
            }}
          >
            <Stack
              bgColor={primaryColor()}
              padding={"20px"}
              alignItems={"flex-start"}
              justifyContent={"center"}
              borderRadius={"12px"}
              gap={"20px"}
              color={primaryTextColor()}
            >
              <Stack width={"full"}>
                <Text>Nama</Text>
                <Input
                  value={namaInput}
                  onChange={(e: any) => setNamaInput(e.target.value)}
                  name="nama"
                  placeholder="Masukan Nama"
                  required
                />
              </Stack>

              <Stack width={"full"}>
                <Text>Nama Toko</Text>
                <Input
                  value={tokotInput}
                  onChange={(e: any) => setTokoInput(e.target.value)}
                  name="nama-toko"
                  placeholder="Masukan Nama Toko"
                  required
                />
              </Stack>

              <Stack width={"full"}>
                <Text>Link Media Social</Text>
                <Input
                  value={socialMediaInput}
                  onChange={(e: any) => setSocialMediaInput(e.target.value)}
                  name="social-media"
                  placeholder="Masukan Link Modia Social"
                  required
                />
              </Stack>

              {/* <Link
                to={`https://wa.me/${props.admin_chat.phone}?text=${props.admin_chat.chat}`}
                style={{ width: "100%" }}
              > */}
              <Button
                gap={"5px"}
                width={"full"}
                colorScheme="whatsapp"
                alignSelf="center"
                type="submit"
              >
                Kirim Pesan <BsWhatsapp />
              </Button>
              {/* </Link> */}
            </Stack>
          </form>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default ContactUs;
