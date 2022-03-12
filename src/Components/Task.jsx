import { Button, CloseButton, Stack, Text } from "@chakra-ui/react";

export function Task({ tasks, deleteTask, toggleCompleted }) {
  return (
    <Stack ml={8}>
      {tasks.map(({ text, id, completed }) => (
        <Stack direction="row" alignItems="center" key={id}>
          {!completed ? (
            <Text fontSize="2xl">{text}</Text>
          ) : (
            <Text as="s" fontSize="2xl">
              {text}
            </Text>
          )}
          <CloseButton color="red.400" onClick={() => deleteTask(id)} />
          <Button
            onClick={() => toggleCompleted(id)}
            bg="cyan.300"
            _hover={{ bg: "cyan.300", fontSize: 24 }}
            _focus={{ outline: "none", }}
            _active={{bg: "cyan.500"}}
          >
            📋
          </Button>
        </Stack>
      ))}
    </Stack>
  );
}
