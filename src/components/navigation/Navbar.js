import { Fragment, useState } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import useDarkMode from 'hooks/useDarkMode'
import {Helmet} from 'react-helmet'


const navigation = [
    { name: 'Inicio', href: '/', current: false },
    { name: 'Aprende FPV', href: '/blog', current: false },
    { name: 'Nosotros', href: '/nosotros', current: false },
    { name: 'Contacto', href: '/contacto', current: false },
]


const social = {
  social: [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@rutafpv',
      icon: (props) => (
        <i class="fi fi-brands-youtube text-xl mt-0.5"></i>
      ),
    },
    {
      name: 'Instagram.',
      href: 'https://www.instagram.com/rutafpv/',
      icon: (props) => (
        <i class="fi fi-brands-instagram text-xl mt-0.5"></i>
      ),
    },
  ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar({account}){

    const [darkTheme, setDarkTheme] = useDarkMode();
    const ThemeIcon = () => {
      const handleMode = () => setDarkTheme(!darkTheme);
      return (
        <span onClick={handleMode}>
          {darkTheme ? (
              <i className='fi fi-rr-sun dark:text-dark-txt hover:text-yellow-500 dark:hover:text-yellow-500 ml-4 md:mr-3 mr-2 inline-flex text-xl'></i>
          ) : (
              <i className='fi fi-rr-moon dark:text-dark-txt hover:text-blue-900  ml-4 md:mr-3 mr-2 inline-flex text-xl'></i>
          )}
        </span>
      );
    };

    // SEARCH
    const [effectSearch, setEffectSearch] = useState(false);
    const [term,setTerm]=useState('')

    const handleChange=e=>{
      setTerm(e.target.value)
    }

    const onSubmit= e =>{
      e.preventDefault()
      setTimeout(() => window.location.href=('/search/'+term), 0.2);
      setTerm('')
    }


    return(
        <>

            <Helmet>
                <title>RutaFPV</title>
                <meta name="description" content="Pagina de Inicio - RutaFPV"/>
                <link rel="canonical" href="https://rutafpv.cl" />
            </Helmet>

        {/* Top navigation */}
        <div className="bg-white dark:bg-dark-main ">
            <div className="max-w-7xl mx-auto h-11 px-4 flex items-center justify-between sm:px-6 lg:px-8 ">
              {/* Currency selector */}
              <form className="hidden lg:block lg:flex-1">
                <div className="flex">
                  <i className='bx bx-phone mt-0.5 mr-1 text-gray-500 dark:text-dark-txt'></i> <span className='text-gray-500 dark:text-dark-txt text-xs font-gilroy-bold'>+56 965893375</span>
                  <span className="h-6 w-px bg-gray-400 dark:bg-dark-third mx-2" aria-hidden="true" />
                  <i className='bx bxl-gmail mt-0.5 mr-1 text-gray-500 dark:text-dark-txt'></i> <span className='text-gray-500 dark:text-dark-txt text-xs font-gilroy-bold'>rutafpv@gmail.com</span>
                </div>
              </form>

              <p className="flex-1 text-center text-sm font-gilroy-medium text-white lg:flex-none">
                
              </p>

              <div className="flex lg:flex-1 lg:items-center lg:justify-end space-x-5">
                {social.social.map((item) => (
                  <a key={item.name} href={item.href} target="_blank" className="text-gray-400 hover:text-blue-600">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? 'fixed inset-0 z-50 overflow-y-auto' : '',
            'bg-white dark:bg-dark-main border-t border-gray-200 dark:border-dark-third lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink to="/">
                      {/* Dark Image */}
                      <a href="https://imgbb.com/">
                        <img
                            src="https://i.ibb.co/b1T3Gyc/logo.png"
                            width={80}
                            height={80}
                            layout="fixed"
                            alt=""
                            className="dark:hidden  flex"
                        />
                      </a>
                    
                      {/* White Image */}
                      <a href="https://imgbb.com/">
                        <img
                            src="https://i.ibb.co/b1T3Gyc/logo.png"
                            width={80}
                            height={80}
                            layout="fixed"
                            alt=""
                            className="hidden md:hidden dark:flex"
                        />
                      </a>
                    </NavLink>
                    <button className='ml-1'>
                        <ThemeIcon/>
                    </button>
                  </div>
                </div>

                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-md md:mx-auto lg:max-w-auto lg:mx-0 xl:px-0">
                    <form onSubmit={e=>onSubmit(e)} className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Buscar
                      </label>
                      <div className="relative">
                        <button
                        type="submit"
                        className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </button>
                        <input
                          id="search"
                          name="search"
                          required
                          onChange={(e)=>{handleChange(e)}}
                          className="block w-full font-gilroy-light bg-white dark:bg-dark-bg border dark:border-dark-bg border-gray-300 rounded-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                          placeholder="Buscar"
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Abrir menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    <NavLink to="/blog" className="ml-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                        Aprende FPV
                    </NavLink>
                    <NavLink to="/servicios" className="ml-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                        Servicios
                    </NavLink>
                    <NavLink to="/nosotros" className="ml-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                        Nosotros
                    </NavLink>
                    <NavLink to="/contacto" className="ml-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold">
                        Contacto
                    </NavLink>
                    {                    
                    }
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50',
                      'block rounded-md py-2 px-3 text-base font-gilroy-medium'
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
    )
}

export default Navbar