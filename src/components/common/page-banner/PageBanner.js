import React from 'react';
import { motion } from 'framer-motion';
import "./PageBanner.css";

const PageBanner = ({ title, subtitle }) => {
  return (
    <section className='premiumPageBanner'>
      {/* Pattern Background */}
      <div className='pageBannerBackground'>
        <div className='pageBannerPattern'></div>
        <div className='pageBannerGradientOverlay'></div>
      </div>

      {/* Decorative Elements */}
      <div className='pageBannerDecor'>
        <div className='bannerDecorShape bannerDecorShape1'></div>
        <div className='bannerDecorShape bannerDecorShape2'></div>
        <div className='bannerDecorShape bannerDecorShape3'></div>
      </div>

      {/* Content */}
      <div className='pageBannerContent'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='pageBannerText'
        >
          {subtitle && (
            <span className='pageBannerBadge'>
              <span className='bannerBadgeIcon'>✦</span>
              {subtitle}
            </span>
          )}
          <h1 className='pageBannerTitle'>{title}</h1>
        </motion.div>
      </div>
    </section>
  )
}

export default PageBanner;




