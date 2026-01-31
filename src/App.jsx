import { useState } from 'react';
import profileImg from './assets/DSC_Dev_bg.jpg';
import resumePdf from './assets/FullStack_Sameer_Bhatti.pdf';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-gray-100 p-6">
      <div className="mx-auto">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-36 h-36 overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center bg-gray-800">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-5xl font-extrabold">
              Sameer <span className="gradient-text">Bhatti</span>
            </h1>

            <p className="mt-3 text-lg text-gray-300 max-w-xl">
              Full-Stack Programmer | Software Developer — building scalable and
              secure apps.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="https://github.com/bhatti8162"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-full bg-gray-800"
              >
                GitHub
              </a>

              <span className="px-3 py-1 rounded-full bg-gray-800">
                Karachi, Pakistan
              </span>

              <a
                href="mailto:sbhatti.dev@gmail.com"
                className="px-3 py-1 rounded-full bg-gray-800"
              >
                sbhatti.dev@gmail.com
              </a>

              <a
                href="tel:+923102683892"
                className="px-3 py-1 rounded-full bg-gray-800"
              >
                +92 310 2683892
              </a>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-5 flex gap-4 flex-wrap">
              <a
                href="https://github.com/bhatti8162"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-lg bg-gray-700 border border-gray-500 font-semibold hover:scale-105 transition"
              >
                GitHub
              </a>

              <a
                href="https://wa.me/message/EAEADUC7CU35N1"
                target="_blank"
                className="px-5 py-2 rounded-lg border border-indigo-400 text-indigo-300 hover:bg-indigo-800/40 transition"
              >
                Whatsapp Now
              </a>

              {/* PDF REsume — KEPT */}
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-lg border border-indigo-400 text-indigo-300 hover:bg-indigo-800/40 transition"
              >
                View Resume (PDF)
              </a>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT */}
          <section className="space-y-6">
            <div className="p-6 bg-gray-800 bg-opacity-40 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>

              {[
                ['Programming', 95],
                ['Front-end / Back-end', 92],
                ['MERN Stack', 90],
                ['ReactJS / NextJS', 88],
                ['Django - Python', 92],
                ['Secure Coding', 90],
                ['Quality Assurance', 88],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full skill-bar"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gray-800 bg-opacity-40 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-gray-700 rounded-full">
                  English
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full">Urdu</span>
                <span className="px-3 py-1 bg-gray-700 rounded-full">
                  Punjabi
                </span>
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <section className="md:col-span-2 space-y-8">
            <div className="p-6 bg-gray-800 bg-opacity-40 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-3">About Me</h2>
              <p className="text-gray-300">
                I create secure, scalable apps with a balance of engineering,
                security, and quality assurance. I also teach IT and work with
                US clients on software testing and automation.
              </p>
            </div>

            <div className="p-6 bg-gray-800 bg-opacity-40 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>

              <div className="space-y-4">
                <div className="p-4 bg-gray-900 bg-opacity-40 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">IT Instructor</h3>
                      <p className="text-sm text-gray-400">
                        SOSTTI — Karachi, Pakistan
                      </p>
                    </div>
                    <span className="text-sm text-gray-400">
                      2024 - Present
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-gray-900 bg-opacity-40 rounded-lg">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">
                        SQA Freelancing Projects
                      </h3>
                      <p className="text-sm text-gray-400">
                        Remote — California, USA
                      </p>
                    </div>
                    <span className="text-sm text-gray-400">2022 - 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-800 bg-opacity-40 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Certificates</h2>
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                <li>
                  META — Fullstack Developer ({' '}
                  <a
                    className="px-3 py-1 rounded-full bg-gray-800"
                    href="https://coursera.org/share/100c6c543f8a5d562761b40c3b14dc72"
                    target="_blank"
                  >
                    Verify on Coursera
                  </a>
                  )
                </li>
                <li>
                  HKUST - Software Engineering ({' '}
                  <a
                    className="px-3 py-1 rounded-full bg-gray-800"
                    href="https://coursera.org/share/8f5f5756f4e6bd28cfcb533c8648f8aa"
                    target="_blank"
                  >
                    Verify on Coursera
                  </a>
                  )
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* CTA */}
        <section className="mt-16 px-4">
          <div
            className="grid gap-6 justify-items-center
                  grid-cols-1
                  sm:grid-cols-2
                  lg:grid-cols-3"
          >
            {/* Card */}
            <div className="w-full max-w-sm min-h-[20rem] p-6 bg-gray-800/40 rounded-2xl shadow-lg text-center flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-3">
                Hire Remote Full-Stack Developer
              </h2>

              <p className="text-gray-300 text-sm mb-4">
                I build secure, scalable apps for US clients.
              </p>

              <a
                href="#contact"
                className="mx-auto px-5 py-2 rounded-lg border border-indigo-400 text-indigo-300 hover:bg-indigo-800/40 transition"
              >
                Visit
              </a>
            </div>

            {/* Card */}
            <div className="w-full max-w-sm min-h-[20rem] p-6 bg-gray-800/40 rounded-2xl shadow-lg text-center flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-3">Project 02</h2>
              <p className="text-gray-300 text-sm mb-4">
                I build secure, scalable apps for US clients.
              </p>
              <a
                href="#contact"
                className="mx-auto px-5 py-2 rounded-lg border border-indigo-400 text-indigo-300 hover:bg-indigo-800/40 transition"
              >
                Visit
              </a>
            </div>

            {/* Card */}
            <div className="w-full max-w-sm min-h-[20rem] p-6 bg-gray-800/40 rounded-2xl shadow-lg text-center flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-3">Project 03</h2>
              <p className="text-gray-300 text-sm mb-4">
                I build secure, scalable apps for US clients.
              </p>
              <a
                href="#contact"
                className="mx-auto px-5 py-2 rounded-lg border border-indigo-400 text-indigo-300 hover:bg-indigo-800/40 transition"
              >
                Visit
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          className="mt-16 p-6 text-center bg-gray-900 bg-opacity-40 rounded-2xl"
        >
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="text-gray-300 mt-2">
            Email: sbhatti.dev@gmail.com — Phone: +92 310 2683892
          </p>
          <p className="text-gray-600 text-sm mt-6">
            © 2025 Sameer Bhatti — Full-Stack Developer
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
