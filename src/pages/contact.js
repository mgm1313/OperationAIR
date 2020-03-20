import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO title="Contact" />
      <section>
        <form
          className="mx-auto md:w-1/2 mt-6 mb-16"
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact?status=success"
        >
          <input type="hidden" name="form-name" value="contact" />
          <h1>Contact opnemen</h1>
          <div className="mt-4 mb-8 leading-loose">
            <p className="mb-2">
              Heeft u een vraag voor ons team? Of bent u als ziekenhuis of
              bedrijf geïnteresseerd om met ons samen te werken of uw expertise
              te delen? Neem dan contact met ons op via het onderstaande
              formulier. <br />
              Algemene vragen kunnen ook per e-mail naar het team op{" "}
              <a
                className="underline text-japanese"
                href="mailto:info@operationair.org"
              >
                info@operationair.org
              </a>
              .
            </p>
            <p>
              Pers vragen we contact op te nemen via{" "}
              <a
                className="underline text-japanese"
                href="mailto:media@operationair.org"
              >
                media@operationair.org
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="name"
              >
                Naam*
              </label>

              <input
                className="block w-full mb-6 form-input"
                id="name"
                name="name"
                placeholder="Dr. Anders"
                type="text"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="organization"
              >
                Organisatie
              </label>

              <input
                className="block w-full mb-6 form-input"
                id="organization"
                name="organization"
                placeholder="Reinier de Graaf"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="mail"
              >
                E-mailadres*
              </label>

              <input
                className="block w-full mb-6 form-input"
                id="mail"
                name="mail"
                placeholder="info@operationair.org"
                type="email"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block mb-2 text-xs font-bold uppercase"
                htmlFor="phone"
              >
                Telefoonnumer
              </label>

              <input
                className="block w-full mb-6 form-input"
                id="phone"
                name="phone"
                placeholder="+31 6 12345678"
                type="tel"
              />
            </div>
          </div>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Uw bericht/vraag*
          </label>

          <textarea
            className="w-full mb-2 form-textarea"
            id="message"
            name="message"
            placeholder="Laat uw bericht achter..."
            rows="8"
            required
          />

          <p className="mb-6 text-gray-600 text-xs italic">
            * velden zijn verplicht
          </p>

          <button className="px-4 py-2 text-sm font-bold text-white bg-japanese border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Versturen
          </button>

          <p className="mt-3 text-sm leading-5 text-gray-500">
            Wij geven om uw persoonlijke data. Lees hoe in onze{` `}
            <Link to="/privacy" className="font-medium text-gray-900 underline">
              Privacy Voorwaarden
            </Link>
            .
          </p>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
