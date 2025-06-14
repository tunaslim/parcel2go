import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Optional: Tailwind Configuration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      clifford: '#da373d',
                    }
                  }
                }
              }
            `,
          }}
        />
      </Head>

      {/* Main content */}
      <main className="p-6">
        <h1 className="text-3xl font-bold underline text-clifford text-center">
          Hello world!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-200 p-4">Quote 1</div>
          <div className="bg-green-200 p-4">Quote 2</div>
          <div className="bg-yellow-200 p-4">Quote 3</div>
        </div>
      </main>
    </>
  );
}
