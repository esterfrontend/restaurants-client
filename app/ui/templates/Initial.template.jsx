export default function InitialTemplate({children, page, bgColor='tailor-blue', logoColor}) {
    return (
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 items-end p-5 lg:p-10 flex-1">
            <div className={`md:w-1/2 flex flex-col gap-5 lg:gap-10 bg-${bgColor} rounded-xl p-6`}>
                {children}
            </div>
            <div className={`w-full md:w-1/2 h-[300px] md:h-full overflow-hidden rounded-xl relative bg-${page} bg-cover bg-center`}></div>
        </div>
    );
}