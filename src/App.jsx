import { Box, Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Form } from "./Components/Form";
import { Task } from "./Components/Task";
import { v4 as uuidv4 } from "uuid";

export function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const tasksInLocal = localStorage.getItem("user");
      return tasksInLocal ? JSON.parse(tasksInLocal) : [];
    } catch (error) {
      return [];
    }
  });
  const [task, setTask] = useState({
    id: uuidv4(),
    text: "",
    completed: false,
  });
  const { text } = task;

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const changeInput = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const actionAdd = () => {
    if (text !== "") {
      addTask(task);
      setTask({ id: uuidv4(), text: "", completed: false });
    }
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const toggleCompleted = (id) => {
    const newTasks = [...tasks];
    const newArr = newTasks.find((task) => task.id === id);
    newArr.completed = !newArr.completed;
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(tasks));
  }, [tasks]);

  console.log(task);
  console.log(tasks);
  return (
    <Container maxW="sm" fontSize="4xl">
      <Box bg="cyan.300" mt={8} borderRadius={16}>
        <Text as="h1" textAlign="center" p={4}>
          Todo-list
        </Text>
        <Form changeInput={changeInput} actionAdd={actionAdd} task={task} />
        <Task
          tasks={tasks}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      </Box>
    </Container>
  );
}
