export default function CardSection({ children, columns = 4 }) {
    return (
        <div
            className={`
                grid grid-cols-1 gap-6 px-5 mt-8
                md:grid-cols-2
                ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}
            `}
        >
            {children}
        </div>
    );
}