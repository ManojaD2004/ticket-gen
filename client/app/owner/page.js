"use client";
import { useState } from "react";


export default function Home() {
    const [name, setName] = useState("");
    const [ename, setEname] = useState("");
    const [otp, setOtp] = useState("");
    const [ename1, setEname1] = useState("");

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

                const genTicker1 = async  (e) => {
                    e.preventDefault();
                                    await fetch("http://localhost:5000/verify/ticket", {
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                          },
                                        body: JSON.stringify({
                                            ticket: otp,
                                            ename: ename1
                                        }),
                                        method: "POST",
                                }).then(response => response.json().then(data => {data.isTrue ? window.alert("Otp Verfied!") : window.alert("Otp Not Verfied!")}))
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
        <h1 className="text-3xl font-bold mt-10">Verfiy  - <span>Otp</span></h1>
        <form className="mt-3 flex flex-col space-y-3">
            <label className="text-2xl mr-3">Enter Your Event Name: </label>
            <input onChange={(e) => {setEname1(e.target.value)}} value={ename1} type="text" className="bg-slate-100 border-0 outline-0" />
            <label className="text-2xl mr-3">Verfiy Otp: </label>
            <input onChange={(e) => {setOtp(e.target.value)}} value={otp} type="text" className="bg-slate-100 border-0 outline-0" />
            <button className="bg-green-400" onClick={genTicker1}>Submit</button>
        </form>
      </div>
    </main>
  );
}
