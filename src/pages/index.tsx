import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/logo.png";

function HomePage() {
  return (
    <>
      <Head>
        <title>{`W-Prtb2bPrOgRamrars`}</title>
        <meta name="description" content={``} />
        <meta
          property="og:description"
          content="Whalecum=WE R A GRUP OV PEBEL WHO R TRYING TO FIGUR OUT HOW TO USE COMPOTRS. PLS DONT LAFF AT US, WE R CRIING OUR BEST."
        />
        <meta property="og:title" content={`PrOgRamrars`} />

        <meta property="og:image" content={Logo.src} />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta
          property="og:url"
          content={`https://wepretendtobeprogrammers.vercel.app
          )}`}
        />
      </Head>
      <div className="flex flex-col justify-between items-center min-h-screen py-2 bg-red-800">
        <header className="flex-grow max-w-xs mx-auto text-center">
          <Image
            src={Logo}
            alt="WePretendToBeProgrammers Logo"
            width={200}
            height={200}
          />
          <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold text-black sm:text-3xl">
            W&#x65d;&#x70f;Prtnd2b&#x65d;prgrms
          </h1>
          <p className="mt-2 text-lg text-black">
            Aspirng Pogrammers Wrking on Varius Projcts
          </p>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center max-w-4xl w-full mt-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-3xl mb-12 text-black">
            Whalecum to uure Websit!
          </p>
          <p className="text-center text-xl mb-12 text-black">
            We R Grup of Peopl who R Trying to Figur Out How to Use Compootrs.
            SomeDays R Good &amp; Some R Not So Gud But We Kep Trying Anyways.
            We Work on Projcts that No 1 Askd For &amp; No 1 Nedz bud ok 
            What Mak Us Uuniqe!
          </p>
          <Link href="/projects" legacyBehavior>
            <a className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline">
              VIW UOR PROJCTS
            </a>
          </Link>
        </main>
        <footer className="flex-grow max-w-xs mx-auto text-center border-t border-gray-300 pt-2 pb-4 text-black">
          <p>
            &copy; 2023 WePre&#x74;&#x65;dToBeProgrmmrs. All rit&#x73;
            r&#x65;v&#x65;sved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
