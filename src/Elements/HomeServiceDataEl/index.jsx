import React from 'react';
import { Card, Button, Typography } from 'antd';
import { 
    DesktopOutlined,
    MobileOutlined,
    SearchOutlined,
    ShareAltOutlined,
    MoneyCollectOutlined,
    FileTextOutlined,
    MailOutlined,
    PhoneOutlined,
    GlobalOutlined,
    HddOutlined,
    SettingOutlined,
    ArrowRightOutlined,
    AppstoreAddOutlined,
    BarcodeOutlined,
    FileSearchOutlined,
    ShopOutlined,
    FundProjectionScreenOutlined,
} from '@ant-design/icons'; // Ant Design icons
import 'antd/dist/reset.css';
import "./HomeServiceDataEl.css"
import { Link } from 'react-router-dom';
const { Title, Paragraph } = Typography;

const servicesData = [
    {
      title: 'Web Development',
      description: 'Create and maintain websites with cutting-edge technology and best practices.',
      icon: <DesktopOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    },
    {
      title: 'App Builder',
      description: 'Develop custom mobile applications tailored to your business needs.',
      icon: <MobileOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
    },
    {
      title: 'SEO',
      description: 'Improve your website’s visibility and ranking on search engines.',
      icon: <SearchOutlined style={{ fontSize: '32px', color: '#faad14' }} />,
    },
    {
      title: 'Social Media Marketing',
      description: 'Enhance your brand’s presence across various social media platforms.',
      icon: <ShareAltOutlined style={{ fontSize: '32px', color: '#eb2f96' }} />,
    },
    {
      title: 'PPC Advertising',
      description: 'Drive targeted traffic to your site with effective pay-per-click campaigns.',
      icon: <MoneyCollectOutlined style={{ fontSize: '32px', color: '#f5222d' }} />,
    },
    {
      title: 'Content Writing',
      description: 'Craft compelling content that engages and converts your audience.',
      icon: <FileTextOutlined style={{ fontSize: '32px', color: '#13c2c2' }} />,
    },
    {
      title: 'Email Marketing',
      description: 'Reach your audience directly through effective email campaigns.',
      icon: <MailOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    },
    {
      title: 'Phone & SMS Services',
      description: 'Utilize phone and SMS services for direct customer engagement.',
      icon: <PhoneOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
    },
    {
      title: 'E-Commerce Marketplace',
      description: 'Set up and manage your online store to maximize sales and reach.',
      icon: <ShopOutlined style={{ fontSize: '32px', color: '#faad14' }} />,
    },
    {
      title: 'Software Development',
      description: 'Create custom software solutions to meet your unique business needs.',
      icon: <AppstoreAddOutlined style={{ fontSize: '32px', color: '#eb2f96' }} />,
    },
    {
      title: 'Missed Call Service & IVR',
      description: 'Implement missed call services and interactive voice response systems.',
      icon: <BarcodeOutlined style={{ fontSize: '32px', color: '#f5222d' }} />,
    },
    {
      title: 'Logo & Brochure Design',
      description: 'Design visually appealing logos and brochures to enhance your brand.',
      icon: <FileSearchOutlined style={{ fontSize: '32px', color: '#13c2c2' }} />,
    },
    {
      title: 'WhatsApp Marketing',
      description: 'Leverage WhatsApp for personalized marketing and customer communication.',
      icon: <GlobalOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    },
    {
      title: 'Branding Services',
      description: 'Build and maintain a strong brand identity with our expert branding services.',
      icon: <FundProjectionScreenOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
    },
    {
      title: 'Local SEO',
      description: 'Enhance your local search presence to attract nearby customers.',
      icon: <HddOutlined style={{ fontSize: '32px', color: '#faad14' }} />,
    },
    {
      title: 'Influencer Marketing',
      description: 'Collaborate with influencers to boost your brand’s reach and credibility.',
      icon: <SettingOutlined style={{ fontSize: '32px', color: '#eb2f96' }} />,
    },
    {
      title: 'Bulk SMS',
      description: 'Send mass text messages for promotions, alerts, and customer engagement.',
      icon: <MobileOutlined style={{ fontSize: '32px', color: '#f5222d' }} />,
    },
  ];
  

const HomeServiceDataEl = () => {
  return (
    <div className="px-4 py-12 md:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <Title level={2} className="text-4xl font-bold text-gray-800 mb-6">
          Our Services
        </Title>
        <Paragraph className="text-lg text-gray-600 mb-8">
          Explore our range of services designed to help you succeed in the digital world.
        </Paragraph>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <Card
            key={index}
            className="hover:shadow-2xl transition-shadow duration-300"
            title={service.icon}
            bordered={false}
            bodyStyle={{ padding: '20px' }}
          >
            <Title level={4} className="text-gray-800 mb-2">
              {service.title}
            </Title>
            <Paragraph className="text-gray-600 mb-4">
              {service.description}
            </Paragraph>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/contact-us">
        <Button 
          type="primary" 
          size="large" 
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300"
          icon={<ArrowRightOutlined />}
        >
          Contact Us
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServiceDataEl;
