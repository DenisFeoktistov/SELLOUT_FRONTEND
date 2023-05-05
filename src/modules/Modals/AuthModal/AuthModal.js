import {
  AppleButton,
  GoogleButton,
  VkButton,
  YandexButton,
} from "@/components/SocialButtons";
import {
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  Stack,
  Tabs,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext, useState } from "react";

import styles from "./AuthModal.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthModalContext } from "@/shared/contexts";
import { PasswordStrength } from "@/components/PasswordInput";

const AuthModal = () => {
  const { callbackUrl } = useContext(AuthModalContext);

  const [activeTab, setActiveTab] = useState("login");

  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const formRegister = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
      gender: "male",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div>
      <Tabs color="dark" value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List grow position="center">
          <Tabs.Tab ff={"Montserrat"} fz={18} value="login">
            Вход
          </Tabs.Tab>
          <Tabs.Tab ff={"Montserrat"} fz={18} value="register">
            Регистрация
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel pt={24} value="login">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              ff={"Montserrat"}
              withAsterisk={false}
              label="ПОЧТА:"
              placeholder="your@email.com"
              required
              {...form.getInputProps("email")}
              styles={(theme) => ({
                label: {
                  fontWeight: "bold",
                },
              })}
            />

            <PasswordInput
              ff={"Montserrat"}
              mt={20}
              withAsterisk={false}
              label="ПАРОЛЬ:"
              labelProps={{
                color: "blue",
              }}
              placeholder="******"
              required
              {...form.getInputProps("password")}
              styles={(theme) => ({
                label: {
                  fontWeight: "bold",
                },
              })}
            />

            <Button
              ff={"Montserrat"}
              fw={"normal"}
              mt={20}
              w={"100%"}
              color="black"
              size="md"
            >
              Войти
            </Button>
          </form>
          <div className={styles.fp__container}>
            <Link href={"#"} className={styles.forgot__password}>
              Забыли пароль?
            </Link>
          </div>
        </Tabs.Panel>
        <Tabs.Panel pt={24} value="register">
          <form
            onSubmit={formRegister.onSubmit((values) => console.log(values))}
          >
            <TextInput
              ff={"Montserrat"}
              mt={20}
              withAsterisk
              label="ИМЯ:"
              placeholder="Иван"
              required
              {...formRegister.getInputProps("name")}
              styles={(theme) => ({
                label: {
                  fontWeight: "bold",
                },
              })}
            />

            <TextInput
              ff={"Montserrat"}
              mt={20}
              withAsterisk
              label="ПОЧТА:"
              placeholder="your@email.com"
              required
              {...formRegister.getInputProps("email")}
              styles={(theme) => ({
                label: {
                  fontWeight: "bold",
                },
              })}
            />

            <PasswordStrength
              ff={"Montserrat"}
              mt={20}
              withAsterisk
              label="ПАРОЛЬ:"
              labelProps={{
                color: "blue",
              }}
              placeholder="******"
              required
              password={formRegister.password}
              {...formRegister.getInputProps("password")}
              styles={(theme) => ({
                label: {
                  fontWeight: "bold",
                },
              })}
            />

            <Radio.Group
              name="gender"
              mt={20}
              label="Ваш пол"
              withAsterisk
              required
              styles={(theme) => ({
                label: {
                  fontWeight: "bold",
                },
              })}
              {...formRegister.getInputProps("gender")}
            >
              <Group grow mt="xs">
                <Radio
                  color="black"
                  value="male"
                  label="Мужчина"
                  defaultChecked
                />
                <Radio color="black" value="female" label="Женщина" />
                <Radio color="black" value="other" label="Другое" />
              </Group>
            </Radio.Group>

            <Button
              type="submit"
              ff={"Montserrat"}
              fw={"normal"}
              mt={20}
              w={"100%"}
              color="black"
              size="md"
            >
              Зарегистрироваться
            </Button>
          </form>
        </Tabs.Panel>
      </Tabs>

      <div className={styles.auth__with}>Войти с помощью</div>
      <Stack position="center" mb="md" mt="md">
        <AppleButton size="md">Apple</AppleButton>
        <GoogleButton size="md">Google</GoogleButton>
        <VkButton size="md">VK</VkButton>
      </Stack>
    </div>
  );
};

export default AuthModal;
