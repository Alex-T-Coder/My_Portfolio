import { Container } from "@/components/layout/Container";
import { PageIntro } from "@/components/layout/PageIntro";
import { Button } from "@/components/ui/button";
import { PaperClipIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GithubContributions from "./components/GithubContributions";

export const metadata: Metadata = {
  // metadataBase: new URL("/about", process.env.NEXT_PUBLIC_BASE_URL),
  title: "About",
  openGraph: {
    title: "Chaitanya | About",
    type: "profile",
    firstName: "Chaitanya",
    lastName: "Narra",
    gender: "male",
    username: "chaitanya_narra",
  },
};

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About me" title="No I'm not Louis Vuitton.">
        <p className="prose">
          I am a Software Engineer from India living in US. I have{" "}
          <i>freelance</i> and <i>entrepreneurial</i> experience. I have
          experience with Machine Learning, Gen AI, Natural Language Processing
          in Python, and let my curiosity guide me to other topics.
          <ol>
            In general, I look for opportunities where I can:
            <li>learn and grow as an engineer</li>
            <li>influence the technology around me</li>
          </ol>
        </p>
        <div
          className={clsx(
            "grid grid-cols-1 sm:grid-cols-12 gap-10 print:grid-cols-12"
          )}
        >
          <div className="relative w-auto h-60 sm:col-span-4 print:col-span-4">
            <Image
              layout="fill"
              src="/images/ef_countdown.jpg"
              alt="Entrepreneur First"
              className="object-contain"
            />
          </div>
          <div className="relative w-auto h-60 sm:col-span-4 print:col-span-4">
            <Image
              layout="fill"
              src="/images/in_my_room.jpg"
              alt="Playing Music"
              className="object-contain"
            />
          </div>
          <div className="relative w-auto h-60 sm:col-span-4 print:col-span-4">
            <Image
              layout="fill"
              src="/images/run.jpg"
              alt="Singapore"
              className="object-contain"
            />
          </div>
        </div>
      </PageIntro>
      <Container>
        <section id="about-card" className="pb-4 mt-4">
          <div className="overflow-hidden shadow sm:rounded-lg print:rounded-lg">
            <div className="px-4 py-5 border-t border-gray-200 sm:px-6 print:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 print:grid-cols-2">
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    Chaitanya Narra
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    chaitanyanarra80@gmail.com
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Occupation
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    Software Engineer and occasional Blogger
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Interests
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    NLP, MLOps, RecSys, Python, SSG, Blockchain
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Born in</dt>
                  <dd className="mt-1 text-sm text-gray-900">India</dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Residence
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <ul>
                      <li>Texas, US (current)</li>
                      <li>Paris, France</li>
                      <li>Singapore, Singapore</li>
                      <li>Brighton, United Kingdom</li>
                    </ul>
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Educated at
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <ul>
                      <li>
                        <a
                          href="https://www.slideshare.net/louisguitton5/presentation-mines-paristech-50518444"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mines ParisTech - Paris, France
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.bginette.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ginette - Versailles, France
                        </a>
                      </li>
                    </ul>
                  </dd>
                </div>
                <div className="sm:col-span-1 print:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Part of</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <ul>
                      <li>OneFootball Medienliga team - ⚽️ football team</li>
                      <li>
                        Entrepreneur First BE1 - 🦡 startup incubator alumni
                      </li>
                      <li>Blogging for Devs - blogger community</li>
                      <li>Scott&apos;s Bass Lesson - 🎸 online bass school</li>
                    </ul>
                  </dd>
                </div>
                <div className="sm:col-span-2 print:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">
                    Attachments
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <ul
                      role="list"
                      className="border border-gray-200 divide-y divide-gray-200 rounded-md"
                    >
                      <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                        <div className="flex items-center flex-1 w-0">
                          <PaperClipIcon
                            className="flex-shrink-0 w-5 h-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="flex-1 w-0 ml-2 truncate">
                            Resume
                          </span>
                        </div>
                        <div className="flex-shrink-0 ml-4">
                          <Link href={"/resume"}>
                            <Button>Open</Button>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        <section id="feed" className="pb-4 prose max-w-none">
          <h2>Latest Open Source Contributions</h2>
          <GithubContributions />
        </section>
      </Container>
    </>
  );
};

export default AboutPage;
