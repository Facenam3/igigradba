export default function NavigationMenuButton({ isOpen, onClick }) {
    return (
        <button
            onClick={onClick}
            className="lg:hidden cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <i
                className={`fa-solid ${
                    isOpen ? "fa-xmark" : "fa-bars"
                } text-3xl`}
            ></i>
        </button>
    );
}