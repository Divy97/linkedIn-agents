'use client'
import { Button } from "@/components/ui/button";

export default function Home() {
  const checkBackendHealth = async () => {
    const response = await fetch('http://localhost:3001/health');
    const data = await response.json();
    console.log(data);
  }
  
  return <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <Button className="text-2xl py-5" onClick={() => checkBackendHealth()}>Click me</Button>
      </div>
  </div>;
}