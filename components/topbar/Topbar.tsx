"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import QuestionPalette from "@/components/topbar/QuestionPallete";
import { Toaster, toast } from "react-hot-toast";
import Modal from "@/components/EndTestModal";
import { useUser, useClerk } from "@clerk/nextjs";

const Topbar = () => {
  const [showPalette, setShowPalette] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useUser();
  const { signOut } = useClerk();

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
    try {
      if (user?.unsafeMetadata.rollNumber === "22001011010") return;

      const endRes: Response = await fetch("/api/v1/users/end", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: user?.unsafeMetadata.userId,
        }),
      });

      const res = await fetch("/api/delete-user", {
        method: "delete",
      });

      closeModal();

      if (!res.ok) {
        return toast.error("Not Successful!! Please Try Again!!", {
          position: "top-center",
        });
      }

      toast.success("Test Ended", {
        duration: 4000,
        position: "top-center",
      });

      signOut();
    } catch (err) {
      console.error("Failed to end test:", err);
      toast.error("Failed to end test. Please try again.", {
        duration: 4000,
        position: "top-center",
      });
    }
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
            <div className="mx-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none">
                  <Avatar>
                    <AvatarImage src={user?.imageUrl} />
                    <AvatarFallback>
                      {user?.firstName?.substring(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-50 shadow-lg">
                  <DropdownMenuLabel>
                    {user?.unsafeMetadata?.rollNumber as String}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onSelect={openModal}>
                    <DropdownMenuItem>
                      <p className="text-red-800 font-bold cursor-pointer">
                        End Test
                      </p>
                    </DropdownMenuItem>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmEndTest}
      />
      <Toaster />
    </>
  );
};

export default Topbar;
