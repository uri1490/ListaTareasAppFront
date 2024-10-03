import { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useFetchCreateTask } from "../hooks/useFetchCreateTask";
import { useFetchGetTasks } from "../hooks/useFetchGetTasks";
import { useFetchDeleteTask } from "../hooks/useFetchDeleteTask";
export const ListTaskComponent = () => {
  const [task, setTarea] = useState("");

  const [tareas, setTareas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const eliminarTarea = async (id) => {
    await useFetchDeleteTask(id);
    console.warn(id);
    setIsLoading(true);
  };
  const createTask = () => {
    console.log({ titulo: task });
    useFetchCreateTask({ titulo: task });
    setIsLoading(true);
  };
  const getdata = async () => {
    const tareas = await useFetchGetTasks();
    setTareas(tareas);
    console.warn("tareasss", tareas);
    setIsLoading(false);
  };
  useEffect(() => {
    if (isLoading) getdata();
  }, [isLoading]);

  if (isLoading) {
    return (
      <>
        <div>
          <h1>Cargando....</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className=" flex justify-center items-center h-[100vh]">
        <div className="p-1 bg-yellow-200 flex flex-col space-y-1">
          <div
            className="flex
          "
          >
            <input
              type="text"
              className="rounded-sm mr-1 bg-blue-100"
              placeholder="Ingresa tarea"
              onChange={(e) => {
                setTarea(e.target.value);
              }}
            />
            <button
              className="bg-green-500 rounded-sm p-1 text-white"
              onClick={createTask}
            >
              agregar
            </button>
          </div>
          {tareas.map((tarea) => (
            <div
              key={tarea.id}
              className="bg-white flex justify-between items-center p-1 rounded-sm"
            >
              <label htmlFor="" className="font-thin">
                {tarea.titulo}
              </label>
              <FaWindowClose
                className="fill-red-500 cursor-pointer"
                onClick={() => eliminarTarea(tarea.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
