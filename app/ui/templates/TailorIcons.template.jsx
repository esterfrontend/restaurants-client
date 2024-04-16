import TailorIcon from "@/app/ui/components/Icons/TailorIcon/TailorIcon";

export default function TailorIconsTemplate ({children}) {
    return (
        <div className="flex flex-col items-center px-5 lg:px-10">
            <TailorIcon/>

            <div className="w-full flex flex-col justify-center items-center my-10">
                {children}
            </div>

            <TailorIcon/>
        </div>
    )
}