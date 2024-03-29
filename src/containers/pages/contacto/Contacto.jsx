import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { connect } from "react-redux"
import axios from "axios"
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { useEffect, useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import { Switch } from '@headlessui/react'
import { Link } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Contacto(){

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const [agreed, setAgreed] = useState(false)
    const [loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
      phone: '',
    });

    const { 
      name,
      email,
      subject,
      message,
      phone,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
      e.preventDefault();

      if(agreed){
        setLoading(true);

        const config = {
          headers: {
              'Content-Type': 'application/json'
          }
        };

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('subject', subject)
        formData.append('message', message)
        formData.append('phone', phone)

        const fetchData = async () => {
          axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`, formData, config)
          .then(res => {
            
            setLoading(false);
            toast.success("Mensaje enviado correctamente, estaremos en contacto muy pronto",{
              position: "top-center"
            });
            
          })
          .catch(err => {
            
            setLoading(false);
            toast.error("Error al enviar mensaje",{
              position: "top-center"
            });
          }) 
        }

        fetchData()


      }else {
        toast.warn("Debes aceptar los terminos y politica de privacidad",{
          position: "top-center"
        });
      }
    }
  


    return(
        <FullWidthLayout>
            <div className="relative ">
              <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2" />
              </div>
              <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                  <div className="max-w-lg mx-auto">
                    <h2 className="text-2xl font-gilroy-black tracking-tight text-gray-900 sm:text-3xl">Ponerse en contacto</h2>
                    <p className="mt-3 text-lg leading-6 text-gray-500">
                      Espero que todo lo que has leido en la web te haya gustado y te haya despertado el gusto de
                      aprender todo sobre el mundo FPV. Si tienes alguna pregunta no dudes en ponerte en contacto con nosotros.
                      Te respondermos en 24 horas y si podemos lo haremos antes, gracias.
                    </p>
                    <dl className="mt-8 text-base text-gray-500">
                      {/* <div>
                        <dt className="sr-only">Postal address</dt>
                        <dd>
                          <p>742 Evergreen Terrace</p>
                          <p>Springfield, OR 12345</p>
                        </dd>
                      </div> */}
                      <div className="mt-6">
                        <dt className="sr-only">Phone number</dt>
                        <dd className="flex">
                          <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <a href="https://api.whatsapp.com/send?phone=56965893375"><span className="ml-3">+56 965893375</span></a>
                        </dd>
                      </div>
                      <div className="mt-3">
                        <dt className="sr-only">Email</dt>
                        <dd className="flex">
                          <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                          <a href="mailto:rutafpv@gmail.com"><span className="ml-3">rutafpv@gmail.com</span></a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className=" py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                  <div className="max-w-lg mx-auto lg:max-w-none">

                    <form onSubmit={e=>onSubmit(e)} className="grid grid-cols-1 gap-y-6">
                      <div>
                        <label className="sr-only">
                        Nombre Completo
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          name='name'
                          onChange={e=>onChange(e)}
                          required
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                          placeholder="Nombre Completo"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">
                        Correo electronico
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          onChange={e => onChange(e)} 
                          value={email} 
                          required
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                          placeholder="Correo electronico"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="sr-only">
                          Phone
                        </label>
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          onChange={e => onChange(e)} 
                          value={phone} 
                          autoComplete="tel"
                          required
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                          placeholder="Phone"
                        />
                      </div>
                      <div>
                        <label className="sr-only">
                          Titulo del Mensaje
                        </label>
                        <input
                          type="text"
                          value={subject}
                          name='subject'
                          id="subject"
                          onChange={e=>onChange(e)}
                          required
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                          placeholder="Titulo del Mensaje"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="sr-only">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={message}
                          onChange={e=>onChange(e)}
                          rows={4}
                          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                          placeholder="Message"
                          required
                          defaultValue={''}
                        />
                      </div>


                        <Switch 
                          checked={agreed}
                          onChange={setAgreed}
                          className={classNames(
                            agreed ? 'bg-blue-600' : 'bg-gray-200',
                            'relative inline-flex flex-shrink-0 h-6 w-11 border-2 dark:text-dark-txt border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                            )}
                        >
                          <span className="sr-only">Acepta las politicas</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                                agreed ? 'translate-x-5' : 'translate-x-0',
                                'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                            )}
                            />

                        </Switch>
                        <div className="ml-3">
                        <p className="text-base text-gray-500">
                            Al seleccionar esto, aceptas las{' '}
                            
                            <Link to="/privacidad" className="font-medium  underline">
                            <span className="text-blue-700 cursor-pointer">Politicas de Privacidad</span>
                            </Link>{' '}
                            y{' '}
                            
                            <Link to="/terminos" className="font-medium text-blue-700 underline">
                            <span className="text-blue-700 cursor-pointer">Terminos de Uso</span>
                            </Link>
                            .
                        </p>
                        </div>

                      <div>
                        {
                          loading ?
                        <button
                          className="float-right inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-gilroy-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Cargando
                        </button>
                        :
                        <button
                          type="submit"
                          className="float-right inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-gilroy-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Enviar
                        </button>
                        }
                      <ToastContainer />
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{

})(Contacto)