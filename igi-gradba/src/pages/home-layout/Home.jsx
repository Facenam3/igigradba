import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Construction site"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-5 text-center">
                <div className="max-w-4xl text-white">
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Кога квалитетот е 
                        <span className="text-orange-400"> Приоритет</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
                        Со долгогодишно искуство и посветеност, градиме квалитетни и трајни објекти низ Македонија.
                        Од станбени до комерцијални проекти, работиме со прецизност и доверба.
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <NavLink 
                            to="/contact"
                            className="w-full rounded-2xl border-2 border-amber-500 bg-amber-500 px-6 py-3 text-base font-semibold capitalize text-white transition hover:bg-orange-500 sm:w-auto md:text-xl cursor-pointer">
                            побарај понуда
                        </NavLink>

                        <NavLink 
                            to="/projects"
                            className="w-full rounded-2xl border-2 border-white bg-transparent px-6 py-3 text-base font-semibold capitalize text-white transition hover:bg-white hover:text-black sm:w-auto md:text-xl cursor-pointer">
                            погледни проекти
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}