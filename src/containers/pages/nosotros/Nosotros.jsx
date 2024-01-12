import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { connect } from "react-redux"
import { Fragment, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from "react-router-dom"

// const tabs = [
//   {
//     name: 'Uridium Network',
//     features: [
//       {
//         name: 'Network de Uridium hecho por SoloPython',
//         description:
//           'Uridium is an Ethereum ERC-20 Token developed to make ecommerce with cryptocurrency and blockchain game development more accesible and anonymous.',
//         imageSrc: 'https://bafybeidyq5rp55763ts7oel2lsqbsnb55hsoxt5djbs6drm5p4jl4dhj7e.ipfs.dweb.link/uridiumNetwork.PNG',
//         imageAlt: '',
//         url: 'https://uridium.network',
//         tech_stack: [
//             {
//                 name:  'Django Rest Framework',
//                 imageSrc: 'https://bafybeidozsktzxp6jnzwgs5fg6b5yvx7spszpzuyvu4ixb7lvau7yg4rdq.ipfs.dweb.link/django-logo-png-transparent.png',
//             },
//             {
//                 name:  'React',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//             {
//                 name:  'PostgreSQL',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//             {
//                 name:  'Render.com',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//         ]
//       },
//     ],
//   },
//   {
//     name: 'Uridium Finance',
//     features: [
//       {
//         name: 'Empresa Blockchain Fintech',
//         description:
//           'Uridium Finance is an app developed to provide decentralized financial instruments to you via the Ethereum blockchain and the Uridium cryptocurrency.',
//         imageSrc: 'https://bafybeigt44nnjkqdpf65quoyah6zbhuopf5fzdwqutzo5gsxtgraxho7l4.ipfs.dweb.link/uridiumFinance.PNG',
//         imageAlt:
//           '',
//         url: 'https://uridium.finance',
//         tech_stack: [
//             {
//                 name:  'Django Rest Framework',
//                 imageSrc: 'https://bafybeidozsktzxp6jnzwgs5fg6b5yvx7spszpzuyvu4ixb7lvau7yg4rdq.ipfs.dweb.link/django-logo-png-transparent.png',
//             },
//             {
//                 name:  'React',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//             {
//                 name:  'Ethereum',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//             {
//                 name:  'PostgreSQL',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//             {
//                 name:  'Render.com',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//         ]
//       },
//     ],
//   },
//   {
//     name: 'Uridium Marketplace',
//     features: [
//       {
//         name: 'Mercado de Productos y Cursos en Linea',
//         description:
//           "Thanks to decentralized finance, it's possible to launch a business with a product and start making money the first day. This is not without its problems, however, we believe that this are easily dismissed when the bigger picture helps the majority of users.",
//         imageSrc: 'https://bafybeif3lqxefojyq2quzu6t4d7bix2klzez753d56nphjr36vyacmivcm.ipfs.dweb.link/uriidiumMarketplace.PNG',
//         imageAlt: '',
//         url: 'https://uridium.io',
//         tech_stack: [
//             {
//                 name:  'Django Rest Framework',
//                 imageSrc: 'https://bafybeidozsktzxp6jnzwgs5fg6b5yvx7spszpzuyvu4ixb7lvau7yg4rdq.ipfs.dweb.link/django-logo-png-transparent.png',
//             },
//             {
//                 name:  'React',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//             {
//                 name:  'Ethereum',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//             {
//                 name:  'PostgreSQL',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//             {
//                 name:  'Render.com',
//                 imageSrc: 'https://bafybeibsmc2uj65wwifcy6utxn64uohu7jt6sk5wqg7d5zemsl6gvk4264.ipfs.dweb.link/react-logo.png',
//             },
//         ]
//       },
//     ],
//   },
// ]



const people = [
    {
      name: 'Camilo Duran',
      role: 'Founder / CEO',
      imageUrl:
        'https://lh3.googleusercontent.com/pw/ABLVV864EgF1_5kN9rOdEIpotG4megmrGH3zZh4DebdNI-BG0tXW2JQ2cHIXVtpatTG334BbntWOaDUWI3R8ZNAXLd1E9OFHGvO8zDfki3p_iwSELIjZknsKLZv1HuKpRK5N-wo-jAQBWz43t0A8lunhlyEC4ImGavW10nbq0cF860sQqKYsMmfGAcgUJWKc8jiinb-c_gt-9DIPSL2DYLtPEmmJ5_UqXSEt_QdhtU25b3p4wZJjexV972juEbn4sT_16EGQ6Irnp_UJxBES7yx2kfbwmGPBi97l3Uw56wxK6IKE8uTqSSbrgK2S0IGuoOpQsNcVYqZDTj0oi0lO1eOyCSmNqkVmoj1H3914PfZ0KiMtdGlWZfrTyq3TJ5Q0tmi_dRVENHkRqUHdDm8vf0hFJfv5tFUiyuaKWA-CDSh9hAly0Wq4lcpjqg6Axy3CAuiuBZlwtqzrjtfub2ZjUR56urDl9iw92a3_JJNfI6ATv63FKd0EG_-DZhrtueo0uujWLSbRR1vgQgo3qqQP2kwxQck0nvU1aPbO9YnuBGc-NykUJN-KQVIICMMukttHThNtjMYFh0b983f18AN-L-xEMwQ_JdShTEIDxGqHfLpxcpaFhkul_4etQeRCQUazSYwj3ruqg_WnaZzeC24y7VwdIbofXbWCfVH8bwW2hdD25lL2vRPpVeqc1NbPX5jcrPM0MCRB6CwM3e954KeuoECEwB4XrPJV48mWkVuVAQLOtwYQELLulLUiqg60KVOBXzDB-fp2zdmI62A8_yAR46cDNW4GdYBOPdVJlyYo5fqC3_wwx3RQQ4beUZSkKyaPbwpgEHIlHlXhxczk_sC600JqQc3gxYGnOMPYh-pTAXBwrVFv3lVAA0GQdZqwsKf_vFK3FslTXbFmDWg4_zgnryp2aqAdNbd0Dkcy_lnKROXd=w731-h776-s-no-gm?authuser=0',
    },
    // {
    //     name: 'Nicolas Alarcon',
    //     role: 'Founder / CEO',
    //     imageUrl:
    //       'https://cdn.discordapp.com/attachments/776061066257891348/1148926995112140860/nico.jpg',
    // },
    // More people...
  ]


function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

function Nosotros(){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return(
        <FullWidthLayout>
            <div className="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-24">
                <div className="space-y-12">
                    <div className="space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-gilroy-black tracking-tight sm:text-4xl dark:text-white">Sobre Nosotros</h2>
                        
                        <h4 className="text-3xl tracking-tight dark:text-white text-gray-600">¡Bienvenidos a Ruta FPV!</h4>
                        <p className="text-xl text-gray-500 text-justify">
                        Fundada en 2022 en Chile, Ruta FPV surge de la pasión compartida por el emocionante mundo de los drones en primera persona (FPV). Nuestra historia comenzó cuando un grupo de entusiastas del FPV se unió con la visión de crear un espacio único para los amantes de esta emocionante afición.
                        </p>
                        
                        <h4 className="text-2xl tracking-tight dark:text-white text-gray-600">Nuestro Propósito</h4>
                        <p className="text-xl text-gray-500 text-justify">
                        En Ruta FPV, nos dedicamos apasionadamente a facilitar la entrada de personas al apasionante mundo del FPV. Nuestro objetivo es ofrecer una plataforma integral donde los principiantes puedan aprender, explorar y disfrutar del FPV de manera sencilla, didáctica y entretenida. Creemos que cada persona debería tener la oportunidad de experimentar la emoción de volar un dron en primera persona, y estamos aquí para guiarlos en cada paso del camino.
                        </p>
                    </div>

                    <div className="bg-white py-24 rounded-lg shadow-lg sm:py-32">
                        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conoce a Nuestro Equipo</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600 text-justify">
                                Nuestro equipo está formado por apasionados expertos en FPV que comparten una profunda pasión por la tecnología de drones y una dedicación a hacer que el FPV sea accesible para todos. Permítenos presentarte a algunas de las personas detrás de Ruta FPV:
                                </p>
                            </div>
                            <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                                {people.map((person) => (
                                    <li key={person.name}>
                                        <div className="flex items-center gap-x-6">
                                            <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                            <div>
                                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

                

            {/* <section aria-labelledby="features-heading" className="max-w-7xl mx-auto py-16 sm:px-2 lg:px-8">
                <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
                <div className="max-w-3xl">
                    <h2 id="features-heading" className="text-3xl font-gilroy-black tracking-tight text-gray-900 sm:text-4xl">
                    Portafolio
                    </h2>
                    <p className="mt-4 text-gray-500 font-gilroy-medium">
                    Nuestro portafolio de proyectos creados y desplegados al internet.
                    </p>
                </div>

                <Tab.Group as="div" className="">
                    <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                    <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                        <Tab.List className="-mb-px flex space-x-10">
                        {tabs.map((tab) => (
                            <Tab
                            key={tab.name}
                            className={({ selected }) =>
                                classNames(
                                selected
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'whitespace-nowrap py-6 border-b-2 font-gilroy-medium text-sm'
                                )
                            }
                            >
                            {tab.name}
                            </Tab>
                        ))}
                        </Tab.List>
                    </div>
                    </div>

                    <Tab.Panels as={Fragment}>
                    {tabs.map((tab) => (
                        <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                        {tab.features.map((feature) => (
                            <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                            <div className="mt-6 lg:mt-0 lg:col-span-5">
                                <h3 className="text-lg font-gilroy-medium text-gray-900">{feature.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                <a
                                    href={feature.url} target="_blank"
                                    className="mt-4 inline-flex justify-center items-center px-5 py-2 dark:text-dark-txt border-gray-300 hover:border-gray-700 border text-base font-gilroy-medium rounded-full shadow-sm text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                                >
                                    Ver Sitio
                                </a>
                                <ul role="list" className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                                    <span className="text-gray-700 font-gilroy-semibold">Tech Stack</span>
                                    {feature && feature.tech_stack && feature.tech_stack.map(stack=>(
                                        <><li>• {stack.name}</li></>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:col-span-7">
                                <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
                                <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                                </div>
                            </div>
                            </div>
                        ))}
                        </Tab.Panel>
                    ))}
                    </Tab.Panels>
                </Tab.Group>
                </div>
            </section> */}

            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-gilroy-black text-gray-900 sm:text-4xl">
                        Servicios
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500 font-gilroy-regular">
                        Ofrecemos servicio de compra y armado de drones.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="">
                                <Link
                                to="/servicios"
                                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700"
                                >
                                Servicios
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link
                                to="/contacto"
                                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-blue-100 hover:bg-blue-200"
                                >
                                Contactanos
                                </Link>
                            </div>
                        </div>
                    </div>
                {/* <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                        className="max-h-12"
                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                        alt="Workcation"
                    />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                        className="max-h-12"
                        src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                        alt="Laravel"
                    />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                        className="max-h-12"
                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                        alt="StaticKit"
                    />
                    </div>
                    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img
                        className="max-h-12"
                        src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                        alt="Statamic"
                    />
                    </div>
                </div> */}
                </div>
            </div>

        </FullWidthLayout>
    )
}



const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

})(Nosotros)