import axios from "axios";
import React from "react";

export const getTasksService = async () => {
  const response = await axios.get("http://localhost:8080/api/getTareas");
  console.warn(response.status);

  return response;
};
