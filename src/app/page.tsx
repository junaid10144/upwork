"use client";
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image'; 

export default function Home() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <Head>
        <title>Pricing Page</title>
        <meta name="description" content="Our Pricing Plans" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen flex flex-col items-center p-6">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 animate-glow">Our Pricing Plans</h1>
          <p className="text-lg text-gray-600">Choose the plan that best fits your needs and get started today.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {['Free Trial', 'Basic', 'Premium', 'Enterprise'].map((plan, index) => (
            <div
              key={plan}
              className={`relative p-6 bg-white rounded-xl shadow-card transition-transform transform hover:scale-105 hover:bg-cardHover bg-cardBackground ${
                index === 2 ? 'border-4 border-primary' : ''
              }`}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              <h2 className={`text-3xl font-bold text-gray-800 mb-3 ${index === 2 ? 'text-primary' : ''}`}>{plan}</h2>
              <p className="text-gray-600 mb-4">{plan === 'Free Trial' ? '30-day free trial' : 'Explore the benefits of this plan'}</p>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                {plan === 'Free Trial' ? '$0' : `$${index * 20 + 20}`}
              </div>
              <button
                className={`w-full py-3 px-5 rounded-lg bg-primary text-white font-semibold transition-transform transform hover:scale-110 ${
                  active === index ? 'animate-pulse' : ''
                }`}
              >
                Choose Plan
              </button>
              {plan === 'Premium' && (
                <span className="absolute top-2 right-2 px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full shadow-md">
                  Most Popular
                </span>
              )}
            </div>
          ))}
        </section>

        <section className="w-full text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Trusted by Leading Companies</h2>
          <div className="flex justify-center gap-8">
            {/* Example logos */}
            <Image src="/images/logo1.png" alt="Logo 1" width={100} height={100} className="animate-fade-in" />
            <Image src="/images/logo2.png" alt="Logo 2"  width={100} height={100} className="animate-fade-in" />
            <Image src="/images/logo3.png" alt="Logo 3" width={100} height={100} className="animate-fade-in" />
          </div>
        </section>
      </main>
    </>
  );
}
