import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="text-center p-10 bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Welcome to My Restaurant</h1>
      <p className="text-lg mt-4">The best food in town!</p>
    </div>
  );
}