import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import lumc from "../images/partners/lumc.svg";
import erasmus from "../images/partners/erasmus.png";
import tuDelft from "../images/partners/tudelft.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={[`operationAIR`]} title="We are OperationAIR" />

      <section className="-mt-8">
        <div className="relative bg-white overflow-hidden">
          <div className="hidden lg:block lg:absolute lg:inset-0">
            <svg
              className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
            >
              <defs>
                <pattern
                  id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                  x="118"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-alabaster"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y="72"
                width="640"
                height="640"
                className="text-gray-50"
                fill="currentColor"
              />
              <rect
                x="118"
                width="404"
                height="784"
                fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
              />
            </svg>
          </div>

          <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
            <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                    Onze Missie
                  </div>
                  <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                    Assist in respiration{` `}
                    <br className="hidden md:inline" />
                    <span className="text-ucla">OperationAIR</span>
                  </h2>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Ons studententeam van de TUDelft ontwikkelt op dit moment
                    een <b>simpel</b> & <b>betaalbaar</b>{" "}
                    <a
                      href="https://nl.wikipedia.org/wiki/Beademingsapparaat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <abbr title="Een medisch apparaat dat een patiënt die niet of slecht zelfstandig kan ademen kunstmatig van zuurstof of een mengsel van lucht en zuurstof voorziet.">
                        beademingsapparaat
                      </abbr>
                    </a>{" "}
                    om in te zetten bij de behandeling van{" "}
                    <a
                      href="https://www.rijksoverheid.nl/onderwerpen/coronavirus-covid-19"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <abbr title="In de regio Wuhan in China startte in december 2019 een uitbraak van een nieuw coronavirus. De meeste patiënten met dit virus hebben koorts en luchtwegklachten.">
                        Coronapatiënten
                      </abbr>
                    </a>
                    .
                  </p>
                  <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                    <p className="text-base font-medium text-gray-900">
                      Blijf op de hoogte van onze ontwikkelingen.
                    </p>
                    <form action="#" method="POST" className="mt-3 sm:flex">
                      <input
                        aria-label="Email"
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
                        placeholder="Vul uw mailadres in"
                      />
                      <button
                        type="submit"
                        className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-japanese shadow-sm hover:bg-ucla focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                      >
                        Inschrijven
                      </button>
                    </form>
                    <p className="mt-3 text-sm leading-5 text-gray-500">
                      Wij geven om uw persoonlijke data. Lees hoe in onze{` `}
                      <a
                        href="#"
                        className="font-medium text-gray-900 underline"
                      >
                        Privacy Voorwaarden
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  <svg
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                    width="640"
                    height="784"
                    fill="none"
                    viewBox="0 0 640 784"
                  >
                    <defs>
                      <pattern
                        id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                        x="118"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      y="72"
                      width="640"
                      height="640"
                      className="text-gray-50"
                      fill="currentColor"
                    />
                    <rect
                      x="118"
                      width="404"
                      height="784"
                      fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                    />
                  </svg>
                  <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                    <button className="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline">
                      <img
                        className="w-full"
                        src="https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="Lungs"
                      />
                      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                        <svg
                          className="h-20 w-20 text-japanese"
                          fill="currentColor"
                          viewBox="0 0 84 84"
                        >
                          <circle
                            opacity="0.9"
                            cx="42"
                            cy="42"
                            r="42"
                            fill="white"
                          />
                          <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-2xl">De laatste ontwikkelingen</h2>
          <p className="max-w-lg mx-auto">Via onze blog houden we jullie op de hoogte van de laatste ontwikkelingen. Bekijk ons <a className="underline" href="/">archief</a> voor het complete overzicht.</p>
        </div>
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:gap-6 md:grid-cols-3">
          <a href="/" className="group">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="relative pb-7/12 overflow-hidden">
                <img
                  className="absolute h-full w-full object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
                  src="https://d1rkab7tlqy5f1.cloudfront.net/_processed_/8/a/csm_IMG_0620_add8881333.jpg"
                  alt="Lungs"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 transition duration-200 ease-in-out group-hover:text-teal-600">
                  Werkend prototype gepresenteerd
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 py-4 flex justify-between">
                <div className="flex-1 flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-2 flex-1 text-gray-600 leading-none">
                    Vandaag
                  </span>
                </div>
                <svg
                  className="ml-4 h-5 w-5 text-gray-400 transition duration-500 ease-in-out transform group-hover:scale-110 group-hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </a>
          <a href="/" className="group">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 sm:mt-0">
              <div className="relative pb-7/12 overflow-hidden">
                <img
                  className="absolute h-full w-full object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1584206863432-4d63ac30e7ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=80"
                  alt="Lungs"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 transition duration-200 ease-in-out group-hover:text-teal-600">
                  Eerste contacten zijn gelegd
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 py-4 flex justify-between">
                <div className="flex-1 flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-2 flex-1 text-gray-600 leading-none">
                    Gisteren
                  </span>
                </div>
                <svg
                  className="ml-4 h-5 w-5 text-gray-400 transition duration-500 ease-in-out transform group-hover:scale-110 group-hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </a>
          <a href="/" className="group">
            <div className="max-w-sm rounded overflow-hidden shadow-lg mt-4 sm:mt-0">
              <div className="relative pb-7/12 overflow-hidden">
                <img
                  className="absolute h-full w-full object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=80"
                  alt="Lungs"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 transition duration-200 ease-in-out group-hover:text-teal-600">
                  OperationAIR is gestart!
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 py-4 flex justify-between">
                <div className="flex-1 flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-2 flex-1 text-gray-600 leading-none">
                    Maandag 16 maart
                  </span>
                </div>
                <svg
                  className="ml-4 h-5 w-5 text-gray-400 transition duration-500 ease-in-out transform group-hover:scale-110 group-hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section>
        <div className="bg-azureish">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                  Een brede samenwerking
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
                  Om de ontwikkeling van het beademingsapparaat te optimaliseren
                  staat het team in nauw contact met verschillende bedrijven en
                  instanties. Waaronder intensivisten en technisch
                  geneeskundigen uit het Leids Universitair Medisch Centrum
                  (LUMC) en het Erasmus Medisch Centrum (EMC).
                </p>
                <div className="mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <a
                      href="/"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-japanese hover:text-japanese hover:bg-air-gray focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      Expert support
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/contact"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-japanese bg-almond hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out"
                    >
                      Contact opnemen
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <img
                    className="max-h-12"
                    src={tuDelft}
                    alt="Technische Universiteit Delft"
                  />
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <img
                    className="max-h-12"
                    src={lumc}
                    alt="Leids Universitair Medisch Centrum"
                  />
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <img className="max-h-12" src={erasmus} alt="Erasmus MC." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white">
          <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
              Veelgestelde vragen
            </h2>
            <div className="mt-6 border-t-2 border-gray-100 pt-10">
              <dl className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Wat is het grootste gevaar in de woestijn?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        Verdrinking! In de woestijn regent het haast nooit, maar
                        als het regent dan regent het zeer hevig. Dan storten
                        zich enorme hoeveelheden water in dalen, op
                        nietsvermoedende mensen die zich daar net bevinden. Deze
                        verzwelgen iedereen die geen tijd meer heeft om te
                        vluchten.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      How do you make holy water?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        You boil the hell out of it. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quas cupiditate laboriosam
                        fugiat.
                      </p>
                    </dd>
                  </div>
                </div>
                <div className="mt-12 md:mt-0">
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      What is the least spoken language in the world?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        Sign language. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quas cupiditate laboriosam fugiat.
                      </p>
                    </dd>
                  </div>
                  <div className="mt-12">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      What do you call someone with no body and no nose?
                    </dt>
                    <dd className="mt-2">
                      <p className="text-base leading-6 text-gray-500">
                        Nobody knows. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Quas cupiditate laboriosam fugiat.
                      </p>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
