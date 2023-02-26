import { Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" w="100%" h="100vh" bg="black">
      {children}
    </Flex>
  );
};

export default Layout;
