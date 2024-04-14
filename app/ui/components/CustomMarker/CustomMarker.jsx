export default function CustomMarker ({fill}) {
    return (
        <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 40C15 40 30 23.5195 30 15.1515C30 6.78356 23.2843 0 15 0C6.71573 0 0 6.78356 0 15.1515C0 23.5195 15 40 15 40ZM15 14.5455C17.1539 14.5455 18.9 12.7817 18.9 10.6061C18.9 8.43039 17.1539 6.66667 15 6.66667C12.8461 6.66667 11.1 8.43039 11.1 10.6061C11.1 12.7817 12.8461 14.5455 15 14.5455Z" 
            className={`fill-${fill}`}
            />
        </svg>
    )
}