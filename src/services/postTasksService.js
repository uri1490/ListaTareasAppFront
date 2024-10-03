import React from "react";
import axios from "axios";
export const postTasksService = async (tarea) => {
  const response = await axios.post("http://localhost:8080/api/create", tarea);
  console.warn(response.status);
};
