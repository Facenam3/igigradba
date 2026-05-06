export default function CardSection({children}){
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 px-5 my-5">
            {children}
        </div>
    );
}