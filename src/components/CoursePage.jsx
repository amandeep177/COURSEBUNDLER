import React, { useState } from "react";
import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import introVideo from "../assets/videos/intro.mp4";

const CoursePage = () => {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: "134",
      title: "sample",
      description: "adfjl;j;af",
      video: { url: "sadfl;aj" },
    },
    {
      _id: "1345",
      title: "sample",
      description: "adfjl;j;af",
      video: { url: "sadfl;aj" },
    },
    {
      _id: "1346",
      title: "sample",
      description: "adfjl;j;af",
      video: { url: "sadfl;aj" },
    },
    {
      _id: "1347",
      title: "sample",
      description: "adfjl;j;af",
      video: { url: "sadfl;aj" },
    },
    {
      _id: "1348",
      title: "sample",
      description: "adfjl;j;af",
      video: { url: "sadfl;aj" },
    },
  ];

  return (
    <Grid minH="90vh" templateColumns={["1fr", "3fr 1fr"]}>
      <Box>
        <video
          width="100%"
          autoPlay
          controls
          controlsList="nodownload  noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
        <Heading
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
          m="4"
        />
        <Heading children="desc" m="4" />
        <Text m="4" children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={() => setLectureNumber(index)}
            key={element._id}
            style={{
              width: "100%",
              padding: "1rem",
              textAlign: "center",
              margin: 0,
              borderBottom: "1px solid rgba(0,0,0,0.2",
            }}
          >
            <Text noOfLines="1">
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;