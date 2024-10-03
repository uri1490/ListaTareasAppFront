import axios from "axios";
import React from "react";

export const deleteTaskService = async (id) => {
  const response = await axios.delete("http://localhost:8080/api/delete/" + id);
  console.warn(response.status);
};
