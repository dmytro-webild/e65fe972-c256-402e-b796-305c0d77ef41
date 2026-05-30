"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Candy, Droplet, Facebook, Feather, FileText, Gauge, Instagram, Palette, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "History",
          id: "#history",
        },
        {
          name: "Types",
          id: "#types",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Uses & Risks",
          id: "#uses-risks",
        },
        {
          name: "Laws & Health",
          id: "#laws-health",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/medical-cannabis-organic-product-badges_23-2148787931.jpg"
      logoAlt="ThaiCannabisGuide Logo"
      brandName="ThaiCannabisGuide"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "plain",
      }}
      title="Cannabis in Thailand: Medical Insights & Legal Clarity"
      description="Your trusted resource for evidence-based information on medical cannabis in Thailand. Explore its history, uses, products, and the evolving legal landscape."
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/marijuana-leaf_1150-13454.jpg?_wi=1",
          imageAlt: "Medical cannabis cultivation in Thailand",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cute-girl-meditating-near-palm_23-2147791945.jpg?_wi=1",
          imageAlt: "Traditional Thai medicine using cannabis",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-green-plant-leaves_23-2148791184.jpg?_wi=1",
          imageAlt: "Modern medical cannabis products",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cannabis-cannabis-seeds-cannabis-leaves-placed-green-board-wooden-floor_1150-18863.jpg?_wi=1",
          imageAlt: "Cannabis research and patient consultation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cbd-treatment-arrangement-still-life_23-2151160222.jpg",
          imageAlt: "High-quality medical cannabis flowers",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-expresses-anger-therapy_482257-119253.jpg",
          imageAlt: "Health benefits of cannabis with scientific elements",
        },
      ]}
    />
  </div>

  <div id="history" data-section="history">
      <TextSplitAbout
      useInvertedBackground={false}
      title="A Rich Heritage: Cannabis in Thai History"
      description={[
        "Historically, cannabis (Ganja) has been deeply woven into Thai culture, used for centuries in traditional medicine and as a culinary spice. Ancient texts and local practices reveal its role in alleviating pain, promoting relaxation, and aiding digestion. Its use was largely integrated into daily life and traditional healing systems.",
        "While its recreational use was prohibited in the mid-20th century under international drug control treaties, its medicinal roots remained acknowledged by practitioners of traditional Thai medicine. This deep cultural and historical connection ultimately paved the way for its modern re-emergence and legalization in the healthcare sector, emphasizing its therapeutic potential.",
      ]}
    />
  </div>

  <div id="types" data-section="types">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "sativa",
          name: "Sativa Strains",
          price: "Energizing",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-drop-cactus_23-2147759121.jpg",
          imageAlt: "Sativa cannabis flower",
        },
        {
          id: "indica",
          name: "Indica Strains",
          price: "Relaxing",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-green-plant-leaves-with-yellowing-discoloration_632498-60854.jpg",
          imageAlt: "Indica cannabis flower",
        },
        {
          id: "hybrid-balanced",
          name: "Hybrid (Balanced)",
          price: "Mixed Effects",
          imageSrc: "http://img.b2bpic.net/free-photo/thc-cbd-marijuana-joint-flowers-ash-tray-with-nude-illustration-drawing-pad_181624-17183.jpg",
          imageAlt: "Balanced hybrid cannabis flower",
        },
        {
          id: "hybrid-sativa",
          name: "Hybrid (Sativa-dominant)",
          price: "Uplifting & Relaxing",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-eating-seaweed-snacks_23-2150872536.jpg",
          imageAlt: "Sativa-dominant hybrid cannabis flower",
        },
        {
          id: "hybrid-indica",
          name: "Hybrid (Indica-dominant)",
          price: "Relaxing & Cerebral",
          imageSrc: "http://img.b2bpic.net/free-photo/sensual-smoker-girl-all-black-red-lips-hat-goth-dramatic-woman-smoking-common-reed_627829-6231.jpg",
          imageAlt: "Indica-dominant hybrid cannabis flower",
        },
        {
          id: "high-cbd",
          name: "High-CBD Strains",
          price: "Non-Intoxicating",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-using-cbd-cream-pain_23-2150830170.jpg",
          imageAlt: "High CBD cannabis flower",
        },
        {
          id: "thcv-rich",
          name: "THCV-rich Strains",
          price: "Appetite Suppressant",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-organic-fresh-broccoli-supermarket_23-2148209733.jpg",
          imageAlt: "THCV-rich cannabis flower",
        },
        {
          id: "cbg-rich",
          name: "CBG-rich Strains",
          price: "Anti-inflammatory Potential",
          imageSrc: "http://img.b2bpic.net/free-photo/vibrant-marijuana-plant-leaves-with-vibrant-green-colors_23-2151299916.jpg",
          imageAlt: "CBG-rich cannabis flower",
        },
        {
          id: "landrace-thai",
          name: "Landrace Thai Strains",
          price: "Indigenous Genetics",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-green-marijuana-plant-white-pot_181624-22443.jpg",
          imageAlt: "Landrace Thai cannabis flower",
        },
        {
          id: "modern-hybrid",
          name: "Modern Hybrid Strains",
          price: "Targeted Effects",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-meditating-outdoors_23-2149860556.jpg",
          imageAlt: "Modern hybrid cannabis flower",
        },
      ]}
      title="Understanding Cannabis Varieties"
      description="Explore the diverse world of cannabis strains and their unique characteristics, from their cannabinoid profiles to their therapeutic effects for various medical needs."
    />
  </div>

  <div id="products" data-section="products">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Dried Flower",
          description: "Inhalable via vaporization for rapid onset and precise, titratable dosing, allowing immediate therapeutic effects.",
          bentoComponent: "reveal-icon",
          icon: Feather,
          imageSrc: "http://img.b2bpic.net/free-photo/from-woman-with-flower_23-2147781231.jpg",
          imageAlt: "ancient thai traditional medicine herbalist",
        },
        {
          title: "CBD Oils & Tinctures",
          description: "Administered sublingually, offering moderate onset and sustained effects ideal for consistent daily therapeutic use without strong psychoactive impact.",
          bentoComponent: "reveal-icon",
          icon: Droplet,
          imageSrc: "http://img.b2bpic.net/free-vector/medical-cannabis-organic-product-badges_23-2148787931.jpg",
          imageAlt: "ancient thai traditional medicine herbalist",
        },
        {
          title: "Topicals & Creams",
          description: "Applied directly to the skin for localized pain or inflammation relief. Provides targeted effects without systemic absorption or intoxication.",
          bentoComponent: "reveal-icon",
          icon: Palette,
          imageSrc: "http://img.b2bpic.net/free-photo/marijuana-leaf_1150-13454.jpg?_wi=2",
          imageAlt: "ancient thai traditional medicine herbalist",
        },
        {
          title: "Medical Edibles",
          description: "Ingestible forms like gummies or capsules, characterized by delayed onset but prolonged therapeutic effects. Requires careful dosing due to potency.",
          bentoComponent: "reveal-icon",
          icon: Candy,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-girl-meditating-near-palm_23-2147791945.jpg?_wi=2",
          imageAlt: "ancient thai traditional medicine herbalist",
        },
        {
          title: "Concentrates",
          description: "Highly potent extracts such as shatter or wax, typically vaporized. Recommended for experienced patients under strict medical supervision due to their strength.",
          bentoComponent: "reveal-icon",
          icon: Gauge,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-green-plant-leaves_23-2148791184.jpg?_wi=2",
          imageAlt: "ancient thai traditional medicine herbalist",
        },
        {
          title: "Transdermal Patches",
          description: "Offer slow, steady release of cannabinoids through the skin, providing consistent therapeutic effects over many hours for sustained relief.",
          bentoComponent: "reveal-icon",
          icon: FileText,
          imageSrc: "http://img.b2bpic.net/free-photo/cannabis-cannabis-seeds-cannabis-leaves-placed-green-board-wooden-floor_1150-18863.jpg?_wi=2",
          imageAlt: "ancient thai traditional medicine herbalist",
        },
      ]}
      title="Diverse Forms: Exploring Cannabis Products"
      description="Medical cannabis comes in various formulations, each offering distinct delivery methods, onset times, and therapeutic profiles for personalized treatment plans."
    />
  </div>

  <div id="uses-risks" data-section="uses-risks">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "medical-uses",
          title: "Q: What are the primary medical uses of cannabis?",
          content: "A: Medical cannabis is recognized for its potential in managing chronic pain, reducing nausea and stimulating appetite (especially in chemotherapy patients), alleviating muscle spasms (e.g., in Multiple Sclerosis), and reducing seizure frequency (e.g., in certain epilepsies) [1, 2]. It also shows promise in improving sleep for those with insomnia [3].",
        },
        {
          id: "general-benefits",
          title: "Q: What are the general health benefits of medical cannabis?",
          content: "A: Beyond specific conditions, cannabis may offer broad benefits such as anti-inflammatory effects, neuroprotective properties, mood regulation, and relief from anxiety and stress. CBD, in particular, is noted for its anxiolytic and anti-inflammatory actions without psychotropic effects [4].",
        },
        {
          id: "advantages",
          title: "Q: What are the main advantages of using medical cannabis?",
          content: "A: Advantages include a natural alternative to synthetic drugs, potential for fewer severe side effects compared to opioids for pain, and a versatile range of product types for individualized treatment. For many, it can significantly improve quality of life when used appropriately [5].",
        },
        {
          id: "disadvantages",
          title: "Q: What are the potential disadvantages or risks associated with cannabis use?",
          content: "A: Disadvantages can include psychoactive effects (from THC), potential for dependence, cognitive impairment (short-term memory, attention), dry mouth, red eyes, and increased heart rate. Long-term risks may include respiratory issues with smoking and potential psychiatric effects in vulnerable individuals [6].",
        },
        {
          id: "safety-contraindications",
          title: "Q: Is medical cannabis safe for everyone?",
          content: "A: No. It is contraindicated in pregnant or breastfeeding women, individuals with a history of psychosis, severe cardiovascular conditions, and certain liver or kidney diseases. Consultation with a qualified medical professional is crucial before considering any cannabis use [7].<br/><br/>**References:**<br/>[1] National Academies of Sciences, Engineering, and Medicine. (2017). The Health Effects of Cannabis and Cannabinoids: The Current State of Evidence and Recommendations for Research. The National Academies Press.<br/>[2] Whiting, P. F., et al. (2015). Cannabinoids for Medical Use: A Systematic Review and Meta-analysis. JAMA, 313(24), 2456-2473.<br/>[3] Babson, K. A., et al. (2017). Cannabis, Cannabinoids, and Sleep: a Review of the Literature. Current Psychiatry Reports, 19(4), 23.<br/>[4] Shannon, S., et al. (2019). Cannabidiol in Anxiety and Sleep: A Large Case Series. The Permanente Journal, 23, 18-041.<br/>[5] MacCallum, C. A., & Russo, E. B. (2018). Practical considerations in medical cannabis administration and dosing. European Journal of Pain, 22(7), 1195-1206.<br/>[6] Volkow, N. D., et al. (2014). Adverse Health Effects of Marijuana Use. New England Journal of Medicine, 370, 2219-2227.<br/>[7] World Health Organization. (2018). Cannabidiol (CBD) Critical Review Report.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-couple-receiving-prescription-medicine-from-female-doctor-consultations-clinic-focus-is-doctor_637285-1154.jpg"
      imageAlt="Doctor explaining medical cannabis to a patient"
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="Medical Applications & Balanced Perspectives"
      description="Understand the therapeutic potential of cannabis, alongside a candid look at its benefits and potential risks, supported by medical evidence."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="laws-health" data-section="laws-health">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Navigating Thai Cannabis Regulations & Health Insights"
      description="Stay informed on Thailand's medical cannabis laws and explore its impact on specific health conditions with evidence-based research and medical references."
      blogs={[
        {
          id: "thai-laws",
          category: "Legal",
          title: "Thai Cannabis Laws: A Comprehensive Guide to Medical Use",
          excerpt: "Thailand's journey with cannabis legalization has focused strictly on medical applications. Understanding the nuances of these laws, including prescription requirements, authorized clinics, and legal possession limits, is paramount for both patients and providers. Recreational use remains illegal and carries severe penalties. Always consult official government sources for the most current information.",
          imageSrc: "http://img.b2bpic.net/free-photo/cannabis-legalization-concept-created-with-generative-ai-technology_185193-161922.jpg",
          imageAlt: "Thai Cannabis Laws document with gavel",
          authorName: "ThaiCannabisGuide Team",
          authorAvatar: "http://img.b2bpic.net/free-vector/medical-cannabis-organic-product-badges_23-2148787931.jpg",
          date: "October 26, 2024",
        },
        {
          id: "cannabis-hypertension",
          category: "Health",
          title: "Cannabis and High Blood Pressure (Hypertension): What the Research Says",
          excerpt: "The relationship between cannabis and blood pressure is complex. While some studies suggest acute use can transiently increase heart rate and decrease blood pressure, long-term effects on chronic hypertension are still being investigated. Patients with cardiovascular conditions should exercise extreme caution and consult their doctor. <br/><br/>**References:**<br/>[8] Pacher, P., et al. (2006). The endocannabinoid system as an emerging therapeutic target in cardiovascular disease. Pharmacological Reviews, 58(3), 389-462.<br/>[9] Grinspoon, P. (2019). Medical marijuana. Harvard Health Publishing.",
          imageSrc: "http://img.b2bpic.net/free-photo/sewing-needles-tomato-cushion_23-2148242115.jpg",
          imageAlt: "Blood pressure monitor with cannabis elements",
          authorName: "ThaiCannabisGuide Team",
          authorAvatar: "http://img.b2bpic.net/free-vector/cannabis-gradient-design-logo_343694-2429.jpg",
          date: "October 26, 2024",
        },
        {
          id: "cannabis-diabetes",
          category: "Health",
          title: "Cannabis and Diabetes Management: A Closer Look at Blood Sugar",
          excerpt: "Research into cannabis and diabetes is ongoing, with some preliminary studies suggesting cannabinoids like CBD may have anti-inflammatory properties beneficial for diabetes-related complications. However, direct evidence for cannabis as a primary treatment for blood sugar regulation is limited, and patients should maintain conventional diabetes management under medical guidance. <br/><br/>**References:**<br/>[10] Rajaei, S., et al. (2019). The Effects of Cannabinoids on Diabetes Mellitus and its Complications. European Journal of Pharmacology, 856, 172382.<br/>[11] Penner, E. A., et al. (2013). The impact of marijuana use on glucose, insulin, and insulin resistance among US adults. American Journal of Medicine, 126(7), 591-598.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pills-wood-stub-with-cactus-notepad-needle-dark-wooden-background_176474-1756.jpg",
          imageAlt: "Blood sugar monitor with cannabis leaf",
          authorName: "ThaiCannabisGuide Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/fresh-vibrant-green-marijuana-leaves-varied-background_23-2151299934.jpg",
          date: "October 26, 2024",
        },
        {
          id: "cannabis-insomnia",
          category: "Health",
          title: "Cannabis for Insomnia: Restoring Your Sleep Cycle",
          excerpt: "Many individuals report using cannabis to aid sleep, with Indica strains often favored for their sedative effects. Cannabinoids like THC and CBD can influence sleep cycles, potentially reducing sleep latency and improving sleep quality. However, long-term or high-dose use can sometimes disrupt sleep architecture. Always consult a healthcare provider for sleep disorders.<br/><br/>**References:**<br/>[12] Babson, K. A., et al. (2017). Cannabis, Cannabinoids, and Sleep: a Review of the Literature. Current Psychiatry Reports, 19(4), 23.<br/>[13] VanDolah, S. A., et al. (2019). Clinical endocannabinoid deficiency (CECD): can this concept explain therapeutic benefits of cannabis in migraine, fibromyalgia, irritable bowel syndrome and other treatment-resistant conditions?. Neuro Endocrinology Letters, 40(9-10), 1083-1090.",
          imageSrc: "http://img.b2bpic.net/free-photo/make-candy-using-marijuana-leaves-as-component_1150-10023.jpg",
          imageAlt: "Person sleeping peacefully with cannabis influence",
          authorName: "ThaiCannabisGuide Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/fresh-vibrant-green-marijuana-leaves-varied-background_23-2151299937.jpg",
          date: "October 26, 2024",
        },
        {
          id: "cannabis-other-diseases",
          category: "Health",
          title: "Cannabis and Other Chronic Diseases: Pain, Epilepsy, MS, and More",
          excerpt: "Medical cannabis has shown therapeutic potential across a spectrum of other chronic conditions. It is frequently prescribed for neuropathic pain, spasticity in multiple sclerosis, and refractory epilepsy. Ongoing research continues to uncover its mechanisms and applications in diverse clinical settings, offering hope for various patients. <br/><br/>**References:**<br/>[14] Koppel, B. S., et al. (2014). Systematic review: efficacy and safety of medical marijuana in selected neurologic disorders: report of the Guideline Development Subcommittee of the American Academy of Neurology. Neurology, 82(17), 1556-1563.<br/>[15] Devinsky, O., et al. (2017). Effect of Cannabidiol on Drop Seizures in the Lennox–Gastaut Syndrome. New England Journal of Medicine, 376(21), 2011-2020.",
          imageSrc: "http://img.b2bpic.net/free-photo/sad-anxious-caring-father-holding-sleeping-ill-little-children-hand-pediatric-hospital-patient-ward-sick-girl-using-nasal-tube-hospital-bed-while-attentive-parent-looking-her_482257-41075.jpg",
          imageAlt: "Cannabis plant illustration for chronic pain relief",
          authorName: "ThaiCannabisGuide Team",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=d3bzac",
          date: "October 26, 2024",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="ThaiCannabisGuide"
      copyrightText="© 2024 ThaiCannabisGuide. All rights reserved. For educational purposes only."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://www.facebook.com/ThaiCannabisGuide",
          ariaLabel: "Facebook",
        },
        {
          icon: Twitter,
          href: "https://twitter.com/ThaiCannabisGuide",
          ariaLabel: "Twitter",
        },
        {
          icon: Instagram,
          href: "https://www.instagram.com/ThaiCannabisGuide",
          ariaLabel: "Instagram",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
