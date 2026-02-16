import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./all-resources.css";
import PageBanner from "../../common/page-banner/PageBanner";

// Sample blog data
const sampleBlogPosts = [
  {
    id: 1,
    title: "Understanding Corporate Governance in Nigeria",
    excerpt: "Corporate governance is essential for business success in today's competitive environment. Learn how effective governance structures can protect your business interests and ensure long-term sustainability.",
    category: "Corporate Law",
    author: "Mrs. Abidemi Ademola",
    date: "December 1, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Data Privacy Compliance: NDPR Requirements for Businesses",
    excerpt: "The Nigeria Data Protection Regulation (NDPR) has significant implications for businesses. Discover the key compliance requirements and how to protect your organization from potential penalties.",
    category: "Data Privacy",
    author: "DFA Legal Team",
    date: "November 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Employment Law Updates: Recent Changes in Nigerian Labour Regulations",
    excerpt: "Stay informed about the latest developments in Nigerian employment law. From contract requirements to dispute resolution, we break down what employers need to know.",
    category: "Employment Law",
    author: "DFA Legal Team",
    date: "November 25, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Technology Law: Navigating Software Licensing and IP Rights",
    excerpt: "Technology companies face unique legal challenges. Learn about software licensing, intellectual property protection, and regulatory compliance in the digital age.",
    category: "Technology Law",
    author: "Mrs. Abidemi Ademola",
    date: "November 20, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Real Estate Transactions: Essential Legal Considerations",
    excerpt: "Real estate transactions require careful legal attention. From due diligence to title verification, discover the critical steps to protect your property investments.",
    category: "Real Estate",
    author: "DFA Legal Team",
    date: "November 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Dispute Resolution: Arbitration in Nigeria",
    excerpt: "When conflicts arise, choosing the right dispute resolution method is crucial. Learn about arbitration and alternative approaches to determine the best strategy for your business disputes.",
    category: "Dispute Resolution",
    author: "Mrs. Abidemi Ademola",
    date: "November 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
  }
];

const AllResources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Corporate Law", "Data Privacy", "Employment Law", "Technology Law", "Real Estate", "Dispute Resolution"];

  const filteredPosts = selectedCategory === "All" 
    ? sampleBlogPosts 
    : sampleBlogPosts.filter(post => post.category === selectedCategory);

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
    <div>
      <PageBanner title="Legal Insights & Resources" badge="Our Blog" />
      
      <div className="premiumBlogContainer">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="blogFilterSection"
        >
          <h3 className="filterTitle">Filter by Category</h3>
          <div className="categoryFilters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filterButton ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Spotlight Resource */}
        {filteredPosts.length > 0 && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="spotlightCard"
          >
            <Link to={`/esg/all-resources/${filteredPosts[0].id}/resource`} className="spotlightLink">
              <div className="spotlightImageWrapper">
                <img src={filteredPosts[0].image} alt={filteredPosts[0].title} className="spotlightImage" />
                <div className="spotlightImageOverlay"></div>
                <span 
                  className="spotlightCategory"
                  style={{ backgroundColor: getCategoryColor(filteredPosts[0].category) }}
                >
                  {filteredPosts[0].category}
                </span>
              </div>
              
              <div className="spotlightContent">
                <div className="spotlightMeta">
                  <span className="spotlightDate">{filteredPosts[0].date}</span>
                  <span className="spotlightDivider">•</span>
                  <span className="spotlightReadTime">{filteredPosts[0].readTime}</span>
                </div>
                
                <h2 className="spotlightTitle">{filteredPosts[0].title}</h2>
                <p className="spotlightExcerpt">{filteredPosts[0].excerpt}</p>
                
                <div className="spotlightFooter">
                  <span className="spotlightAuthor">By {filteredPosts[0].author}</span>
                  <span className="spotlightReadMore">
                    Read More
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Other Resources Grid */}
        {filteredPosts.length > 1 && (
          <div className="blogGrid">
            {filteredPosts.slice(1, 4).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="blogCard"
              >
                <Link to={`/esg/all-resources/${post.id}/resource`} className="blogCardLink">
                  <div className="blogImageWrapper">
                    <img src={post.image} alt={post.title} className="blogImage" />
                    <div className="blogImageOverlay"></div>
                    <span 
                      className="blogCategory"
                      style={{ backgroundColor: getCategoryColor(post.category) }}
                    >
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="blogContent">
                    <div className="blogMeta">
                      <span className="blogDate">{post.date}</span>
                      <span className="blogDivider">•</span>
                      <span className="blogReadTime">{post.readTime}</span>
                    </div>
                    
                    <h2 className="blogTitle">{post.title}</h2>
                    <p className="blogExcerpt">{post.excerpt}</p>
                    
                    <div className="blogFooter">
                      <span className="blogAuthor">By {post.author}</span>
                      <span className="blogReadMore">
                        Read More
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="noResults">
            <p>No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllResources;
