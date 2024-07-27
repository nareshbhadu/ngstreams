import React from "react";
import Accordian from "./Accordian";

const FAQsSection = () => {
  const faqData = [
    {
      id: 1,
      ques: "What is Quality of Service (QoS) and Quality of Experience (QoE), and how does NGStreams improve them?",
      ans: [
        {
          text: "Our products enhance QoS by optimizing network performance, ensuring efficient bandwidth usage and minimizing latency. QoE is improved through adaptive streaming and enhanced video quality, providing a superior user experience. ",
        },
        {
          text: " Our solutions are designed to balance network load effectively, ensuring consistent and high-quality service delivery.",
        },
      ],
    },
    {
      id: 2,
      ques: "How does NGStreams Transcoding enhance the media streaming experience across different devices and platforms?",
      ans: [
        {
          text: "Transcoding is the process of converting media files into various formats suitable for different devices. ",
        },
        {
          text: "It is crucial for streaming as it ensures compatibility across various platforms and devices, enhancing accessibility. Our transcoding solutions offer high-speed processing with minimal quality loss, supporting a wide range of media formats.",
        },
      ],
    },
    {
      id: 3,
      ques: "How does Content Enrichment by NGStreams enhance content discoverability?",
      ans: [
        {
          text: "Content enrichment involves adding detailed information to media files, making them easier to categorize and search. It enhances content discoverability by improving accuracy in search queries and recommendations. ",
        },
        {
          text: "Our solutions use advanced algorithms to automatically generate rich, relevant metadata, streamlining content management and user navigation.",
        },
      ],
    },
    {
      id: 4,
      ques: "What makes our Set-Top Boxes amazing?",
      ans: [
        {
          text: "Our Set-Top Boxes are equipped with high-definition streaming capabilities, user-friendly interfaces, and support for a wide range of apps and services. They offer features like voice control, personalized recommendations, and seamless integration with various streaming platforms.",
        },
        {
          text: "Enhanced security and regular software updates ensure a consistently high-quality viewing experience.",
        },
      ],
    },
    {
      id: 5,
      ques: "How does our Social Analytics service help in content strategy?",
      ans: [
        {
          text: "Our Social Analytics service provides insights into audience preferences and trends by analyzing social media data.",
        },
        {
          text: "This information helps in tailoring content strategies to align with viewer interests and engagement patterns. It aids in making data-driven decisions to optimize content creation and distribution.",
        },
      ],
    }, {
      id: 6,
      ques: "What Traffic Management Solutions do we offer and how do they benefit ISPs?",
      ans: [
        {
          text: "Our Traffic Management Solutions include bandwidth allocation, peak time management, and quality of service prioritization. ",
        },
        {
          text: "These tools help ISPs manage network traffic efficiently, reducing congestion and improving overall service quality. They enable ISPs to offer reliable, high-speed internet services to their customers.",
        },
      ],
    }, {
      id: 7,
      ques: "How does CloudTV differ from traditional television broadcasting?",
      ans: [
        {
          text: "CloudTV streams content over the internet, offering greater flexibility and a wider range of features compared to traditional broadcasting. It allows for on-demand content access, personalized viewing experiences, and integration with other online services.",
        },
        {
          text: "Our CloudTV solution provides a scalable, cost-effective alternative to traditional TV infrastructure.",
        },
      ],
    },
    {
      id: 8,
      ques: "What are the advantages of our IPTV services?",
      ans: [
        {
          text: "Our IPTV services offer high-definition streaming, extensive content libraries, and interactive features like video on demand and time-shifted TV.",
        },
        {
          text: "They provide a seamless viewing experience with personalized content recommendations and multi-device support. Enhanced user interfaces and reliable content delivery set our IPTV services apart.",
        },
      ],
    },
    {
      id: 9,
      ques: "How do NGStreams OTT services stand out in the competitive market?",
      ans: [
        {
          text: "Our OTT services stand out through exceptional content variety, superior streaming quality, and cross-platform compatibility. We focus on user-centric features, such as personalized recommendations and interactive interfaces.",
        },
        {
          text: "Continuous innovation and customer-focused strategies keep us ahead in the competitive OTT market.",
        },
      ],
    },
    {
      id: 10,
      ques: "Can NGStreams products and services be integrated into existing systems?",
      ans: [
        {
          text: "That's the best part, our products and services are designed for easy integration with existing systems and platforms. We provide comprehensive support and customizable solutions to ensure smooth integration and minimal disruption.",
        },
        {
          text: "Our aim is to enhance existing infrastructures with our advanced technology while ensuring user-friendliness and cost-effectiveness.",
        },
      ],
    }
  ];

  return (
    <>
      <div className="faq_section">
        <div>
          <div className="faq_heading">
            <h3>FAQs,</h3>
            <h3 className="heading_grad"> &nbsp;Simplified</h3>
          </div>
          <div className="faq_sub_heading">
            <p>Curious about NGStreams? Let's clarify all your questions! </p>
            <p>
              Discover our unique approach, project timelines, and what sets us
              apart in the NGStreams.
            </p>
          </div>
        </div>

        <div className="random">
          <div className="faq_conatiner">
            <Accordian data={faqData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQsSection;
