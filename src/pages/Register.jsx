import { useState } from "react";
import { Container, Heading, VStack, Input, Button, FormControl, FormLabel, Text, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      // Mock implementation for demo purposes
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = users.some((user) => user.username === username);

      if (userExists) {
        setError("Username already exists");
      } else {
        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        setAuth({ username, password });
        navigate("/login");
      }
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <Container centerContent maxW="container.sm" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Register</Heading>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl id="username" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleRegister}>Register</Button>
        <Text>
          Already have an account? <Button variant="link" onClick={() => navigate("/login")}>Log in</Button>
        </Text>
      </VStack>
    </Container>
  );
};

export default Register;