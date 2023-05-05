import {
  Box,
  Progress,
  PasswordInput,
  Group,
  Text,
  Center,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import PasswordRequirement from "./PasswordRequirement";
import { getStrength } from "../lib/utils";

const requirements = [
  { re: /[0-9]/, label: "Содержит число" },
  { re: /[a-z]/, label: "Одна строчная буква" },
  { re: /[A-Z]/, label: "Одна заглавная буква" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Специальный символ" },
];

export default function PasswordStrength(props) {
  const [value, setValue] = useInputState(props.password);
  const strength = getStrength(props.value, requirements);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(props.value)}
    />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: "0ms" } }}
        value={
          props.value.length > 0 && index === 0
            ? 100
            : strength >= ((index + 1) / requirements.length) * 100
            ? 100
            : 0
        }
        color={strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"}
        key={index}
        size={4}
      />
    ));

  return (
    <div>
      <PasswordInput {...props} />

      <Group spacing={5} grow mt="xs" mb="md">
        {bars}
      </Group>

      <PasswordRequirement
        label="Минимум 8 символов"
        meets={props.value.length > 7}
      />
      {checks}
    </div>
  );
}
