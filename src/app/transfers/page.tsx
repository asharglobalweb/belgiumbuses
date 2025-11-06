import ServicesHero from '../../components/Hero2'
import Breadcrumbs from "../../components/Breadcrumbs";
import TransferDetails from '../../components/TransferDetails'
import TestimonialSection from '../../components/TestimonialSection'
import FinalCta from '../../components/FinalCtaSection'

const transfer = {
    title: 'Door-to-Door',
    span: 'Transfers',
    subTitle: 'Reliable transfers across Belgium by Belgium Buses — premium comfort, professional drivers, and on-time service wherever you go.',
    image: '/images/transfer1.png',
}

const transferDetail = {
    h2: 'About Our Transfer Service',
    title: 'Travel in comfort and style with Belgium Buses. Our door-to-door transfers cover airports, hotels, and corporate destinations across Belgium — punctual, professional, and stress-free.',
    features: [
        'Meet & greet service included',
        'Real-time flight and traffic tracking',
        'Complimentary Wi-Fi and refreshments',
        'Fixed, transparent pricing — no surprises'
    ],
    images: [
        { image: "/images/transfer2.png" },
        { image: "/images/transfer3.png" }
    ]
}

export default function Transfer() {
    return (
        <>
            <Breadcrumbs
                crumbs={[
                    { name: "Home", href: "/" },
                    { name: "Transfers" },
                ]}
            />
            <ServicesHero {...transfer} />
            <TransferDetails {...transferDetail} />
            {/* <PricingSection /> */}
            <TestimonialSection />
            <FinalCta />
        </>
    );
}
