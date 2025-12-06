import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./resource.css";

// Sample blog posts (same as in all-resources)
const sampleBlogPosts = {
  "1": {
    id: 1,
    title: "Understanding Corporate Governance in Nigeria",
    category: "Corporate Law",
    author: "Mrs. Abidemi Ademola",
    date: "December 1, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    content: `Corporate governance is essential for business success in today's competitive environment. As businesses grow and evolve, the need for effective governance structures becomes increasingly critical. In Nigeria, where the business landscape is dynamic and challenging, proper corporate governance can be the difference between sustainable success and failure.

**What is Corporate Governance?**

Corporate governance refers to the system of rules, practices, and processes by which a company is directed and controlled. It essentially involves balancing the interests of a company's many stakeholders, such as shareholders, management, customers, suppliers, financiers, government, and the community.

**Key Principles of Corporate Governance**

1. **Transparency and Disclosure**: Companies must be transparent in their operations and disclose relevant information to stakeholders in a timely manner. This builds trust and confidence among investors and the public.

2. **Accountability**: Board members and executives must be accountable for their actions and decisions. Clear lines of responsibility should be established and maintained.

3. **Fairness and Equity**: All stakeholders should be treated fairly and equitably. This includes minority shareholders who should have their rights protected.

4. **Responsibility**: The board and management should recognize and respect the rights of stakeholders and should be responsible corporate citizens.

**The Nigerian Context**

In Nigeria, corporate governance has gained significant attention, particularly following various corporate scandals and failures. The Securities and Exchange Commission (SEC) has issued guidelines and codes of corporate governance that companies must comply with.

**Benefits of Strong Corporate Governance**

- Enhanced investor confidence and access to capital
- Improved operational efficiency
- Better risk management
- Enhanced reputation and stakeholder trust
- Compliance with regulatory requirements
- Long-term sustainability

**Implementing Effective Governance**

To implement effective corporate governance, companies should:
- Establish a competent and independent board
- Implement robust internal controls
- Ensure regular audit and compliance reviews
- Maintain clear policies and procedures
- Foster a culture of integrity and ethical behavior
- Engage stakeholders effectively

At DFA Solicitors, we help businesses establish and maintain world-class corporate governance frameworks that protect stakeholder interests and ensure long-term sustainability. Our expertise in Nigerian corporate law and governance best practices makes us the ideal partner for your governance needs.`
  },
  "2": {
    id: 2,
    title: "Data Privacy Compliance: NDPR Requirements for Businesses",
    category: "Data Privacy",
    author: "DFA Legal Team",
    date: "November 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
    content: `The Nigeria Data Protection Regulation (NDPR) has transformed how businesses handle personal data. Understanding and complying with NDPR requirements is no longer optional—it's a legal necessity that can protect your business from significant penalties and reputational damage.

**Understanding NDPR**

The NDPR, issued by the National Information Technology Development Agency (NITDA), is Nigeria's primary data protection legislation. It applies to all transactions intended for processing personal data and to all natural persons residing in Nigeria.

**Key NDPR Requirements**

**1. Lawful Basis for Processing**
Organizations must have a lawful basis for processing personal data. This could include consent, contract performance, legal obligation, vital interests, public interest, or legitimate interests.

**2. Data Subject Rights**
The NDPR grants individuals several rights including:
- Right to access their personal data
- Right to rectification
- Right to erasure (right to be forgotten)
- Right to object to processing
- Right to data portability
- Right to withdraw consent

**3. Consent Requirements**
When relying on consent as the lawful basis for processing, organizations must ensure:
- Consent is freely given and specific
- Clear affirmative action is required
- Consent can be withdrawn at any time
- Records of consent are maintained

**4. Data Protection Audit**
Organizations processing personal data must conduct periodic data protection audits to verify and demonstrate compliance with NDPR provisions.

**5. Data Protection Officer (DPO)**
Organizations must appoint a Data Protection Officer who will:
- Monitor compliance with NDPR
- Serve as point of contact with NITDA
- Advise on data protection matters
- Conduct data protection impact assessments

**Implementation Steps**

To ensure NDPR compliance, businesses should:

1. **Conduct a Data Audit**: Identify what personal data you collect, how it's processed, where it's stored, and who has access.

2. **Update Privacy Policies**: Ensure your privacy policy clearly explains data processing activities in plain language.

3. **Implement Security Measures**: Adopt appropriate technical and organizational measures to protect personal data.

4. **Train Staff**: Educate employees about data protection principles and their responsibilities.

5. **Establish Procedures**: Create procedures for handling data subject requests and reporting breaches.

6. **Document Compliance**: Maintain records of processing activities and compliance measures.

**Penalties for Non-Compliance**

The NDPR provides for significant penalties including:
- Administrative fines
- Criminal prosecution
- Regulatory sanctions
- Reputational damage

**International Data Transfers**

When transferring personal data outside Nigeria, organizations must ensure the receiving country has adequate data protection laws or implement appropriate safeguards.

At DFA Solicitors, we provide comprehensive data privacy compliance services, helping businesses navigate NDPR requirements and implement robust data protection frameworks.`
  }
};

const Resource = () => {
  const { postId } = useParams();
  const post = sampleBlogPosts[postId] || sampleBlogPosts["1"]; // Default to first post if not found

  const getCategoryColor = (category) => {
    const colors = {
      "Corporate Law": "#310c4b",
      "Data Privacy": "#7c2d9e",
      "Employment Law": "#C62C89",
      "Technology Law": "#8b3aa6",
      "Real Estate": "#ba52d4",
      "Dispute Resolution": "#d946a6"
    };
    return colors[category] || "#9338b6";
  };

  return (
    <div className="premiumBlogPostContainer">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="blogPostHero"
      >
        <div className="blogPostHeroOverlay"></div>
        <img src={post.image} alt={post.title} className="blogPostHeroImage" />
        
        <div className="blogPostHeroContent">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link to="/esg/all-resources" className="backLink">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
            
            <span 
              className="postCategory"
              style={{ backgroundColor: getCategoryColor(post.category) }}
            >
              {post.category}
            </span>
            
            <h1 className="postTitle">{post.title}</h1>
            
            <div className="postMeta">
              <span className="postAuthor">By {post.author}</span>
              <span className="metaDivider">•</span>
              <span className="postDate">{post.date}</span>
              <span className="metaDivider">•</span>
              <span className="postReadTime">{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="blogPostContent"
      >
        <div className="postBody">
          {post.content.split('\n\n').map((paragraph, index) => {
            // Check if paragraph is a heading
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              const heading = paragraph.replace(/\*\*/g, '');
              return <h2 key={index} className="contentHeading">{heading}</h2>;
            }
            // Check if paragraph starts with a number (list item)
            else if (/^\d+\./.test(paragraph)) {
              return <p key={index} className="contentListItem">{paragraph}</p>;
            }
            // Check if paragraph starts with a dash (bullet point)
            else if (paragraph.startsWith('-')) {
              return <p key={index} className="contentBullet">{paragraph}</p>;
            }
            // Regular paragraph
            return <p key={index} className="contentParagraph">{paragraph}</p>;
          })}
        </div>

        {/* Author Card */}
        <div className="authorCard">
          <div className="authorInfo">
            <h3>About the Author</h3>
            <p className="authorName">{post.author}</p>
            <p className="authorBio">
              {post.author === "Mrs. Abidemi Ademola" 
                ? "Managing Partner at DFA Solicitors with over 27 years of experience in Corporate Law and Governance."
                : "Legal experts at DFA Solicitors dedicated to providing comprehensive legal insights and guidance."}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="blogPostCTA">
          <h3>Need Legal Consultation?</h3>
          <p>Contact us today for expert legal advice tailored to your needs.</p>
          <Link to="/contact" className="ctaButton">
            Get in Touch
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </motion.article>
    </div>
  );
};

export default Resource;
