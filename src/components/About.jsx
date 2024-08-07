import React from "react";
import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Box,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import introVideo from "../assets/videos/intro.mp4";
import { RiSecurePaymentFill } from "react-icons/ri";
import termsAndCondition from "../assets/docs/termsAndCondition";

const Founder = () => {
  return (
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding="8">
      <VStack>
        <Avatar boxSize={["40", "48"]} />
        <Text children="cofounder" opacity="0.7" />
      </VStack>
      <VStack justifyContent="center" alignItems={["center", "flex-start"]}>
        <Heading children="Amandeep Bhardwaj" size={["md", "xl"]} />
        <Text
          children="Hi, I'm a front end developer"
          textAlign={["center", "left"]}
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => {
  return (
    <Box>
      <video
        autoPlay
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>
    </Box>
  );
};

const TandC = ({ termsAndCondition }) => {
  return (
    <Box>
      <Heading
        size="md"
        children="Terms & Conditions"
        textAlign={["center", "left"]}
        my="4"
      />
      <Box h="sm" p="4" overflowY="scroll">
        <Text
          textAlign={["center", "left"]}
          letterSpacing="widest"
          fontFamily="heading"
        >
          {termsAndCondition}
        </Text>
        <Heading
          my="4"
          size="xs"
          children="Refund only applicable for cancellation within 7 days"
        />
      </Box>
    </Box>
  );
};

const About = () => {
  return (
    <Container maxW="container.lg" padding="16" boxShadow="lg">
      <Heading children="About us" textAlign={["center", "left"]} />
      <Founder />
      <Stack m="8" direction={["column", "row"]} alignItems="center">
        <Text fontFamily="cursive" m="8" textAlign={["center", "left"]}>
          We are a video streaming platform with some premium courses available
          only for premium users
        </Text>
        <Link to="/subscribe">
          <Button variant="ghost" colorScheme="yellow">
            checkout our plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsAndCondition} />
      <HStack my="4" padding="4">
        <RiSecurePaymentFill />
        <Heading
          children="Payment is secured by Razorpay"
          size="xs"
          fontFamily="sans-serif"
          textTransform="uppercase"
        />
      </HStack>
    </Container>
  );
};

export default About;