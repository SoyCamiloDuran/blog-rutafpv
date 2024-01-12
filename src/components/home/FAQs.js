/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "Cuanto cuesta un dron?",
    answer:
      "El rango de precios es tan amplio como las opciones. Puedes encontrar drones desde $30.000 hasta $30.000.000 de pesos chilenos, dependiendo de tus deseos. Enfocándonos en drones FPV de carreras -nuestra pasión-, los componentes son similares para otros tipos de drones. Ya sea para fotografía aérea, agricultura o arte, ¡aquí aprenderás mucho!<br>Los drones de carreras son emocionantes. Construir uno puede ser costoso, pero, como siempre, depende de las partes elegidas. Un mini quad puede rondar entre $100.000clp y $500.000clp, y eso solo es el cuadricóptero. Suma baterías, transmisor, gafas FPV y herramientas, unos $100.000clp a $500.000clp adicionales.<br>Este pasatiempo es más asequible que antes, con tendencia a serlo aún más. La democratización del drone asegura que aventurarse en los cielos no rompa el banco.",
  },
  // More questions...
  {
    question: "Comprar un dron o construirlo?",
    answer:
      "Arrancar desde cero puede asustar, pero es el camino hacia el progreso en este hobby. Sin embargo, tal vez no sea la primera parada. Después de todo, ¿cómo saber si nos encantará volar drones sin haberlo probado? Invertir mucho de entrada puede sonar arriesgado.<br>Y aun así, la respuesta radica en construirlo. Los drones comerciales suelen costar más, los repuestos son caros y complicados de conseguir, y los sistemas cerrados limitan la personalización.<br>La construcción es donde la diversión entra en juego, además de que te equipa con habilidades para diagnosticar, arreglar y mejorar tu dron en el futuro.<br>Lo construiremos, pero no justo ahora. Queremos volar y volar ya. Los simuladores son geniales, pero no son lo mismo. ¡Queremos algo en el cielo AHORA!<br>Si quieres saber más sobre cómo elegir el mejor cuadricóptero para principiantes, echa un vistazo a nuestro tutorial.",
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQs() {
  return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200 dark:divide-dark-second">
          <h2 className="text-center text-3xl font-gilroy-bold text-gray-900 sm:text-4xl dark:text-dark-txt">Preguntas Frecuentes</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 dark:divide-dark-second">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-gilroy-medium text-gray-900 dark:text-white">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500 font-gilroy-regular">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
  )
}
