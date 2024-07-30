'use client'
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import CountdownTimer from "./CountdownTimer";

const Topbar = () => {
    const handleTimeUp = () => {
        alert("Time's up");
    }
    return (
        <div className="bg-primary bg-[#FAF9F6] py-2 px-5 flex items-center justify-between border-b-2 border-black">
            <div className="items-center flex">
                <Link href="/" className="font-bold text-xl flex items-center">
                    Flexing CSS
                </Link>
            </div>

            <div className="flex flex-row items-center">
                <div className="mx-4 px-2 py-1 border-black border-2 rounded">
                    <CountdownTimer initialTime={300} onTimeUp={handleTimeUp} />
                </div>
                <div>
                    {/*Question pallete*/}
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="focus:outline-none">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link href="/profilea">
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="/auth">
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}

export default Topbar;