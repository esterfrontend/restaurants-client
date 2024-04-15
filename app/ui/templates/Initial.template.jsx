import Logo from "../components/logo/logo";

export default function InitialTemplate({children, page, bgColor='tailor-blue', logoColor}) {
    return (
        <div className="flex gap-10 items-end p-10 flex-1">
            <div className={`w-1/2 flex flex-col gap-10 bg-${bgColor} rounded-xl p-6`}>
                <Logo fill={logoColor}/>
                {children}
            </div>
            <div className={`w-1/2 h-full overflow-hidden rounded-xl relative bg-${page} bg-cover bg-center`}></div>
        </div>
    );
}