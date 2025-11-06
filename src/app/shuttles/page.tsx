import ServicesHero from '../../components/Hero2'
import Breadcrumbs from "../../components/Breadcrumbs";
import TransferDetails from '../../components/TransferDetails'
import TestimonialSection from '../../components/TestimonialSection'
import FinalCta from '../../components/FinalCtaSection'

const shuttle = {
  title: 'Reliable',
  span: 'Shuttle Services',
  subTitle: 'Experience seamless travel with Belgium Buses — efficient, comfortable, and dependable shuttle solutions across Belgium for groups of all sizes.',
  image: '/images/shuttle3.png',
};

const shuttleDetail = {
  h2: 'About Our Shuttle Service',
  title: 'Belgium Buses provides smooth and scheduled shuttle transport across Belgium. From airports and hotels to event venues, our modern coaches and professional drivers ensure every journey is safe, comfortable, and always on time — ideal for corporate groups, private events, and organized travel logistics.',
  features: [
    'Scheduled and on demand shuttle options',
    'Modern air conditioned coaches',
    'Professional uniformed drivers',
    'Real time tracking and updates',
    'Custom routes for airports, hotels, and events',
    'Competitive group pricing with no hidden fees'
  ],
  images: [
    { image: '/images/shuttle1.png' },
    { image: '/images/shuttle2.png' }
  ]
};

export default function Shuttles() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Shuttle Services" },
        ]}
      />
      <ServicesHero {...shuttle} />
      <TransferDetails {...shuttleDetail} />
      <TestimonialSection />
      <FinalCta />
    </>
  );
}
