import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import GridContainer from "../components/UI/GridContainer";
import MainHeader from "../components/UI/MainHeader";
import SemiHeader from "../components/UI/SemiHeader";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
    const [isSending, setIsSending] = useState(false);
    const [formStatus, setFormStatus] = useState(null);
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const fromName = formData.get("from_name")?.trim();
        const phone = formData.get("phone")?.trim();
        const fromEmail = formData.get("from_email")?.trim();
        const message = formData.get("message")?.trim();

        if(!fromName || !phone || !fromEmail || !message) {
            setFormStatus({
                type: "error",
                message: "Ве молиме пополнете ги сите полиња.",
            });
            return;
        }

        setIsSending(true);
        setFormStatus(null);

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                publicKey,
            );

            setFormStatus({
                type: "success",
                message: "Пораката е успешно испратена!",
            });

            e.target.reset();
        } catch(error) {
            console.error(error);

            setFormStatus({
                type: "error",
                message: "Настана грешка. Обидете се повторно.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="py-36 px-3">
            <div className="container mx-auto">
                <SemiHeader description="КОНТАКТ" />

                <MainHeader title="Контактирајте не за професионална понуда и консултација" />

                <p className="max-w-3xl mx-auto text-center text-gray-600 leading-8 mt-5">
                    Доколку имате прашања, потреба од консултација или сакате
                    понуда за вашиот проект, контактирајте не. Нашиот тим е
                    подготвен да ви помогне со професионален пристап и навремена
                    комуникација.
                </p>

                <GridContainer>
                    <div className="bg-gradient-to-br from-zinc-950 to-zinc-600 rounded-3xl px-6 py-8 lg:px-10 lg:py-12 shadow-xl text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Контакт информации
                        </h3>

                        <p className="text-gray-300 leading-7 mb-8">
                            Јавете ни се или испратете порака за консултација,
                            понуда или повеќе информации околу вашиот проект.
                        </p>

                        <div className="flex flex-col gap-4">
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

                           <div className="flex items-start gap-3 rounded-xl bg-white/10 px-5 py-4 transition hover:bg-white/20">
                                <i className="fa-solid fa-map-location-dot text-amber-400 mt-1"></i>

                                <div>
                                    <p className="font-semibold">
                                        Област на работа
                                    </p>

                                    <p className="text-sm text-gray-300">
                                        Работиме на проекти низ цела Македонија
                                    </p>
                                </div>
                            </div>

                            <p className="flex items-center gap-3 rounded-xl bg-white/10 px-5 py-4">
                                <i className="fa-solid fa-clock text-amber-400"></i>
                                <span>Понеделник - Сабота: 08:00 - 17:00</span>
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl px-6 py-8 lg:px-10 lg:py-12 shadow-xl border border-amber-600 bg-white">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-6">
                            Испратете порака
                        </h3>

                        {formStatus && (
                            <p
                                className={`rounded-xl px-4 py-3 text-sm font-medium mb-5 ${
                                    formStatus.type === "success"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                }`}
                            >
                                {formStatus.message}
                            </p>
                        )}

                        <form 
                            ref={form}
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Вашето име"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Телефон"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
                            />

                            <input
                                type="email"
                                name="from_email"
                                placeholder="Е-пошта"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-500"
                            />

                            <textarea
                                rows="5"
                                name="message"
                                placeholder="Вашата порака"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-500 resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-amber-500 px-6 py-4 font-bold text-gray-50 transition hover:bg-amber-400"
                                disabled={isSending}
                            >
                                {isSending ? "Се испраќа..." : "Испрати порака"}
                            </button>
                        </form>
                    </div>
                </GridContainer>
            </div>
        </section>
    );
}