import { Logo } from "@/assets/homepage/icons";

export default function Header() {

    return (
        <div >
            <div className="flex flex-col justify-center items-center">
                <div className="relative top-[72px]">
                    <Logo />
                </div>
            </div>
        </div>


    );
}
