import React from 'react';
import { Card, Typography, Button } from 'antd';
import {
  CodeOutlined,
  AppstoreAddOutlined,
  SearchOutlined,
  ShareAltOutlined,
  GoogleOutlined,
  FileTextOutlined,
  MailOutlined,
  InstagramOutlined,
  PhoneOutlined,
  AppstoreOutlined,
  CameraOutlined,
  WechatOutlined,
  ShopOutlined,
  RocketOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import 'antd/dist/reset.css';
import { Link } from 'react-router-dom';


const { Title, Paragraph } = Typography;

const services = [
  { 
    title: 'Web Development', 
    icon: <CodeOutlined />, 
    description: 'Creating responsive and dynamic websites tailored to your business needs.', 
    details: 'Our web development services ensure a seamless and interactive user experience, integrating modern technologies and best practices to enhance your online presence.'
  },
  { 
    title: 'App Builder', 
    icon: <AppstoreAddOutlined />, 
    description: 'Developing custom mobile and web applications to enhance user engagement.', 
    details: 'We build custom apps that are user-friendly and optimized for performance, using cutting-edge technology to provide a unique experience for your users.'
  },
  { 
    title: 'SEO', 
    icon: <SearchOutlined />, 
    description: 'Optimizing your website to rank higher in search engine results and drive organic traffic.', 
    details: 'Our SEO strategies are designed to increase your site’s visibility and drive more traffic, using comprehensive keyword research, on-page optimization, and link building.'
  },
  { 
    title: 'Social Media Marketing', 
    icon: <ShareAltOutlined />, 
    description: 'Crafting strategies to build and engage your audience on various social media platforms.', 
    details: 'We create impactful social media campaigns that resonate with your audience, enhancing your brand’s visibility and fostering engagement across all major platforms.'
  },
  { 
    title: 'PPC', 
    icon: <GoogleOutlined />, 
    description: 'Managing pay-per-click campaigns to boost visibility and attract targeted traffic.', 
    details: 'Our PPC management services focus on optimizing ad spend and targeting the right audience to maximize your ROI and drive high-quality traffic to your site.'
  },
  { 
    title: 'Content Writing', 
    icon: <FileTextOutlined />, 
    description: 'Providing high-quality content that resonates with your audience and supports your marketing goals.', 
    details: 'Our content writing services deliver compelling and informative content that engages your audience and supports your brand’s voice and messaging.'
  },
  { 
    title: 'Email Marketing', 
    icon: <MailOutlined />, 
    description: 'Designing and executing effective email campaigns to nurture leads and drive conversions.', 
    details: 'We craft personalized email campaigns that capture attention and drive results, using data-driven strategies to optimize open rates and conversions.'
  },
  { 
    title: 'Influencer Marketing', 
    icon: <InstagramOutlined />, 
    description: 'Collaborating with influencers to amplify your brand’s message and reach a wider audience.', 
    details: 'Our influencer marketing services connect you with key influencers who can help promote your brand and drive authentic engagement with your target audience.'
  },
  { 
    title: 'Bulk SMS', 
    icon: <PhoneOutlined />, 
    description: 'Sending bulk SMS campaigns to effectively communicate with your customer base.', 
    details: 'We offer bulk SMS services for timely and effective communication, enabling you to reach your customers with important updates and promotions.'
  },
  { 
    title: 'Software Development', 
    icon: <AppstoreOutlined />, 
    description: 'Developing bespoke software solutions to streamline your business processes.', 
    details: 'Our custom software development services are tailored to your business needs, enhancing efficiency and providing solutions that drive growth.'
  },
  { 
    title: 'Missed Call Service & IVR', 
    icon: <CameraOutlined />, 
    description: 'Implementing missed call services and interactive voice response systems for better customer engagement.', 
    details: 'We provide advanced missed call and IVR solutions to enhance customer interaction, streamline communication, and improve service delivery.'
  },
  { 
    title: 'Logo & Brochure Design', 
    icon: <CameraOutlined />, 
    description: 'Designing memorable logos and brochures that represent your brand identity.', 
    details: 'Our design services focus on creating visually appealing logos and brochures that effectively convey your brand’s message and identity.'
  },
  { 
    title: 'WhatsApp Marketing', 
    icon: <WechatOutlined />, 
    description: 'Utilizing WhatsApp for personalized marketing and customer support.', 
    details: 'We leverage WhatsApp’s capabilities to engage with your customers directly, providing personalized marketing solutions and support.'
  },
  { 
    title: 'E-Commerce Marketplace', 
    icon: <ShopOutlined />, 
    description: 'Creating and managing e-commerce platforms to sell your products online.', 
    details: 'Our e-commerce solutions are designed to optimize online sales and provide a seamless shopping experience, from setup to ongoing management.'
  },
  { 
    title: 'Branding Services', 
    icon: <RocketOutlined />, 
    description: 'Developing a strong brand identity to differentiate your business in the market.', 
    details: 'We offer comprehensive branding services that help establish and communicate your brand’s unique identity and values.'
  },
  { 
    title: 'Local SEO', 
    icon: <EnvironmentOutlined />, 
    description: 'Enhancing your local search visibility to attract customers in your geographical area.', 
    details: 'Our local SEO strategies are designed to boost your presence in local search results, helping you attract more customers in your area.'
  },
];

const ServicesPage = () => {
  return (
    <div className="px-4 py-8 md:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto">
        <Title level={1} className="text-4xl font-bold mb-8 text-center text-gray-800">Our Premium Services</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-xl rounded-lg border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105"
              cover={
                <div className="flex justify-center items-center h-32 bg-gradient-to-r from-blue-500 to-blue-300 rounded-t-lg">
                  <div className="text-6xl text-white">{service.icon}</div>
                </div>
              }
            >
              <Title level={4} className="text-2xl font-semibold text-gray-900 mb-2 text-center">{service.title}</Title>
              <Paragraph className="text-gray-600 mb-4">{service.description}</Paragraph>
              <Paragraph className="text-gray-500 mb-6">{service.details}</Paragraph>
              <Link to="/contact-us"><Button type="primary" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="large">
                Contact Us
              </Button></Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
