import { useState } from "react";
import { Container, Heading, VStack, Input, Button, FormControl, FormLabel, Text, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        setAuth(user);
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <Container centerContent maxW="container.sm" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Login</Heading>
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
        <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
        <Text>
          Don't have an account? <Button variant="link" onClick={() => navigate("/register")}>Register</Button>
        </Text>
      </VStack>
    </Container>
  );
};

export default Login;