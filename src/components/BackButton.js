'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
    const router = useRouter();
    return (
        <button onClick={() => router.back()} className='flex font-Nunito items-center gap-2 px-4'>
            <IoArrowBack /> Back
        </button>
    )
}

export default BackButton