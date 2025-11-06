import TransferHero from '../../components/Hero2'
import Breadcrumbs from "../../components/Breadcrumbs";
import TransferDetails from '../../components/TransferDetails'
import TestimonialSection from '../../components/TestimonialSection'
import FinalCta from '../../components/FinalCtaSection'

const service = {
    title: 'Safe and Exciting',
    span: 'School Trips',
    subTitle: 'Make every school trip memorable with Belgium Buses — safe, comfortable, and expertly managed transport for students and teachers across Belgium.',
    image: '/images/scht4.png'
}

const tripDetail = {
    h2: 'About Our School Trip Service',
    title: 'Belgium Buses provides reliable and enjoyable school trip transport across Belgium. From museums to theme parks, our modern coaches, experienced drivers, and advanced safety features ensure every journey is smooth, secure, and fun for everyone.',
    features: [
        'Professional, background checked drivers',
        'Custom itineraries to match school plans',
        'Educational and recreational trip options',
        'Air conditioned coaches with seat belts',
        'Group discounts and transparent pricing',
        'Live tracking and safety updates for peace of mind'
    ],
    images: [
        { image: "/images/scht1.png" },
        { image: "/images/scht2.png" }
    ]
}

export default function SchoolTrips() {
    return (
        <>
            <Breadcrumbs
                crumbs={[
                    { name: "Home", href: "/" },
                    { name: "School Trips" },
                ]}
            />
            <TransferHero {...service} />
            <TransferDetails {...tripDetail} />
            <TestimonialSection />
            <FinalCta />
        </>
    );
}
