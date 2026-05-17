import MainHeader from "../components/UI/MainHeader.jsx";
import SemiHeader from "../components/UI/SemiHeader.jsx";

import projectImg from "../assets/projects/project-1/IMG_6581.jpeg";

export default function AboutUs() {
    return (
        <section className="py-36 px-3">
            <div className="container mx-auto">
                <SemiHeader description="ЗА НАС" />

                <MainHeader title="Градиме со квалитет, искуство и доверба" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
                    <div className="bg-gradient-to-br from-zinc-950 to-zinc-800 rounded-3xl px-6 py-8 lg:px-10 lg:py-12 shadow-xl">
                        <div className="space-y-5 text-gray-200 text-base lg:text-lg leading-8">
                            <p>
                                Со години искуство во градежништвото и јасна визија за
                                квалитетна и сигурна изведба, нашата компанија започна
                                како идеја изградена врз труд, посветеност и доверба.
                            </p>

                            <p>
                                Денес, со професионален пристап и внимание кон секој детал,
                                работиме на реализација на станбени, деловни и надворешни
                                проекти кои ги исполнуваат највисоките стандарди.
                            </p>

                            <p>
                                Веруваме дека секој проект претставува долгорочна инвестиција.
                                Затоа се стремиме кон квалитетна изведба, почитување на
                                договорените рокови и целосна посветеност кон потребите
                                на клиентите.
                            </p>

                            <p>
                                Со комбинација од искуство, современи решенија и професионален
                                тим, продолжуваме да градиме доверба преку секој успешно
                                реализиран проект.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-5 text-center">
                                <p className="text-amber-600 font-semibold">
                                    Квалитетна изведба
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-5 text-center">
                                <p className="text-amber-600 font-semibold">
                                    Почитување на рокови
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-5 text-center">
                                <p className="text-amber-600 font-semibold">
                                    Професионален пристап
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img 
                            src={projectImg}
                            alt="Градежна компанија"
                            className="rounded-3xl shadow-xl w-full h-[420px] lg:h-[540px] object-cover"
                        />

                        <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl shadow-xl px-6 py-5">
                            <p className="text-zinc-900 font-bold text-xl">
                                Доверба изградена преку секој проект
                            </p>

                            <p className="text-gray-600 mt-2 text-sm leading-6">
                                Посветени сме на квалитетна, сигурна и навремена изведба.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}