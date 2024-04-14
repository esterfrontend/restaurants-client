import Button from "../Button/Button";
import ReviewsStars from "../ReviewsStars/ReviewsStars";

export default function CreateReview () {
    return (
        <aside className='w-1/3 border border-black p-4 rounded-3xl'>
            <ReviewsStars number='0'/>
            <form action="">
                <textarea name="my-review" placeholder='Escribe tu comentario sobre el restaurante'
                    className='w-full h-[100px] text-2xl mt-4 mb-10 focus-visible:outline-0 placeholder:text-black'
                />
                <Button>Enviar</Button>
            </form>
        </aside>
    )
}