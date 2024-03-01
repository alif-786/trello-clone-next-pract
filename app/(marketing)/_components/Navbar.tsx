import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full flex items-center bg-white h-14 px-4 shadow-sm border-b">
            <div className="md:max-w-screen-2xl mx-auto flex justify-between w-full items-center">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex justify-between items-center">
                    <Button variant={"outline"} size={"sm"} asChild>
                      <Link href='/sign-in'>Login</Link>
                    </Button>

                     <Button size={'sm'} asChild >
                        <Link href='/sign-up'>
                            Get Taskify Free
                      </Link>
                   </Button>
                </div>
           </div>
        </div>
    );
};
