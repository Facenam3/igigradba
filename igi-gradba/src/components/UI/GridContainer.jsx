export default function GridContainer({children}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            {children}
        </div>
    );
}