import React from 'react'
import FeaturesCard from '../common/FeaturesCard'
import { PhoneCall, MapPin, DollarSign, Shield } from 'lucide-react'

const Features = () => {

  let featuresData = [
    {
        title: '24/7 Customer Support',
        description: 'Our dedicated support team is available around the clock to assist you with any inquiries or issues you may have. Whether you need help with booking, cancellations, or general questions, we\'re here to ensure your experience is smooth and enjoyable.',
        icon: PhoneCall
    },
    {
        title: 'Personalized Itineraries',
        description: 'Get custom travel plans tailored to your preferences, interests, and budget. Our experts create unique itineraries that match your travel style and ensure unforgettable experiences.',
        icon: MapPin
    },
    {
        title: 'Best Price Guarantee',
        description: 'We guarantee the best prices on all our travel packages. If you find a lower price elsewhere, we\'ll match it and give you an additional discount on your next booking.',
        icon: DollarSign
    },
    {
        title: 'Secure & Easy Booking',
        description: 'Book your trips with confidence using our secure platform. Our user-friendly interface makes planning and reserving your travel arrangements quick and hassle-free.',
        icon: Shield
    }
  ]

  return (
    <section className='bg-blue-100 px-20 py-16'>

      {/* heading */}

        <div className='text-5xl font-bold text-center mb-10'>
            <h2>Our Features</h2>
        </div>

      {/* content  */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
            featuresData.map((feature, index) =>{
              return (
                <FeaturesCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
              )
            })
          }
        </div>

    </section>
  )
}

export default Features