import MainHeader from "../components/UI/MainHeader.jsx";
import SemiHeader from "../components/UI/SemiHeader.jsx";

export default function PrivacyPolicy() {
    return (
        <section className="py-16 lg:py-36 px-3">
            <div className="container mx-auto max-w-4xl">
                <SemiHeader description="ПРИВАТНОСТ" />

                <MainHeader title="Политика на приватност" />

                <div className="mt-10 rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-600  shadow-xl border border-gray-100 px-6 py-8 lg:px-10 lg:py-12 space-y-8 text-gray-700 leading-8">
                    <p className="text-gray-50">
                        Нашата компанија ја почитува приватноста на посетителите
                        и се обврзува да ги заштити личните податоци кои се
                        доставуваат преку оваа веб-страница.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-amber-600 mb-3">
                            Собирање на информации
                        </h2>

                        <p  className="text-gray-50">
                            При користење на контакт формата, можеме да побараме
                            основни информации како име и презиме, телефонски
                            број, е-пошта и порака или барање.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-amber-600 mb-3">
                            Користење на податоците
                        </h2>

                        <p  className="text-gray-50">
                            Овие информации се користат исклучиво за комуникација
                            со клиентите, одговор на прашања, подготовка на
                            понуди и обезбедување на услуги поврзани со нашата
                            дејност.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-amber-600 mb-3">
                            Споделување на податоци
                        </h2>

                        <p  className="text-gray-50">
                            Собраните информации нема да бидат продавани,
                            изнајмувани или споделувани со трети лица, освен
                            доколку тоа е потребно согласно закон.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-amber-600 mb-3">
                            Безбедност на податоците
                        </h2>

                        <p  className="text-gray-50">
                            Преземаме разумни мерки за заштита на личните
                            податоци и безбедно користење на информациите
                            доставени преку веб-страницата.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-amber-600 mb-3">
                            Колачиња
                        </h2>

                        <p  className="text-gray-50">
                            Веб-страницата може да користи основни колачиња со
                            цел подобро корисничко искуство и анализа на
                            посетеноста. Доколку во иднина користиме дополнителни
                            алатки како Google Analytics или маркетинг пиксели,
                            оваа политика ќе биде соодветно ажурирана.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-amber-600 mb-3">
                            Контакт
                        </h2>

                        <p  className="text-gray-50">
                            За сите прашања поврзани со приватноста и користењето
                            на личните податоци, можете да не контактирате преку
                            телефон или е-пошта наведени на страницата за контакт.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}