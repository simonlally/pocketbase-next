import { useEffect, useState } from "react";
import { VStack, Flex, Text, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Layout from "@/layouts/layout";
import { getToken } from "@/utils/auth";

async function getTickets() {
  const token = getToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tickets/records`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data?.items as any[];
}

export default function Home() {
  const [tickets, setTickets] = useState<any[]>([]);

  useEffect(() => {
    getTickets()
      .then((tickets) => {
        setTickets(tickets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Flex>
        <VStack ml="20px" mt="100px" spacing="20px">
          {tickets.map((ticket) => {
            return (
              <Box border="1px" borderColor="gray.600" p="14px" key={ticket.id}>
                <Text>{ticket.title}</Text>
                <Text>{ticket.body}</Text>
              </Box>
            );
          })}
        </VStack>
      </Flex>
    </Layout>
  );
}
