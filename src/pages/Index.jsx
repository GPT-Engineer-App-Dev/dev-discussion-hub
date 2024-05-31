import { Container, Text, VStack, Heading, Box, Button, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = ({ auth }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const navigate = useNavigate();

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handlePostSubmit = () => {
    if (newPost.title && newPost.content) {
      setPosts([...posts, newPost]);
      setNewPost({ title: "", content: "" });
    }
  };

  if (!auth) {
    navigate("/login");
    return null;
  }

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} width="100%" align="stretch">
        <Heading as="h1" size="2xl">Tech Forum</Heading>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4} width="100%" align="stretch">
            <Heading as="h2" size="lg">Create a New Post</Heading>
            <Input
              placeholder="Post Title"
              name="title"
              value={newPost.title}
              onChange={handlePostChange}
            />
            <Textarea
              placeholder="Post Content"
              name="content"
              value={newPost.content}
              onChange={handlePostChange}
            />
            <Button colorScheme="blue" onClick={handlePostSubmit}>Submit Post</Button>
          </VStack>
        </Box>
        <VStack spacing={8} width="100%" align="stretch">
          <Heading as="h2" size="lg">Latest Posts</Heading>
          {posts.map((post, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">{post.title}</Heading>
              <Text mt={2}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;