import Image from "next/image";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

export default function Home() {
  return (
    <main className="flex flex-col h-screen overflow-clip">
      <Navbar />
      
      <Body/>
      
    </main>
  );
}
