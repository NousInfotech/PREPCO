import { PlanProps } from "@/types";
import { images, videos } from "../../public/assets";

export const mockData: PlanProps[] = [
  {
    id: 'plan_1',
    title: 'The Just For You Plan ',
    imgSrc: images.pngs.justForYou,
    tagline: 'Your health, your priority.',
    description: 'Perfect for individuals seeking to take control of their health.',
    bigDescription: 'This plan includes a comprehensive health package for individuals looking to prioritize their well-being. The Solo Care Plan offers personalized healthcare services to ensure you stay on top of your health.',
    category: 'semi-annual',
    duration: 6,
    pricing: 7500,
    discountPricing: 3838, // Example discount (optional)
    isSpecial: false,
    videoLinkEnglish: videos.justForYouPlan_english,
    videoLinkTamil: videos.justForYouPlan_tamil,
    featuresDisplay: [
      "Master Health Checkup at Home - 1",
      "Virtual / Tele Consultation Services - 5",
      "Nutritionist Online Session (Get Personalized Diet Plans For 6 Months)",
      "Medicine Benefits Worth Rs. 500"
    ],
    membersCount: 1,
    features: [
      { id: 'feature_1', content: 'Master Health Check-up: 1' },
      { id: 'feature_2', content: 'Virtual General OPD Consultations: 2' },
      { id: 'feature_6', content: 'Medicine benefits worth Rs.500 ' },
      { id: 'feature_3', content: 'Virtual Dental OPD Consultations: 1' },
      { id: 'feature_4', content: 'Virtual Physiotherapy Consultations: 1' },
      { id: 'feature_5', content: 'Nutrition Consultation: 1- P- 6M' },
      { id: 'feature_7', content: 'Virtual Dermatology OPD Consultations: 1' },
    ],
  },
  {
    id: 'plan_2',
    title: 'The Just for Two Plan ',
    imgSrc: images.pngs.justForTwo,
    tagline: 'Care starts with two',
    description: 'This plan is perfect for two people looking to prioritize their health together. It includes:',
    bigDescription: 'This plan offers a balanced healthcare service for two individuals. It includes a variety of health services, ensuring both members have access to essential care and personalized wellness plans.',
    category: 'semi-annual',
    duration: 6,
    pricing: 9500,
    discountPricing: 4848, // Example discount (optional)
    isSpecial: false,
    videoLinkEnglish: videos.justForTwoPlan_english,
    videoLinkTamil: videos.justForTwoPlan_tamil,
    membersCount: 2,
    featuresDisplay: [
      "Master Health Checkup at Home - 2",
      "Virtual / Tele Consultation Services - 4",
      "Yoga, Fitness and Nutritionist Online Session – 1 person/6 Months",
      "Laboratory Discount"
    ],
    "features": [
      { "id": "feature_8", "content": "Master Health Check-up: 2" },
      { "id": "feature_9", "content": "General OPD Consultations: 1" },
      { "id": "feature_10", "content": "Virtual General OPD Consultations: 2" },
      { "id": "feature_11", "content": "Virtual Dental OPD Consultations: 1" },
      { "id": "feature_12", "content": "Virtual Physiotherapy Consultations: 1" },
      { "id": "feature_13", "content": "Nutrition Consultation: 1- P- 6M" },
      { "id": "feature_14", "content": "Medicine Benefits Worth Rs. 500" },
      { "id": "feature_15", "content": "Recorded Yoga Sessions: 1- 6M" },
      { "id": "feature_16", "content": "Recorded Fitness Sessions: 1- 6M" },
      { "id": "feature_17", "content": "Laboratory Discounts: 1" },
      { "id": "feature_18", "content": "Out-Patient Discounts: 1" }
    ],
  },
  {
    id: "plan_3",
    title: "The Tri Me Plan ",
    imgSrc: images.pngs.triMe,
    tagline: "Essential care for three.",
    description: "A balanced plan offering healthcare services for three members.",
    bigDescription: "A balanced plan offering healthcare services for three members. This plan includes a variety of consultations, check-ups, and wellness activities for families or small groups.",
    category: "annual",
    duration: 12,
    pricing: 14500,
    discountPricing: 5858,
    isSpecial: false,
    videoLinkEnglish: videos.triMePlan_english,
    videoLinkTamil: videos.triMePlan_tamil,
    membersCount: 3,
    featuresDisplay: [
      "Yoga, Fitness and Nutritionist Online Session – 1 person/6 Months",
      "Master Health Checkup at Home - 3",
      "Virtual / Tele Consultation Services - 6",
      "Laboratory and Out-Patient Discounts"
    ],
    features: [
      { "id": "feature_19", "content": "Master Health Check-up: 3" },
      { "id": "feature_20", "content": "Dental OPD Consultations: 1" },
      { "id": "feature_21", "content": "General OPD Consultations: 1" },
      { "id": "feature_22", "content": "Virtual General OPD Consultations: 2" },
      { "id": "feature_23", "content": "Virtual Dental OPD Consultations: 1" },
      { "id": "feature_24", "content": "Virtual Physiotherapy Consultations: 1" },
      { "id": "feature_25", "content": "Nutrition Consultation: 1- P- 6M" },
      { "id": "feature_26", "content": "Medicine Benefits Worth Rs. 500" },
      { "id": "feature_27", "content": "Virtual Dermatology OPD Consultations: 1" },
      { "id": "feature_28", "content": "Recorded Yoga Sessions: 1- 6M" },
      { "id": "feature_29", "content": "Recorded Fitness Sessions: 1- 6M" },
      { "id": "feature_30", "content": "Laboratory Discounts: 1" },
      { "id": "feature_31", "content": "Out-Patient Discounts: 1" }
    ],

  },

  {
    "id": "plan_4",
    "title": "The Quad Plan ",
    imgSrc: images.pngs.quadPlan,
    "tagline": "One family. One plan. Complete peace of mind.",
    "description": "A foundational plan designed to cater to families of four, offering essential healthcare services.",
    "bigDescription": "This foundational plan is designed for families of four. Offering essential healthcare services, this plan ensures your family receives the support they need for a healthier lifestyle.",
    "category": "annual",
    "duration": 12,
    "pricing": 19500,
    "discountPricing": 7777,
    "isSpecial": false,
    "videoLinkEnglish": videos.quadPlan_english,
    "videoLinkTamil": videos.quadPlan_tamil,
    "membersCount": 4,
    "featuresDisplay": [
      "Physiotherapy Treatment at Home - 1",
      "Virtual / Tele Consultation Services - 8",
      "Online Session Zumba, Yoga, Fitness – 1 person/6 Months",
      "Master Health Checkup at Home - 3 with Get Personalized Diet Plans for 1 person/1 year"
    ],
    "features": [
      { "id": "feature_32", "content": "Master Health Check-up: 4" },
      { "id": "feature_33", "content": "Dental OPD Consultations: 2" },
      { "id": "feature_34", "content": "General OPD Consultations: 2" },
      { "id": "feature_35", "content": "Virtual General OPD Consultations: 2" },
      { "id": "feature_36", "content": "Virtual Dental OPD Consultations: 2" },
      { "id": "feature_37", "content": "Virtual Physiotherapy Consultations: 2" },
      { "id": "feature_38", "content": "Dental Cleaning: 1" },
      { "id": "feature_39", "content": "Nutrition: 1- P- 1Y" },
      { "id": "feature_40", "content": "Medicine Benefits Worth Rs. 500" },
      { "id": "feature_41", "content": "Virtual Dermatology OPD Consultations: 2" },
      { "id": "feature_42", "content": "Recorded Yoga Sessions: 1- 6M" },
      { "id": "feature_43", "content": "Fix Your Problem with Yoga" },
      { "id": "feature_44", "content": "Recorded Fitness Sessions: 1- 6M" },
      { "id": "feature_45", "content": "Recorded Zumba Sessions: 1- 6M" },
      { "id": "feature_46", "content": "In-Patient Discounts: 1" },
      { "id": "feature_47", "content": "Out-Patient Discounts: 1" },
      { "id": "feature_48", "content": "Home-Based Treatments: 1" },
      { "id": "feature_49", "content": "Discounts on Home-Based Treatments" }
    ],

  },


  {
    "id": "plan_5",
    "title": "The Shero Plan",
    imgSrc: images.pngs.sheroPlan,
    "tagline": "Tailored care for women’s health.",
    "description": "A plan exclusively designed for individual women seeking personalized healthcare.",
    "bigDescription": "This plan offers comprehensive healthcare services for women, including consultations, wellness sessions, and discounts on various services.",
    "category": "annual",
    "duration": 12,
    "pricing": 22222,
    "discountPricing": 8888,
    "isSpecial": true,
    "videoLinkEnglish": videos.sheroPlan_english,
    "videoLinkTamil": videos.sheroPlan_tamil,
    "membersCount": 1,
    "featuresDisplay": [
      "Fix Your Problem with Yoga: 1 (Ailment) - 3 Months and Online Session – 1 year",
      "Home Based Treatment Service - 1 & Discounts at All Physiotherapy Treatments, Acupuncture, Varma",
      "Virtual / Tele Consultation Services - 8",
      "Master Health Checkup at Home - 3 with Get Personalized Diet Plans for 1 year"
    ],
    "features": [
      { "id": "feature_50", "content": "Master Health Check-up: 3" },
      { "id": "feature_51", "content": "Virtual General OPD Consultations: 2" },
      { "id": "feature_52", "content": "Virtual Dental OPD Consultations: 1" },
      { "id": "feature_53", "content": "Virtual Physiotherapy Consultations: 3" },
      { "id": "feature_54", "content": "Dental Cleaning: 1" },
      { "id": "feature_55", "content": "Nutrition: 1-P-1Y" },
      { "id": "feature_56", "content": "Medicine Benefits Worth Rs. 500" },
      { "id": "feature_57", "content": "Virtual Dermatology OPD Consultations: 2" },
      { "id": "feature_58", "content": "Recorded Yoga Sessions: 1" },
      { "id": "feature_59", "content": "Fix Your Problem with Yoga: 1-3M" },
      { "id": "feature_60", "content": "Recorded Fitness Sessions: 1" },
      { "id": "feature_61", "content": "Recorded Zumba Sessions: 1" },
      { "id": "feature_62", "content": "Laboratory Discounts: 1" },
      { "id": "feature_63", "content": "In-Patient Discounts: 1" },
      { "id": "feature_64", "content": "Out-Patient Discounts: 1" },
      { "id": "feature_65", "content": "Home-Based Treatments: 1" },
      { "id": "feature_66", "content": "Discounts on Home-Based Treatments: 1" }
    ]
  },
  {
    "id": "plan_6",
    "title": "The Quad Pro Plan",
    imgSrc: images.pngs.quadPlanPro,
    "tagline": "Your everyday boost for a healthier, happier family.",
    "description": "This plan supports families in adopting a healthier lifestyle with added benefits like consultations, wellness kits, and more.",
    "bigDescription": "A comprehensive healthcare plan for families, offering extensive services including consultations, treatments, and wellness benefits.",
    "category": "annual",
    "duration": 12,
    "pricing": 25000,
    "discountPricing": 9999,
    "isSpecial": false,
    "videoLinkEnglish": videos.quadProPlan_english,
    "videoLinkTamil": videos.quadProPlan_tamil,
    "membersCount": 4,
    "featuresDisplay": ["Home Based Treatment Services - 1 (All Physiotherapy, Acupuncture, Varma)",
      "Virtual / Tele Consultation Services - 11",
      "Fix Your Problem with Yoga: 1 - 6 Months and Online Session – 1 year",
      "Master Health Checkup at Home - 4 with Get Personalized Diet Plans – 2 person/1 year"
    ],
    "features": [
      { "id": "feature_67", "content": "Master Health Check-up: 4" },
      { "id": "feature_68", "content": "Dental OPD Consultations: 2" },
      { "id": "feature_69", "content": "General OPD Consultations: 2" },
      { "id": "feature_70", "content": "Virtual General OPD Consultations: 4" },
      { "id": "feature_71", "content": "Virtual Dental OPD Consultations: 2" },
      { "id": "feature_72", "content": "Virtual Physiotherapy Consultations: 3" },
      { "id": "feature_73", "content": "Dental Cleaning: 2" },
      { "id": "feature_74", "content": "Nutrition: 2-P-1Y" },
      { "id": "feature_75", "content": "Pest Control: 1 KITCHEN" },
      { "id": "feature_76", "content": "Medicine Benefits Worth Rs. 500: 2" },
      { "id": "feature_77", "content": "Virtual Dermatology OPD Consultations: 2" },
      { "id": "feature_78", "content": "Recorded Yoga Sessions: 1" },
      { "id": "feature_79", "content": "Fix Your Problem with Yoga: 1-6M" },
      { "id": "feature_80", "content": "Recorded Fitness Sessions: 1" },
      { "id": "feature_81", "content": "Recorded Zumba Sessions: 1" },
      { "id": "feature_82", "content": "Laboratory Discounts: 1" },
      { "id": "feature_83", "content": "In-Patient Discounts: 1" },
      { "id": "feature_84", "content": "Out-Patient Discounts: 1" },
      { "id": "feature_85", "content": "Home-Based Treatments: 1" },
      { "id": "feature_86", "content": "Discounts on Home-Based Treatments: 1" }
    ]
  },
  {
    "id": "plan_7",
    "title": "The Complete Wellness Plan",
    imgSrc: images.pngs.completeWellnessPlan,
    "tagline": "Premium care for the family that deserves the best.",
    "description": "This exclusive plan offers extensive healthcare services for families, ensuring optimal health and wellness.",
    "bigDescription": "A top-tier plan for families, covering extensive healthcare services including consultations, treatments, wellness kits, and much more.",
    "category": "annual",
    "duration": 12,
    "pricing": 32500,
    "discountPricing": 12999,
    "isSpecial": false,
    videoLinkEnglish: videos.completeWellnessPlan_english,
    videoLinkTamil: videos.completeWellnessPlan_tamil,
    "membersCount": 5,
    "featuresDisplay": ["Fix Your Problem with Yoga: 2 (Ailment) and Online Session – 1 year",
      "Home Based Treatment Services - 2 (All Physiotherapy, Acupuncture, Varma)",
      "Virtual / Tele Consultation Services - 16",
      "Master Health Checkup at Home - 4 with Get Personalized Diet Plans – 3 person/1 year"],
    "features": [
      { "id": "feature_87", "content": "Master Health Check-up: 4" },
      { "id": "feature_88", "content": "Dental OPD Consultations: 4" },
      { "id": "feature_89", "content": "General OPD Consultations: 4" },
      { "id": "feature_90", "content": "Virtual General OPD Consultations: 4" },
      { "id": "feature_91", "content": "Virtual Dental OPD Consultations: 4" },
      { "id": "feature_92", "content": "Virtual Physiotherapy Consultations: 4" },
      { "id": "feature_93", "content": "Dental Cleaning: 3" },
      { "id": "feature_94", "content": "Nutrition: 3-P-1Y" },
      { "id": "feature_95", "content": "Pest Control: 1 KITCHEN + CONSULTATION" },
      { "id": "feature_96", "content": "Medicine Benefits Worth Rs. 500: 4" },
      { "id": "feature_97", "content": "Virtual Dermatology OPD Consultations: 4" },
      { "id": "feature_98", "content": "Recorded Yoga Sessions: 1" },
      { "id": "feature_99", "content": "Fix Your Problem with Yoga: 2" },
      { "id": "feature_100", "content": "Recorded Fitness Sessions: 1" },
      { "id": "feature_101", "content": "Recorded Zumba Sessions: 1" },
      { "id": "feature_102", "content": "Laboratory Discounts: 1" },
      { "id": "feature_103", "content": "In-Patient Discounts: 1" },
      { "id": "feature_104", "content": "Out-Patient Discounts: 1" },
      { "id": "feature_105", "content": "Home-Based Treatments: 2" },
      { "id": "feature_106", "content": "Discounts on Home-Based Treatments: 1" }
    ]
  },
  {
    "id": "plan_8",
    "title": "The Ultimate Wellness Plan",
    imgSrc: images.pngs.ultimateWellnessPlan,
    "tagline": "All your health essentials, wrapped in one perfect package.",
    "description": "This ultimate plan offers the best care for families, ensuring complete health and wellness coverage.",
    "bigDescription": "The most comprehensive plan for families seeking complete care, offering a wide range of benefits and services.",
    "category": "annual",
    "duration": 12,
    "pricing": 37500,
    "discountPricing": 14999,
    "isSpecial": false,
    "videoLinkEnglish": videos.ultimateWellnessPlan_english,
    "videoLinkTamil": videos.ultimateWellnessPlan_tamil,
    "membersCount": 5,
    "featuresDisplay": [
      "Fix Your Problem with Yoga: 2 (Ailment) and Online Session – 1 year",
      "Home Based Treatment Services - 3 (All Physiotherapy, Acupuncture, Varma)",
      "Virtual / Tele Consultation Services - 20",
      "Master Health Checkup at Home - 5 with Get Personalized Diet Plans for 1 year"
    ],
    "features": [
      { "id": "feature_107", "content": "Master Health Check-up: 5" },
      { "id": "feature_108", "content": "Dental OPD Consultations: 5" },
      { "id": "feature_109", "content": "General OPD Consultations: 5" },
      { "id": "feature_110", "content": "Virtual General OPD Consultations: 5" },
      { "id": "feature_111", "content": "Virtual Dental OPD Consultations: 5" },
      { "id": "feature_112", "content": "Virtual Physiotherapy Consultations: 5" },
      { "id": "feature_113", "content": "Dental Cleaning: 4" },
      { "id": "feature_114", "content": "Nutrition: 5-P-1Y" },
      { "id": "feature_115", "content": "Pest Control: 1 KITCHEN + CONSULTATION" },
      { "id": "feature_116", "content": "Medicine Benefits Worth Rs. 500: 5" },
      { "id": "feature_117", "content": "Virtual Dermatology OPD Consultations: 5" },
      { "id": "feature_118", "content": "Recorded Yoga Sessions: 1" },
      { "id": "feature_119", "content": "Fix Your Problem with Yoga: 2" },
      { "id": "feature_120", "content": "Recorded Fitness Sessions: 2" },
      { "id": "feature_121", "content": "Recorded Zumba Sessions: 2" },
      { "id": "feature_122", "content": "Laboratory Discounts: 2" },
      { "id": "feature_123", "content": "In-Patient Discounts: 2" },
      { "id": "feature_124", "content": "Out-Patient Discounts: 2" },
      { "id": "feature_125", "content": "Home-Based Treatments: 2" },
      { "id": "feature_126", "content": "Discounts on Home-Based Treatments: 2" }
    ]
  },
  {
    "id": "plan_9",
    "title": "Mini Me Plan ",
    imgSrc: images.pngs.miniMe,
    "tagline": "Big care for your little one!",
    "description": "A complete wellness plan to keep your child healthy, active, and thriving.",
    "bigDescription": "Designed specifically for kids, this plan ensures their well-being with essential healthcare services, expert consultations, and fun wellness activities.",
    "category": "annual",
    "duration": 12,
    "pricing": 12500,
    "discountPricing": 4999,
    "isSpecial": true,
    "videoLinkEnglish": videos.miniMePlan_english,
    "videoLinkTamil": videos.miniMePlan_tamil,
    "memberType": "kid",
    "membersCount": 1,
    "featuresDisplay": [
      "1-year Nutrition consultations and diet plans",
      "Virtual / Tele Consultation Services- 10",
      "Virtual Dental Consultation Services -5",
      "Online Session Zumba ,Yoga , Fitness ",
    ],
    "features": [
      { "id": "feature_203", "content": "Virtual General OPD Consultations: 10" },
      { "id": "feature_204", "content": "Virtual Dental OPD Consultations: 5" },
      { "id": "feature_205", "content": "Dental Cleaning: 1" },
      { "id": "feature_206", "content": "Nutrition: 1" },
      { "id": "feature_207", "content": "Medicine Benefits Worth Rs. 500 - 1" },
      { "id": "feature_208", "content": "Virtual Dermatology OPD Consultations: 2" },
      { "id": "feature_209", "content": "Recorded Yoga Sessions: 1" },
      { "id": "feature_210", "content": "Recorded Fitness Sessions: 1" },
      { "id": "feature_211", "content": "Recorded Zumba Sessions: 1" }
    ]

  },
  {
    "id": "plan_10",
    "title": "Just 50 Plan",
    imgSrc: images.pngs.just50,
    "tagline": "Care, comfort, and convenience for your golden years",
    "description": "A tailored health plan ensuring effortless care and well-being for seniors.",
    "bigDescription": "Specially crafted for senior citizens, this plan offers a combination of home-based treatments, comprehensive health checkups, and expert consultations for a hassle-free healthcare experience.",
    "category": "annual",
    "duration": 12,
    "pricing": 25500,
    "discountPricing": 9999,
    "isSpecial": true,
    "videoLinkEnglish": videos.just50Plan_english,
    "videoLinkTamil": videos.just50Plan_tamil,
    "memberType": "Senior Citizen",
    "membersCount": 2,
    "featuresDisplay": [
      "Home Based Treatment Services -4 (All Physiotherapy, Acupuncture, Varma)",
      "Master Health Checkup @ Home Services - 2 with Get Personalized Diet Plans for 1yr",
      "Virtual Physiotherapy Consultations Services – 4",
      "Online Yoga Session ",
    ],
    "features": [
      { "id": "feature_212", "content": "Master Health Check-up: 4 - 2 comprehensive MHCs for each member and 2 follow-up MHCs for each member in the plan" },
      { "id": "feature_213", "content": "Virtual General OPD Consultations: 4" },
      { "id": "feature_214", "content": "Virtual Dental OPD Consultations: 2" },
      { "id": "feature_215", "content": "Virtual Physiotherapy Consultations: 4" },
      { "id": "feature_216", "content": "Nutrition: 2" },
      { "id": "feature_217", "content": "Medicine Benefits Worth Rs. 500 - 2" },
      { "id": "feature_218", "content": "Laboratory Discounts: 1" },
      { "id": "feature_219", "content": "Live & Recorded Yoga Sessions: 1" },
      { "id": "feature_220", "content": "Fix your problem with Yoga: 1" },
      { "id": "feature_221", "content": "Home Based Treatments: 4" },
      { "id": "feature_222", "content": "Discounts on Home Based Treatments: 1" }
    ]

  }
];



export default mockData;

