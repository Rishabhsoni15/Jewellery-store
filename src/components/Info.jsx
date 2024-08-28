import React from "react";

function Info() {
  return (
    <section>
      <div className="mx-auto font-first max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded-xl bg-Background p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Jewelry Unique Styles
                </h2>

                <p className="mt-4 text-gray-500">
                  Exclusivity is often about the name of the designer, the size
                  of the stone, or the history behind the piece.
                </p>
              </header>

              <a
                href="#"
                className="mt-8 inline-block rounded border bg-primary px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none hover:text-black focus:ring"
              >
                Shop All
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="group block  ">
                  <img
                    src="/public/Images/brooch.png"
                    alt=""
                    className="aspect-square w-full rounded-xl object-cover bg-Graywala"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Gold Brooch
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </a>
              </li>

              <li>
                <a href="#" className="group block">
                  <img
                    src="/public/Images/b2.png"
                    alt=""
                    className="aspect-square w-full rounded-xl object-cover bg-Graywala"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      Gold Ring
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">$150</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
