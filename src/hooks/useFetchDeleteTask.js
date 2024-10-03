import React from "react";
import { deleteTaskService } from "../services/deleteTaskService";

export const useFetchDeleteTask = async (id) => {
  const deleteTask = await deleteTaskService(id);
};
