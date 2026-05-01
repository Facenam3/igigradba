export default function Card({title, img, description, ...props}) {
    return (
        <div 
            {...props}
            className="border-2 border-amber-600 rounded-xl shadow-lg w-1/3"
        >
            <div className="card-head">
                <div className="img ">
                    <img
                        className="min-h-full min-w-full rounded-t-xl object-cover"
                        src={img} alt="service picture" 
                    />
                </div>
            </div>
            <div className="card-body p-3">
                <h3 className="text-amber-800 font-bold text-center lg:text-2xl" >{title}</h3>
                <p className="text-md text-gray-600">{description}</p>
            </div>
        </div>
    );
}