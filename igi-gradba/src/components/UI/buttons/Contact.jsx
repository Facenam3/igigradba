export default function ContactUs({...props}) {
    return (
        <button 
            className="bg-white hover:bg-orange-400 border-2 border-orange-400 hover:border-amber-50 text-orange-500 hover:text-white cursor-pointer font-semibold text-md rounded-2xl py-2 px-3"
            {...props}
        >
            Контакт
        </button>
    );
}