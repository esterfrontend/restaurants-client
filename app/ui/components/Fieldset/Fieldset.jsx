export default function Fieldset ({type='text', name, id, labelText, placeholder=''}) {
    const styledInput = "block w-full text-2xl border border-black py-2 px-6 rounded-3xl bg-transparent"
    const styledPlaceholderInput = "placeholder:text-black"
    const styledFocusInput = "focus-visible:outline-0"
    
    return (
        <fieldset>
            { labelText &&
                <label 
                    htmlFor={name}
                    className="block text-2xl font-semibold mb-2"
                >
                    {labelText}
                </label>
            }
            
            { type === 'textarea' ? (
                <textarea 
                    name={name} 
                    id={id}
                    placeholder={placeholder}
                    className={`h-[100px] ${styledInput} ${styledPlaceholderInput} ${styledFocusInput}`}
                />
            ) : (
                <input 
                    name={name} 
                    id={id}
                    type={type} 
                    placeholder={placeholder}
                    className={`${styledInput} ${styledPlaceholderInput} ${styledFocusInput}`}
                />
            )
            }
        </fieldset>
    )
}