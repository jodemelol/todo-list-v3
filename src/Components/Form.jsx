import { Button, Input, Stack } from "@chakra-ui/react";

export function Form({ changeInput, actionAdd, task }) {
  const { text } = task;
  return (
    <form>
      <Stack direction="row" p={8} onChange={(e) => e.preventDefault()}>
        <Input
          bg="whiteAlpha.900"
          onChange={(e) => changeInput(e)}
          name="text"
          type="text"
          value={text}
        ></Input>
        <Button
          fontSize={20}
          colorScheme="linkedin"
          onClick={() => actionAdd()}
        >
          Add
        </Button>
      </Stack>
    </form>
  );
}
