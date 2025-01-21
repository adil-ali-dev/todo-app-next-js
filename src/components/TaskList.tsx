"use client"
import { useEffect, useState } from 'react';
import { deleteData, getData, updateData } from '@/utils/apiClient';
import { TrashIcon } from '@/assets/homepage/icons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Task {
    id: string,
    title: string;
    color: string;
    status: boolean
}
export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([])

    const handleGetData = async () => {
        try {
            const data = await getData();
            console.log(data)
            setTasks(data.response);
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error('Something went wrong while fetching the tasks!');
        }
    };
    const handledeleteData = async (id: string) => {
        try {
            const data = await deleteData(id);
            await handleGetData();
            toast.success('Task deleted successfully!');
        } catch (error) {
            console.error("Error while deleting data:", error);
            toast.error('Something went wrong while deleting the task!');
        }
    };
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleCheckboxChange = async (task: Task) => {
        try {
            const data = await updateData({ ...task, status: !task.status }, task.id);
            await handleGetData();
            toast.success('Task State updated successfully!');
        } catch (error) {
            console.error("Error while updating data:", error);
            toast.error('Something went wrong while updating the task!');
        }

    };
    useEffect(() => {
        handleGetData();
    }, []);

    return (
        <div className="w-full">
            <div className="relative w-full">
                <div className='flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0  w-full '>
                    <div className='w-full'>
                        <div className="flex justify-between items-center w-full p-4">
                            <span className="text-lg font-semibold text-[#4EA8DE]">Tasks :  <span className='text-white bg-gray-700 w-4 h-4 px-2 py-0 rounded-full'>{tasks.length}</span></span>
                            <span className="text-lg font-semibold text-[#4EA8DE]">Completed :<span className='text-white bg-gray-700 w-4 h-4 px-2 py-0 rounded-full'>{tasks.filter((task) => task.status === true).length}</span></span>
                        </div>
                        <ul className="divide-y divide-gray-200 px-4">
                            {tasks && tasks?.map((task, idx) => (
                                <li className="py-4">
                                    <div
                                        className="flex items-center justify-between w-full rounded-lg py-2 px-2"
                                        style={{ borderColor: task.color, borderWidth: '2px' }}
                                    >
                                        <input
                                            id="todo1"
                                            name="todo1"
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={() => handleCheckboxChange(task)}
                                            className={`h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded-full ${task.status && 'line-through'}`}

                                        />
                                        <label htmlFor="todo1" className="flex flex-grow justify-start px-4 text-gray-900 ">
                                            <span className={`text-lg font-medium text-white  ${task.status === true && 'line-through'} `}>{task.title}</span>
                                        </label>
                                        <div onClick={() => { handledeleteData(task?.id) }}>
                                            <span className="ml-3" >
                                                <TrashIcon />
                                            </span>
                                        </div>
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
