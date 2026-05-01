export default function WorkProcessCard({ icon, title, description }) {
    return (
        <div className="lg:rounded-3xl rounded-xl border bg-gradient-to-r from-amber-950 to-amber-600 p-6 text-center text-white shadow-lg my-5">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-black">
                {icon}
            </div>

            <h3 className="mb-3 text-lg font-bold md:text-xl">
                {title}
            </h3>

            <p className="text-md leading-relaxed text-white md:text-sm">
                {description}
            </p>
        </div>
    );
}4