import { Table, Thead, Tbody, Tr, Th, Td, Stack } from "@chakra-ui/react";
import {
  primaryTextColor,
  secondaryColor,
} from "../../../utils/constant/theme";
import { convertToBillNumber } from "../../../utils/helper/helper";

const Fitur = (props: { fitur: any }) => {
  return (
    <Stack
      margin={{ base: "15px", lg: "30px" }}
      bg={secondaryColor()}
      // margin={{ base: "0px", md: "20px" }}
      borderRadius={"12px"}
      id="Fitur"
      gap={"30px"}
    >
      <Table color={primaryTextColor()} variant={"unstyled"}>
        <Thead bgColor={"rgb(49, 130, 206)"}>
          <Tr>
            <Th color={primaryTextColor()}>Fitur</Th>
            <Th color={primaryTextColor()}>Harga</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.fitur.map((row: any, index: number) => (
            <Tr key={index}>
              <Td>{row.nama_fitur}</Td>
              <Td fontSize={{ base: "12px", sm: "16px" }}>
                {convertToBillNumber(row.price)}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );

  // <pre>{JSON.stringify(props.fitur, null, 2)}</pre>
};

export default Fitur;
