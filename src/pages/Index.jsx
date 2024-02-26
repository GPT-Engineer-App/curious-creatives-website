import { Box, Container, Flex, Heading, Text, Button, Stack, Icon, Link, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaArrowRight, FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box p={8} bg={useColorModeValue("gray.100", "gray.900")} minH="100vh">
        <Flex align="center" justify="center" direction="column" minH="100vh" textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            Get Curious Agency
          </Heading>
          <Text fontSize="xl" mb={4}>
            Disrupting the web agency norms to elevate your brand to extraordinary heights.
          </Text>
          <Button size="lg" colorScheme="purple" rightIcon={<Icon as={FaArrowRight} w={5} h={5} />}>
            Start Your Journey
          </Button>
          <IconContext.Provider value={{ size: "2em", className: "social-icons" }}>
            <Stack direction="row" spacing={6} mt={6}>
              <Link href="#" isExternal>
                <FaFacebookF />
              </Link>
              <Link href="#" isExternal>
                <FaInstagram />
              </Link>
              <Link href="#" isExternal>
                <FaTwitter />
              </Link>
              <Link href="#" isExternal>
                <FaLinkedinIn />
              </Link>
            </Stack>
          </IconContext.Provider>
        </Flex>
      </Box>

      <Box as="section" py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Our Unique Approach
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {uniqueApproaches.map((approach) => (
            <Box key={approach.title} bg={useColorModeValue("white", "gray.800")} p={6} rounded="md" boxShadow="md">
              <Icon as={approach.icon} w={10} h={10} mb={4} />
              <Heading as="h3" size="md" mb={2}>
                {approach.title}
              </Heading>
              <Text>{approach.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Replace with actual testimonials */}
      <Box as="section" py={10} bg={useColorModeValue("purple.600", "purple.400")} color="white">
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          What Our Clients Say
        </Heading>
        {/* This is a placeholder for testimonials */}
        <Text textAlign="center">Testimonials will be placed here.</Text>
      </Box>

      {/* Call to Action Section */}
      <Box as="section" py={10} textAlign="center">
        <Heading as="h2" size="xl" mb={6}>
          Ready to Get Curious?
        </Heading>
        <Button size="lg" colorScheme="purple" rightIcon={<Icon as={FaArrowRight} w={5} h={5} />}>
          Let's Talk
        </Button>
      </Box>

      <Box as="footer" py={10} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Get Curious Agency. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

const uniqueApproaches = [
  {
    title: "Rule Breakers",
    description: "We break the norms to create standout experiences that redefine your brand.",
    icon: FaPlus,
  },
  {
    title: "Creative Thinkers",
    description: "Our creative strategies ensure your brand captivates and converts.",
    icon: FaPlus,
  },
  {
    title: "Industry Shakers",
    description: "We’re not just different, we set the trends that move industries.",
    icon: FaPlus,
  },
];

export default Index;
