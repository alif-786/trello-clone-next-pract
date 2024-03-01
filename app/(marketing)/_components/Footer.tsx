import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full  bg-slate-100 p-4 border-t">    
            <div className="md:max-w-screen-2xl mx-auto flex justify-between w-full items-center">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex justify-between items-center">
                    <Button variant={"ghost"} size={'sm'} >Privacy policy
                    </Button>

                     <Button variant={"ghost"} size={'sm'} >
                           Tearms of Services
                   </Button>
                </div>
           </div>
        </div>
    );
};
