export default function MainHeader({title, text}) {

    if(text) {
        return (
            <h2 
                className="lg:text-3xl text-xl font-bold text-center capitalize text-white"
            >
                {title}
            </h2>
        )
    }

    return (
        <h2 
            className="lg:text-3xl text-xl font-bold text-center capitalize text-orange-500"
        >
            {title}
        </h2>
    );
}