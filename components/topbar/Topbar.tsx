"use client";

import React, { useState } from "react";
import QuestionPalette from "@/components/topbar/QuestionPallete";
import { Toaster, toast } from "react-hot-toast";

const Topbar = () => {
  const [showPalette, setShowPalette] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePalette = () => {
    setShowPalette(!showPalette);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmEndTest = async () => {
    //    try {
    //      const endRes: Response = await fetch("/api/v1/users/end", {
    //        method: "PATCH",
    //        headers: { "Content-Type": "application/json" },
    //        body: JSON.stringify({
    //          id: user?.unsafeMetadata.userId,
    //        }),
    //      });
    //
    //      const res = await fetch("/api/delete-user", {
    //        method: "delete",
    //      });
    //
    //      closeModal();
    //
    //      if (!res.ok) {
    //        return toast.error("Not Successful!! Please Try Again!!", {
    //          position: "top-center",
    //        });
    //      }
    //
    //      toast.success("Test Ended", {
    //        duration: 4000,
    //        position: "top-center",
    //      });
    //
    //      signOut();
    //    } catch (err) {
    //      console.error("Failed to end test:", err);
    //      toast.error("Failed to end test. Please try again.", {
    //        duration: 4000,
    //        position: "top-center",
    //      });
    //    }
  };

  return (
    <>
      <div className="bg-primary min-w-full bg-slate-50 py-2 px-5 flex items-center justify-between border-b border-black">
        <div className="hidden md:block font-semibold text-lg items-center sm:flex">
          Flexing CSS
        </div>

        <div className="flex justify-center">
          <div className="flex flex-row items-center">
            <div>
              <button
                onClick={togglePalette}
                className="mr-4 bg-black text-white px-3 py-1 rounded text-sm"
              >
                Show Questions
              </button>
              {showPalette && <QuestionPalette onClose={togglePalette} />}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Topbar;
