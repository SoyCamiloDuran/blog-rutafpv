import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { Link } from "react-router-dom"

function Error404(){
    return(
        <FullWidthLayout>
            <section className="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-24">
                <div className="space-y-5 sm:space-y-4">
                    <img className="w-full h-full object-center object-cover mb-16" src="https://media.discordapp.net/attachments/580262996840808448/1196597941071253504/404.png?ex=65b835ac&is=65a5c0ac&hm=6a6c2521c657a08f12749a1d01da0e933babd1d98d300f2236f6e7d999b5854d&=&format=webp&quality=lossless&width=960&height=386" alt="404"/>

                    <h2 className="text-3xl text-center font-gilroy-black tracking-tight sm:text-4xl dark:text-white">Lo sentimos, no se puede encontrar la página.</h2>
                    <p className="text-xl text-gray-500 text-center">La página que estaba buscando parece haber sido movida, eliminada o no existe.</p>

                    <Link to="/" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700">
                        Inicio
                    </Link>
                </div>

            </section>
        </FullWidthLayout>
    )
}

export default Error404