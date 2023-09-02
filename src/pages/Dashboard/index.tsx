import { Stack } from "@chakra-ui/react";
import { primaryColor } from "../../utils/constant/theme";
import Navbar from "./sections/Navbar";
import Carousel from "./sections/Carousel";
import Benefit1 from "./sections/Benefit1";
import Benefit2 from "./sections/Benefit2";
import { useEffect, useState } from "react";
import axios from "axios";
import Benefit3 from "./sections/Benefit3";
import Fitur from "./sections/Fitur";
import OtherServices from "./sections/OtherServices";
import Question from "./sections/Question";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

const index = () => {
  const [data, setData]: any = useState();
  const getData = async () => {
    await axios.get(`database.json`).then((res) => setData(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={primaryColor()}
    >
      {data ? (
        <Stack
          width={"100%"}
          maxWidth={"1440px"}
          backgroundColor={primaryColor()}
          position={"relative"}
        >
          <Navbar admin_chat={data.admin_chat} />
          <Carousel
            admin_chat={data.admin_chat}
            carousel_content={data.carousel_content}
          />
          <Benefit1 />
          <Benefit2 benefit2={data.benefit2} />
          <Benefit3 benefit3={data.benefit3} />
          <Fitur fitur={data.fitur} />
          <OtherServices other_services={data.other_services} />
          <Question admin_chat={data.admin_chat} questions={data.questions} />
          <ContactUs admin_chat={data.admin_chat} />
          <Footer />
        </Stack>
      ) : null}
    </Stack>
  );
};

export default index;
