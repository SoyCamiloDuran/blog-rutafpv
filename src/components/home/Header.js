import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify'

function Header(){

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
      // name: '',
      email: '',
    });
    const { 
      // name,
      email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
      e.preventDefault();

      const config = {
        headers: {
            'Content-Type': 'application/json'
        }
      }

      const formData = new FormData()
      // formData.append('name', name)
      formData.append('email', email)

      const fetchData = async () => {
        axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/demo`, formData, config)
        .then(res => {
          
          setTimeout(navigate('/demo'),1000)
        })
        .catch(err => {
          
          setLoading(false);
          toast.error("Erro al enviar mensaje")
        }) 
      }

      fetchData()
      
    }
    return(
        <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-5xl font-gilroy-black dark:text-white">Habilidades para ti</h1>
              <p className=" text-base font-gilroy-medium text-gray-500 mt-2 sm:mt-4 sm:text-xl lg:text-lg xl:text-xl">
              Te regalamos un documento! Si estás empezando y todavía no tienes nada claro, este documento te va a venir de lujo.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <p className="text-base font-gilroy-medium text-gray-900 dark:text-dark-txt">Déjanos tu email para que podamos enviarte <b>GRATIS</b> el documento a tu correo, y así poder dar tus primeros pasos en este nuevo conocimiento y revisar cuando quieras.</p>
                <form onSubmit={e=>onSubmit(e)} className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    required
                    className="mx-0.5 block w-full py-3 text-base rounded-md dark:bg-dark-main dark:border-dark-second dark:text-dark-txt placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                    placeholder="Correo Electronico"
                  />
                  {/* <label htmlFor="email" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e=>onChange(e)}
                    required
                    className="mx-0.5 block w-full py-3 text-base rounded-md dark:bg-dark-main dark:border-dark-second dark:text-dark-txt placeholder-gray-500 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:flex-1 border-gray-300"
                    placeholder="Nombre"
                  /> */}
                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-gilroy-medium rounded-full text-white bg-blue-800 shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Enviar
                  </button>
                </form>
                <p className="mt-3 text-sm text-gray-500">
                  Nos preocupamos por la protección de tus datos. Lea nuestras
                  <Link to="/privacidad" className="font-gilroy-medium text-gray-900 underline dark:text-dark-txt ml-1">
                    Políticas de privacidad
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
   
                  {/* <span className="sr-only">Vea nuestro vídeo</span>
                  <img
                    className="w-full"
                    src="https://bafybeieeuqi5koa7vb3j2fu6q3axnriiekqsxj63nnkgdw66evxofgoc2q.ipfs.dweb.link/rocketrrobot.png"
                    alt=""
                  /> */}
                  <iframe width="560" height="315" className="w-full" src="https://www.youtube.com/embed/08PEWqhDmR8?si=Ffl25B2FFVTyg_o-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </main>
    )
}

export default Header