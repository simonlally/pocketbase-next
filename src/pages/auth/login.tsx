import { useState } from "react";
import { Button, Flex, Text, Input, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Layout from "@/layouts/layout";
import { setToken } from "@/utils/auth";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validate = () => {
    if (email === "" || password === "") {
      return false;
    }

    return true;
  };

  const login = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/auth-with-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identity: email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (response.status === 200) {
      setToken(data.token);
      router.push("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Layout>
      <Flex
        direction="column"
        w="100%"
        h="100%"
        justify="center"
        align="center"
      >
        <VStack spacing="20px">
          <Flex direction="column">
            <Text fontSize="24px" color="gray.500">
              Email
            </Text>

            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              color="gray.400"
              mt="12px"
            />
          </Flex>

          <Flex direction="column">
            <Text fontSize="24px" color="gray.500">
              Password
            </Text>

            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              color="gray.400"
              mt="12px"
            />
          </Flex>

          <Button
            isDisabled={!validate()}
            w="100%"
            {...styles.buttonProps}
            onClick={login}
          >
            Go
          </Button>
        </VStack>
      </Flex>
    </Layout>
  );
}

const styles = {
  buttonProps: {
    bg: "gray.800",
    color: "gray.200",
    _hover: {
      bg: "gray.700",
    },
  },
};
