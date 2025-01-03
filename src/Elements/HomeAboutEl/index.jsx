import React from 'react';
import { Typography, Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'; // Ant Design icon
import 'antd/dist/reset.css';
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const services = [
  {
    title: 'Web Development',
    description: 'Build scalable and efficient web applications with cutting-edge technologies.',
    image: '/img1.jpg',
  },
  {
    title: 'App Development',
    description: 'Create high-performance mobile applications for iOS and Android platforms.',
    image: '/img2.jpg',
  },
  {
    title: 'SEO',
    description: 'Enhance your online presence and drive organic traffic with our SEO strategies.',
    image: '/img3.jpg',
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage with your audience and build your brand through strategic social media campaigns.',
    image: '/img4.jpg',
  },
  // Add more services as needed
];

const HomeServicesSection = () => {
  return (
    <div className="px-4 py-12 md:px-8 lg:px-16 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="container mx-auto">
        <Title level={2} className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Our Services
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              cover={<img alt={service.title} src={service.image} className="object-cover h-40 w-full rounded-t-lg" />}
              className="bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Meta
                title={service.title}
                description={<Paragraph className="text-gray-600">{service.description}</Paragraph>}
              />
              <Link to="/contact-us">
              <Button 
                type="primary" 
                size="large" 
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold mt-4 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300"
                icon={<ArrowRightOutlined />}
              >
                Learn More
              </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServicesSection;
