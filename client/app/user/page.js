import Image from "next/image";
import Box from "./Box";

export default function User() {
return(
<div className="px-40">
  <header className="w-full h-[200px] flex items-center justify-center">
<p className="text-3xl font-bold">User-Join Event</p>
  </header>
  <Box/>
</div>
)
}