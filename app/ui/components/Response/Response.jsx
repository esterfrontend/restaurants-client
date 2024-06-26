import Button from "@/app/ui/components/Button/Button";

export default function Response ({text, href, buttonText}) {
    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <p className="text-tailor-blue font-semibold">{text}</p>
            { href && buttonText &&
                <Button href={href}>{buttonText}</Button>
            }
        </div>
    )
}