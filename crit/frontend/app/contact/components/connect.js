"use client";
import React, { useState } from 'react';

const ConnectWithUs = () => {
  // Social media links data
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Generate optimized image URLs for Cloudinary
  const getOptimizedImageUrl = (publicId, width = 48, height = 48) => {
    const baseUrl = 'https://res.cloudinary.com/dujw4np0d/image/upload';
    // f_auto: Auto format (WebP/AVIF)
    // q_auto: Auto quality
    // c_scale: Responsive scaling
    return `${baseUrl}/f_auto,q_auto,c_scale,w_${width * 2},h_${height * 2}/${publicId} 2x, ${baseUrl}/f_auto,q_auto,c_scale,w_${width},h_${height}/${publicId} 1x`;
  };

  const socialLinks = [
    {
      platform: 'linkedin',
      username: 'linkedin',
      icon: 'v1751520336/linkedin_ryjm4m',
      iconName: 'LinkedIn',
      brandColor: '#0077b5',
      width: 24,
      height: 24
    },
    {
      platform: 'twitter',
      username: 'twitter',
      icon: 'v1751520337/twitter_k0jxlk',
      iconName: 'Twitter',
      brandColor: '#1da1f2',
      width: 24,
      height: 24
    },
    {
      platform: 'youtube',
      username: 'youtube',
      icon: 'v1751520336/youtube_h5itfe',
      iconName: 'YouTube',
      brandColor: '#ff0000',
      width: 34,
      height: 24
    },
    {
      platform: 'facebook',
      username: 'facebook',
      icon: 'v1751520337/facebook_fl3imf',
      iconName: 'Facebook',
      brandColor: '#1877f3',
      width: 24,
      height: 24
    },
    {
      platform: 'instagram',
      username: 'instagram',
      icon: 'v1751520336/instagram_pddu5e',
      iconName: 'Instagram',
      brandColor: '#fd5d47',
      width: 24,
      height: 24
    },
    {
      platform: 'telegram',
      username: 'telegram',
      icon: 'v1751520336/telegram_qahmsf',
      iconName: 'Telegram',
      brandColor: '#229ed9',
      width: 24,
      height: 24
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 pt-6 sm:pt-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 inline-block relative">
            <span className="text-black">Follow </span>
            <span className="text-red-500">Our Socials</span>
            <svg className="mx-auto my-0" style={{marginTop: '-4px'}} width="160" height="18" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 18 Q 110 8, 215 14" stroke="#ffd700" strokeWidth="4" strokeLinecap="round" fill="none"/>
              <path d="M15 21 Q 120 15, 200 18" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                srcSet="https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_auto,c_scale,w_800,h_600/v1751520337/image_tl5e86.jpg 800w,
                        https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_auto,c_scale,w_1200,h_900/v1751520337/image_tl5e86.jpg 1200w"
                sizes="(max-width: 768px) 100vw, 50vw"
                src="https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_auto,c_scale,w_600,h_450/v1751520337/image_tl5e86.jpg"
                alt="Technology workspace with digital interfaces"
                width={800}
                height={600}
                className="w-full h-64 sm:h-80 lg:h-76 object-cover rounded-lg shadow-2xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right Side - Social Media Links */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-black/30 transition-all duration-300 transform hover:scale-105 rounded-xl p-4 sm:p-5 flex items-center space-x-4 shadow-lg`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={
                    hoveredIndex === index
                      ? { boxShadow: '0 0 10px 1px' }
                      : {}
                  }
                >
                  <div className="flex-shrink-0">
                    {social.platform === 'instagram' ? (
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-gradient-to-tr from-[#fd5d47] via-[#e1306c] to-[#833ab4]">
                        <img
                          srcSet={getOptimizedImageUrl(social.icon, social.width, social.height)}
                          src={`https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_auto,c_scale,w_${social.width},h_${social.height}/${social.icon}.png`}
                          alt={`${social.iconName} icon`}
                          width={social.width}
                          height={social.height}
                          className="w-6 h-6 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md" style={{ background: social.brandColor }}>
                        <img
                          srcSet={getOptimizedImageUrl(social.icon, social.width, social.height)}
                          src={`https://res.cloudinary.com/dujw4np0d/image/upload/f_auto,q_auto,c_scale,w_${social.width},h_${social.height}/${social.icon}.png`}
                          alt={`${social.iconName} icon`}
                          width={social.width}
                          height={social.height}
                          className="w-6 h-6 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-base truncate">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ConnectWithUs;