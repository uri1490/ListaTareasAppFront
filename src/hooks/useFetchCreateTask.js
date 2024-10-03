import React from "react";
import { postTasksService } from "../services/postTasksService";

export const useFetchCreateTask = async (tarea) => {
  const createTask = await postTasksService(tarea);
};
