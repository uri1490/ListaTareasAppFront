import React, { useState } from "react";
import { getTasksService } from "../services/getTasksService";

export const useFetchGetTasks = async () => {
  const getTareas = await getTasksService();

  return getTareas.data;
};
