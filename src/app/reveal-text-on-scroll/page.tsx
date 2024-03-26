import { Poppins, EB_Garamond } from 'next/font/google';
import { Paragraph } from './_ui/Paragraph';
import { RevealText } from './_ui/RevalText';
import Image from 'next/image';
import Macintosh from '@/../public/Macintosh.png';
import clsx from 'clsx';

const poppins = Poppins({ weight: ['400'], subsets: ['latin-ext'] });
const ebGaramond = EB_Garamond({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
});

export default function RevealTextOnScrollPage() {
  return (
    <main className={clsx(poppins.className, 'w-full overflow-x-clip')}>
      <section className="flex h-screen w-screen flex-col items-center justify-center">
        <h1
          className={`${ebGaramond.className} mb-4 text-xl font-bold uppercase text-gray-500`}
        >
          Reveal text on scroll
        </h1>
        <p className={`${ebGaramond.className} animate-pulse text-5xl`}>
          scroll down
        </p>
      </section>
      <section className="bg-stone-100">
        <div className="container mx-auto grid w-full grid-cols-1 px-16 py-24 lg:grid-cols-2 lg:px-0">
          <div className="mb-16 lg:mb-0">
            <Image
              src={Macintosh}
              alt="Macintosh"
              className="sticky top-9 max-w-[80%]"
              width={800}
              height={600}
            />
          </div>
          <div>
            <h2 className={`${ebGaramond.className} mb-10 text-6xl font-bold`}>
              Midlife crisis
            </h2>
            <Paragraph>
              I understand that you may be feeling a bit perplexed at this
              point, so let me begin anew, or at least with the medical
              condition I&apos;ve self-diagnosed to rationalize everything: the{' '}
              <strong>midlife crisis</strong>.
            </Paragraph>
            <Paragraph>
              I acknowledge that, at &quot;only&quot;{' '}
              <strong>36 years old</strong>, with the advancements in scientific
              progress extending the average life expectancy well beyond 70
              years, It may seem premature to begin contemplating about it.
              However, I contend that the relentless pace of our lives has
              accelerated this moment of reflection, prompting us to
              nostalgically revisit past moments and rediscover the allure of{' '}
              <strong>childhood possessions</strong> — whether acquired, lost,
              or long-dreamt of.
            </Paragraph>
            <Paragraph>
              In my case, I can affirm that I was enticed by the notion of an
              improbable mission: the restoration and repair of an{' '}
              <strong>iconic computer from the past</strong>, armed with no
              specific technical expertise other than a robust and innate
              passion for computers. The chosen endeavor revolved around a
              genuine instant classic in the realms of computer science and
              industrial design: the original Macintosh.
            </Paragraph>
            <h3
              className={`${ebGaramond.className} mb-10 mt-20 text-4xl font-bold`}
            >
              The Macintosh
            </h3>
            <Paragraph>
              Originally overseen by Jeff Raskin, the &quot;Macintosh&quot;
              project was envisioned as Apple&apos;s inaugural computer,
              specifically targeted at families and marketed with a price tag
              below $1,000.
            </Paragraph>
            <Paragraph>
              However, the trajectory took an unexpected turn in 1980 when
              Apple, citing Steve Jobs&apos; intense perfectionism and limited
              team-building skills, decided to reassign him from the helm of the
              flagship &quot;Lisa&quot; project.
            </Paragraph>
            <RevealText>
              Apple&apos;s strategy was to shift Jobs to a project of lesser
              prominence like the Macintosh, one deemed less pivotal to the
              company&apos;s future, where his disposition could be more
              constrained.
            </RevealText>
            <Paragraph>
              Jobs found himself transitioning from the design of a
              <strong>groundbreaking computer</strong> like the Lisa—Appl&apos;s
              first professional workstation featuring an operating system with
              an iconographic interface and mouse-operable windows—to the
              Macintosh, a more{' '}
              <strong>traditional, budget-friendly computer</strong> with a
              text-based operating system, targeting families.
            </Paragraph>
            <h3
              className={`${ebGaramond.className} mb-10 mt-20 text-4xl font-bold`}
            >
              Jobs&apos;s leadership
            </h3>
            <Paragraph>
              Under Jobs&apos;s leadership, his initial response was to distance
              Raskin and <strong>decisively reshape the project</strong>. While
              the Macintosh was intended to be an economically accessible
              computer, Jobs believed it couldn&apos;t be solely from a
              financial perspective.
            </Paragraph>
            <Paragraph>
              Recognizing the need to cater to individuals unfamiliar with
              computers, the Macintosh couldn&apos;t compromise on the
              user-friendly experience offered by a{' '}
              <strong>graphical interface and a mouse</strong>. Jobs envisioned
              the computer being prominently displayed in homes, akin to any
              other household appliance, and insisted on a design that was
              nothing short of &quot;insanely great&quot;.
            </Paragraph>
            <Paragraph>
              This new trajectory, coupled with an exceptional marketing
              campaign, propelled the project into{' '}
              <strong>unprecedented levels of hype</strong>. However, it also
              led to a substantial increase in the costs associated with design,
              production, and promotion.
            </Paragraph>
          </div>
        </div>
      </section>
      <section className="flex min-h-screen w-screen items-center justify-center bg-gray-900 text-white">
        <div className="container px-16 lg:px-0">
          <RevealText className="!text-gray-300">
            Apple&apos;s strategy was to shift Jobs to a project of lesser
            prominence like the Macintosh, one deemed less pivotal to the
            company&apos;s future, where his disposition could be more
            constrained.
          </RevealText>
        </div>
      </section>
      <section className="flex h-screen w-screen flex-col items-center justify-center">
        <h1
          className={`${ebGaramond.className} mb-4 text-xl font-bold uppercase text-gray-500`}
        >
          Reveal text on scroll
        </h1>
        <p className={`${ebGaramond.className} animate-pulse text-5xl`}>
          scroll up
        </p>
      </section>
    </main>
  );
}
