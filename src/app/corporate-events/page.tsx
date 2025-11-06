import ServicesHero from '../../components/Hero2'
import Breadcrumbs from "../../components/Breadcrumbs";
import TransferDetails from '../../components/TransferDetails'
import TestimonialSection from '../../components/TestimonialSection'
import FinalCta from '../../components/FinalCtaSection'

const corporate = {
  title: 'Executive',
  span: 'Corporate Events',
  subTitle: 'Belgium Buses offers professional and punctual corporate shuttles for meetings, conferences, and business events across Belgium.',
  image: '/images/corporate3.png',
};

const corporateDetail = {
  h2: 'About Our Corporate Transport Service',
  title: 'Belgium Buses provides seamless executive transport for corporate events, client meetings, and business travel throughout Belgium. Enjoy modern coaches, experienced drivers, and a smooth, stress free experience every time.',
  features: [
    'Dedicated account manager for event coordination',
    'Onboard WiFi and charging ports',
    'Live tracking and real time updates',
    'Uniformed professional drivers',
    'Optional branded vehicles for your company',
    'Transparent fixed pricing with no hidden costs'
  ],
  images: [
    { image: '/images/corporate2.png' },
    { image: '/images/corporate1.png' }
  ]
};

export default function Corporate() {
    return (
        <>
            <Breadcrumbs
                crumbs={[
                    { name: "Home", href: "/" },
                    { name: "Corporate Events" },
                ]}
            />
            <ServicesHero  {...corporate} />
            <TransferDetails {...corporateDetail} />
            <TestimonialSection />
            <FinalCta />
        </>
    );
}
