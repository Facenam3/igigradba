export default function ContactUs({...props}) {
    return (
        <button 
            className="bg-white hover:bg-cyan-600 border-2 border-blue-400 hover:border-white text-blue-500 hover:text-white font-semibold text-md rounded-2xl py-2 px-3"
            {...props}
        >
            Контакт
        </button>
    );
}