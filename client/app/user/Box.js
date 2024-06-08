"use client";

import { useEffect, useState } from "react";

export default function Box(){
    const [tickets, setTckets] = useState([]);
    const [otp, setOtp] = useState({ename: "", otp: ""});
useEffect(() => {
fetch("http://localhost:5000/getevents").then(res => res.json().then(data => setTckets(data.dir)))
}, [])

    return(
        <>
        {tickets.map(ele => (
            <div className="w-full h-[220px] px-44 py-4 bg-blue-200 flex mt-5">
    <div className="flex flex-col p-8 gap-y-16">

    <img alt="profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className=" float-left w-20"/>
    </div>
    <div className="justify-center items-center w-full flex">
    <p className="text-3xl font-semibold ">{ele}</p>
    </div>
    <div className="flex flex-col p-8 pt-20 gap-y-6">
        <button onClick={() => {
            fetch("http://localhost:5000/generate/ticket", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    ename: ele
                }),
                method: "POST",
            }).then(res => res.json().then(data => setOtp({ename: ele, ticket: data.ticket})));
        }} className=" bg-green-500 px-4 py-2 rounded-md">Join</button>
        <p className="px-4 text-2xl">{otp.ename === ele ? otp.ticket : ""}</p>

    </div>
    
        
</div>)
        )}
        

        </>

    )
}

