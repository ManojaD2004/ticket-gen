"use client";
import { useState } from "react";


export default function Home() {
    const [name, setName] = useState("");
    const [ename, setEname] = useState("");

    const genTicker = async  (e) => {
        e.preventDefault();
                        await fetch("http://localhost:5000/generate", {
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },
                            body: JSON.stringify({
                                name: name, 
                                ename: ename
                            }),
                            method: "POST",
                    }).then(response => response.json().then(data => window.alert("Event Created!")))
                }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold">Owner  - <span>Create Your Event</span></h1>
        <form className="mt-3 flex flex-col space-y-3">
            <label className="text-2xl mr-3">Enter Your Event Name: </label>
            <input onChange={(e) => {setEname(e.target.value)}} value={ename} type="text" className="bg-slate-100 border-0 outline-0" />
            <label className="text-2xl mr-3">Enter Your Name: </label>
            <input onChange={(e) => {setName(e.target.value)}} value={name} type="text" className="bg-slate-100 border-0 outline-0" />
            <button className="bg-green-400" onClick={genTicker}>Submit</button>
        </form>
      </div>
    </main>
  );
}
