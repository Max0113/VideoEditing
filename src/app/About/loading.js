import React from 'react'
import Navbar from "@/components/Navbar";

function Loading() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-full border-[3px] border-slate-200 border-t-black animate-spin" />
      </div>
    </div>
  )
}

export default Loading