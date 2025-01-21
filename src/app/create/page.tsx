'use client'
import React, { useState } from "react";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header";
import { BackIcon, PlusIcon } from "@/assets/homepage/icons";
import { postData } from "@/utils/apiClient";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

interface ColorOption {
    title: string;
    color: string;
    hex: string;
}

const Page = () => {
    const [title, setTitle] = useState<string>("");
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [status, setStatus] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const colorOptions: ColorOption[] = [
        { title: "Red", color: "bg-[#FF3B30]", hex: "#FF3B30" },
        { title: "Orange", color: "bg-[#FF9500]", hex: "#FF9500" },
        { title: "Yellow", color: "bg-[#FFCC00]", hex: "#FFCC00" },
        { title: "Green", color: "bg-[#34C759]", hex: "#34C759" },
        { title: "Indigo", color: "bg-[#5856D6]", hex: "#5856D6" },
        { title: "Purple", color: "bg-[#AF52DE]", hex: "#AF52DE" },
        { title: "Pink", color: "bg-[#FF2D55]", hex: "#FF2D55" },
        { title: "Brown", color: "bg-[#A2845E]", hex: "#A2845E" },
    ];

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setStateFunc: React.Dispatch<React.SetStateAction<string>>
    ) => {
        event.preventDefault();
        setStateFunc(event.target.value);
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !selectedColor) return; 
        await postData({ color: selectedColor, title, status });
        setSubmitted(true);
        toast.success('Task created successfully!');
    };

    return (
        <div className='flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 w-full'>
            <Header />
            <div className="relative top-[173px] flex flex-col justify-center items-center w-full sm:w-[736px] text-[16px] leading-[19px] font-semibold py-[16px] rounded-[12px]">

                <div className="w-full mb-4">
                    <Link href={"/"} className="my-4 mb-6">
                        <BackIcon />
                    </Link>
                    <label className="block text-[#4EA8DE] text-sm font-bold mb-2 mt-4" htmlFor="username">
                        Title
                    </label>
                    <input
                        className="bg-[#333333] shadow appearance-none h-14 border border-[#333333] rounded-lg w-full py-2 px-3 text-sm font-normal leading-5 text-left text-[#F2F2F2] focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Ex. Brush Your Teeth"
                        value={title}
                        onChange={(e: any) => handleChange(e, setTitle)}
                    />
                </div>

                <div className="w-full">
                    <label htmlFor="colorSelect" className="block text-sm font-bold mb-2 text-[#4EA8DE]">
                        Color:
                    </label>
                    <div className="flex mb-4">
                        {colorOptions.map((option) => (
                            <button
                                key={option.hex}
                                className={`${option.color} w-14 h-14 rounded-full mr-4`}
                                onClick={() => setSelectedColor(option.hex)}
                                type="button"
                                aria-label={`Select ${option.title}`}
                            />
                        ))}
                    </div>
                </div>

                <Button
                    disabled={!title || !selectedColor}
                    icon={<PlusIcon />}
                    classNames="w-full sm:w-[736px] text-[16px] leading-[19px] mt-11 font-semibold px-[37px] py-[16px] bg-[#1E6F9F] hover:bg-[#1E6F9FCC] text-[#FEFEFE] rounded-[12px] flex items-center justify-center"
                    onClick={onSubmit}
                >
                    {submitted === true ? 'Saved' : 'Add Task'}
                </Button>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Page;
