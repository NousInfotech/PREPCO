import { PlanProps } from '@/types';


const mockData: PlanProps[] = [
  // Special Plans
  {
    id: 'plan_1',
    title: 'Full Package Plan',
    description: 'All-in-one access to all our premium features and tools.',
    bigDescription: 'Unlock everything with our Full Package Plan, offering complete access to all our premium features and tools. This plan is designed for those who want to experience the full range of services we offer. With exclusive tools, advanced features, and expert support, you’ll have everything you need to reach your goals. Enjoy unlimited possibilities with this all-in-one package that provides you the most comprehensive and seamless experience available.',
    category: 'full_package',
    duration: 12,
    pricing: 9999,
    discountPricing: 8999, // 10% discount
    isSpecial: false,
    features: [
      { id: 'feature_1', icon: '/images/pngs/walking-couple.png', content: 'Unlimited Access to All Modules' },
      { id: 'feature_2', icon: '/images/pngs/walking-couple.png', content: 'Priority Customer Support' },
      { id: 'feature_3', icon: '/images/pngs/walking-couple.png', content: 'Exclusive Discounts on Add-ons' },
      { id: 'feature_4', icon: '/images/pngs/walking-couple.png', content: 'Progress Tracking and Analytics' },
      { id: 'feature_5', icon: '/images/pngs/walking-couple.png', content: 'Personalized Recommendations' },
      { id: 'feature_6', icon: '/images/pngs/walking-couple.png', content: 'Access to New Features First' },
      { id: 'feature_7', icon: '/images/pngs/walking-couple.png', content: 'Invitations to Exclusive Events' },
      { id: 'feature_8', icon: '/images/pngs/walking-couple.png', content: 'Reward Points for Milestones' },
    ],
  },
  {
    id: 'plan_2',
    title: 'Female Wellness Plan',
    description: 'Specially designed for women, focusing on health and wellness.',
    bigDescription: 'Our Female Wellness Plan is specifically designed to address the unique health and wellness needs of women. This comprehensive plan includes personalized services, expert consultations, and a range of tools to help you achieve your wellness goals. From fitness to mental well-being, the plan ensures a holistic approach to women’s health. With this plan, you’ll have access to resources tailored to your specific needs, empowering you to live a healthier, more balanced life.',
    category: 'female_specific',
    duration: 6,
    pricing: 4999,
    discountPricing: 4499, // 10% discount
    isSpecial: false,
    features: [
      { id: 'feature_9', icon: '/images/pngs/walking-couple.png', content: 'Personalized Wellness Programs' },
      { id: 'feature_10', icon: 'images/pngs/walking-couple.png', content: 'Monthly Health Consultation' },
      { id: 'feature_11', icon: 'images/pngs/walking-couple.png', content: 'Access to Exclusive Community Events' },
      { id: 'feature_12', icon: 'images/pngs/walking-couple.png', content: 'Free Access to Wellness Workshops' },
      { id: 'feature_13', icon: 'images/pngs/walking-couple.png', content: 'Custom Nutrition Plans' },
      { id: 'feature_14', icon: 'images/pngs/walking-couple.png', content: 'Health Progress Tracker' },
      { id: 'feature_15', icon: 'images/pngs/walking-couple.png', content: 'At-Home Fitness Routines' },
      { id: 'feature_16', icon: 'images/pngs/walking-couple.png', content: 'Discounts on Partner Services' },
    ],
  },

  // Normal Plans
  {
    id: 'plan_3',
    title: 'Basic Yearly Plan',
    description: 'Perfect for beginners with essential features.',
    bigDescription: 'The Basic Yearly Plan is the perfect starting point for those who are new to our services. Offering a comprehensive set of essential features, this plan gives you everything you need to get started on your health journey. Whether you\'re looking to access basic health tools, consultations, or educational content, this plan ensures you have a solid foundation. With a full year of service, it’s an ideal choice for those seeking a simple yet effective health plan.',
    category: 'normal',
    duration: 12,
    pricing: 1999,
    discountPricing: 1799, // 10% discount
    isSpecial: false,
    features: [
      { id: 'feature_17', icon: 'images/pngs/walking-couple.png', content: 'Access to Core Features' },
      { id: 'feature_18', icon: 'images/pngs/walking-couple.png', content: 'Standard Learning Resources' },
      { id: 'feature_19', icon: 'images/pngs/walking-couple.png', content: 'Introductory Tutorials' },
      { id: 'feature_20', icon: 'images/pngs/walking-couple.png', content: 'Community Support' },
      { id: 'feature_21', icon: 'images/pngs/walking-couple.png', content: 'Regular Updates' },
      { id: 'feature_22', icon: 'images/pngs/walking-couple.png', content: 'Basic Scheduling Tools' },
      { id: 'feature_23', icon: 'images/pngs/walking-couple.png', content: 'Performance Analytics' },
      { id: 'feature_24', icon: 'images/pngs/walking-couple.png', content: 'Free Trial Included' },
    ],
  },
  {
    id: 'plan_4',
    title: 'Intermediate Plan',
    description: 'Enhanced features for growing your skills.',
    bigDescription: 'The Intermediate Plan is designed for individuals looking to grow their skills and access enhanced features. With this plan, you can build on your foundation and take your progress to the next level. It offers a broader range of tools, services, and expert consultations to support your development. Perfect for those who have outgrown beginner-level plans, the Intermediate Plan provides a balanced mix of features to help you advance, improve, and refine your health journey effectively.',
    category: 'normal',
    duration: 12,
    pricing: 2999,
    discountPricing: 2699, // 10% discount
    isSpecial: true,
    features: [
      { id: 'feature_25', icon: 'images/pngs/walking-couple.png', content: 'Advanced Tutorials' },
      { id: 'feature_26', icon: 'images/pngs/walking-couple.png', content: 'Certification Programs' },
      { id: 'feature_27', icon: 'images/pngs/walking-couple.png', content: 'Access to Specialized Tools' },
      { id: 'feature_28', icon: 'images/pngs/walking-couple.png', content: 'Group Mentorship Sessions' },
      { id: 'feature_29', icon: 'images/pngs/walking-couple.png', content: 'Networking Opportunities' },
      { id: 'feature_30', icon: 'images/pngs/walking-couple.png', content: 'Priority Support' },
      { id: 'feature_31', icon: 'images/pngs/walking-couple.png', content: 'Skill Development Workshops' },
      { id: 'feature_32', icon: 'images/pngs/walking-couple.png', content: 'Customizable Learning Plans' },
    ],
  },
  {
    id: 'plan_5',
    title: 'Pro Plan',
    description: 'Ideal for professionals seeking to master their field.',
    bigDescription: 'The Pro Plan is the ideal choice for professionals who are looking to master their field. Packed with advanced tools, resources, and expert-level support, this plan is tailored to meet the needs of serious individuals who want to take their skills to the highest level. Whether you’re in the healthcare industry or a related field, the Pro Plan provides you with everything you need to excel. Get access to exclusive features designed for professionals committed to growth and excellence.',
    category: 'normal',
    duration: 12,
    pricing: 3999,
    discountPricing: 3599, // 10% discount
    isSpecial: false,
    features: [
      { id: 'feature_33', icon: 'images/pngs/walking-couple.png', content: 'Pro-Level Tools' },
      { id: 'feature_34', icon: 'images/pngs/walking-couple.png', content: 'Professional Networking Opportunities' },
      { id: 'feature_35', icon: 'images/pngs/walking-couple.png', content: 'Access to Masterclasses' },
      { id: 'feature_36', icon: 'images/pngs/walking-couple.png', content: 'Custom Performance Reports' },
      { id: 'feature_37', icon: 'images/pngs/walking-couple.png', content: 'One-on-One Mentorship' },
      { id: 'feature_38', icon: 'images/pngs/walking-couple.png', content: 'In-depth Analytics' },
      { id: 'feature_39', icon: 'images/pngs/walking-couple.png', content: 'Early Access to New Features' },
      { id: 'feature_40', icon: 'images/pngs/walking-couple.png', content: 'Invitations to Exclusive Industry Events' },
    ],
  },
  {
    id: 'plan_6',
    title: '6-Month Basic Plan',
    description: "Essential features tailored for shorter commitment.",
    bigDescription: 'The 6-Month Basic Plan offers a compact, affordable solution for those who prefer a shorter commitment while still enjoying essential features. This plan provides core modules, standard support, and access to basic resources, making it ideal for users who need a foundation to get started without a long-term obligation. Additionally, you’ll benefit from regular feature updates, introductory tutorials, and discounts on future long-term plans. Perfect for individuals who want to test out the platform and access essential tools without a lengthy subscription.',
    category: 'normal',
    duration: 6,
    pricing: 1299,
    discountPricing: 1169, // 10% discount
    isSpecial: false,
    features: [
      { id: 'feature_41', icon: 'images/pngs/walking-couple.png', content: 'Core Modules Access' },
      { id: 'feature_42', icon: 'images/pngs/walking-couple.png', content: 'Standard Support' },
      { id: 'feature_43', icon: 'images/pngs/walking-couple.png', content: 'Access to Essential Resources' },
      { id: 'feature_44', icon: 'images/pngs/walking-couple.png', content: 'Basic Progress Tracking' },
      { id: 'feature_45', icon: 'images/pngs/walking-couple.png', content: 'Feature Updates During Term' },
      { id: 'feature_46', icon: 'images/pngs/walking-couple.png', content: 'Introductory Tutorials' },
      { id: 'feature_47', icon: 'images/pngs/walking-couple.png', content: 'Discounts on Long-Term Plans' },
      { id: 'feature_48', icon: 'images/pngs/walking-couple.png', content: 'Community Forum Access' },
    ],
  },

  {
    id: 'plan_7',
    title: 'Advanced Yearly Plan',
    description: 'Designed for advanced users seeking more depth.',
    bigDescription: 'The Advanced Yearly Plan is crafted for users who are ready to dive deeper into the platform’s offerings. This plan provides access to in-depth tutorials, mentorship programs, advanced certifications, and customizable learning paths. You’ll also have opportunities to network with experts, use advanced tools, and gain exclusive learning resources. Whether you’re aiming to enhance your skills, progress your career, or deepen your knowledge, the Advanced Yearly Plan ensures you have the tools and support to achieve your professional goals.',
    category: 'normal',
    duration: 12,
    pricing: 4999,
    discountPricing: 4499, // 10% discount
    isSpecial: false,
    features: [
      { id: 'feature_49', icon: 'images/pngs/walking-couple.png', content: 'In-depth Tutorials' },
      { id: 'feature_50', icon: 'images/pngs/walking-couple.png', content: 'Access to Mentorship Programs' },
      { id: 'feature_51', icon: 'images/pngs/walking-couple.png', content: 'Advanced Certification Options' },
      { id: 'feature_52', icon: 'images/pngs/walking-couple.png', content: 'Customizable Learning Paths' },
      { id: 'feature_53', icon: 'images/pngs/walking-couple.png', content: 'Networking with Experts' },
      { id: 'feature_54', icon: 'images/pngs/walking-couple.png', content: 'Advanced Tools Access' },
      { id: 'feature_55', icon: 'images/pngs/walking-couple.png', content: 'Exclusive Learning Resources' },
      { id: 'feature_56', icon: 'images/pngs/walking-couple.png', content: 'Detailed Performance Analytics' },
    ],
  },

  {
    id: 'plan_8',
    title: '1-Year Fitness Plan',
    description: 'Comprehensive fitness plan for a healthier you.',
    bigDescription: 'The 1-Year Fitness Plan is your all-in-one solution for a healthier, more active lifestyle. It offers a wide range of features, including personalized workout plans, dietary guidance, and access to a supportive fitness community. With this plan, you can track your progress, participate in weekly fitness challenges, and enjoy virtual coaching sessions. Additionally, milestone rewards and detailed workout analytics will keep you motivated and on track throughout the year. Whether you’re looking to lose weight, gain muscle, or improve overall fitness, this plan provides the tools and support to help you achieve your fitness goals.',
    category: 'normal',
    duration: 12,
    pricing: 2999,
    discountPricing: 2699, // 10% discount
    isSpecial: true,
    features: [
      { id: 'feature_57', icon: 'images/pngs/walking-couple.png', content: 'Custom Workout Plans' },
      { id: 'feature_58', icon: 'images/pngs/walking-couple.png', content: 'Dietary Guidance' },
      { id: 'feature_59', icon: 'images/pngs/walking-couple.png', content: 'Fitness Progress Tracker' },
      { id: 'feature_60', icon: 'images/pngs/walking-couple.png', content: 'Access to Fitness Community' },
      { id: 'feature_61', icon: 'images/pngs/walking-couple.png', content: 'Weekly Fitness Challenges' },
      { id: 'feature_62', icon: 'images/pngs/walking-couple.png', content: 'Virtual Coaching Sessions' },
      { id: 'feature_63', icon: 'images/pngs/walking-couple.png', content: 'Rewards for Milestone Achievements' },
      { id: 'feature_64', icon: 'images/pngs/walking-couple.png', content: 'Detailed Workout Analytics' },
    ],
  },

];


export default mockData;

