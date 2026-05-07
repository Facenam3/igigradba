import MainHeader from "../../components/UI/MainHeader.jsx";
import SemiHeader from "../../components/UI/SemiHeader.jsx";

export default function ContactUs() {
    return (
        <section
            className="lg:py-20 py-10 px-3"
        >
            <MainHeader 
                title="имате проект?"
            />
            <SemiHeader
                description="Контактирајте не за професионална консултација и понуда."
            />
            <div className="flex lg:flex-row flex-col-reverse justify-center items-center gap-4">
                    <a
                        href="tel:+38971949527"
                        className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 transition hover:bg-white/20"
                    >
                        <i className="fa-solid fa-phone text-amber-400"></i>
                        <span>+389 71 949 527</span>
                    </a>

                    <a
                        href="tel:+38978284974"
                        className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 transition hover:bg-white/20"
                    >
                        <i className="fa-solid fa-phone text-amber-400"></i>
                        <span>+389 78 284 974</span>
                    </a>

                    <a
                        href="mailto:igigradba@gmail.com"
                        className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4 transition hover:bg-white/20"
                    >
                        <i className="fa-solid fa-envelope text-amber-400"></i>
                        <span>igigradba@gmail.com</span>
                    </a>
                </div>
        </section>
    );
}