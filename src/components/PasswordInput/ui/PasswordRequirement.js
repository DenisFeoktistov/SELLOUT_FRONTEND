import {
  Box,
  Progress,
  PasswordInput,
  Group,
  Text,
  Center,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

export default function PasswordRequirement({ meets, label }) {
  return (
    <Text color={meets ? "teal" : "red"} mt={5} size="sm">
      <Center inline>
        {meets ? (
          <IoMdCheckmark size="0.9rem" stroke={1.5} />
        ) : (
          <IoMdClose size="0.9rem" stroke={1.5} />
        )}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}
