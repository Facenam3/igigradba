export default function SemiHeader({description, text}) {
    if(text) {
        return (
            <p 
                className="lg:text-xl text-md text-white my-2 lg:w-2/4 w-3/4 mx-auto text-center"
            >
                {description}
            </p>
        );
    }

    return (
        <p 
            className="lg:text-xl text-md text-gray-800 my-2 lg:w-2/4 w-3/4 mx-auto text-center"
        >
            {description}
        </p>
    );
}