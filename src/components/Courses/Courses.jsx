import {
  Container,
  Heading,
  Input,
  HStack,
  Text,
  Button,
  Stack,
  VStack,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize={"60"} objectFit={"contain"} />
      <Heading
        textAlign={["center", "left"]}
        maxW={"200px"}
        fontFamily={"sans-serif"}
        noOfLines={3}
        children={title}
        size={"sm"}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={"bold"}
          textTransform={"uppercase"}
          children={"creator"}
        />

        <Text
          fontFamily={"body"}
          textTransform={"uppercase"}
          children={creator} 
        />
      </HStack>

<Heading textAlign={"center"} size={"xs"} children={`Lectures - ${lectureCount}`} />

    </VStack>
  );
};

const Courses = () => {
  const [keyword, setkeyword] = useState("");
  const [category, setcategory] = useState("");
  const categories = [
    "Web development",
    "Artificial Intellegence",
    " Data Structure & Algorithm",
    "App Developent",
    "Data Scince",
    "Game Development",
  ];
  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
      <Heading children="All Courses" m={"8"} />
      <Input
        value={keyword}
        onChange={(e) => setkeyword(e.target.value)}
        placeholder="Search a course..."
        type={"text"}
        focusBorderColor="green.500"
      />

      <HStack
        overflowX={" auto "}
        paddingY={"8"}
        css={{
          "&::-webkit scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setcategory(item)} minW={"60"}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Course
          title={"Sample"}
          description={"Sample"}
          views={23}
          imageSrc={"Sample"}
          creator={"Sample boy"}
          lectureCount={2}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
