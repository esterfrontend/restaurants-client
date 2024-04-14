import Button from "@/app/ui/components/Button/Button";

export default function Response ({text, href, buttonText}) {
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <p className="text-tailor-blue text-2xl font-semibold">{text}</p>
            <Button href={href}>{buttonText}</Button>
        </div>
    )
}