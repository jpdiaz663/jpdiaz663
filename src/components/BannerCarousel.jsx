import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './BannerCarousel.css';

const BannerCarousel = ({ banners = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  if (!banners || banners.length === 0) {
    return null;
  }

  const currentBanner = banners[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    resetAutoSlide();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    resetAutoSlide();
  };

  const goToBanner = (index) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (banners.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
      }, 6500); // 6.5 segundos
    }
  };

  useEffect(() => {
    if (banners.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
      }, 6500); // 6.5 segundos
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [banners.length]);

  return (
    <div className="banner-carousel-container">
      {/* Main Banner Display */}
      <div className="banner-carousel-main">
        {/* Background Media */}
        <div className="banner-carousel-media">
          {currentBanner.video ? (
            <video
              className="banner-carousel-video"
              src={currentBanner.video}
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              className="banner-carousel-image"
              src={currentBanner.image}
              alt={currentBanner.title || 'Banner'}
            />
          )}
        </div>

        {/* Dark Overlay on Left Side */}
        <div className="banner-carousel-overlay">
          <div className="banner-carousel-content">
            {/* Title */}
            {currentBanner.title && (
              <h2 className="banner-carousel-title">{currentBanner.title}</h2>
            )}

            {/* Description */}
            {currentBanner.description && (
              <p className="banner-carousel-description">
                {currentBanner.description}
              </p>
            )}

            {/* Tags */}
            {currentBanner.tags && currentBanner.tags.length > 0 && (
              <div className="banner-carousel-tags">
                {currentBanner.tags.map((tag, index) => (
                  <span key={index} className="banner-carousel-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Button */}
            {currentBanner.ctaButton && (
              <a
                href={currentBanner.ctaButton.href}
                className="banner-carousel-cta button"
                {...(currentBanner.ctaButton.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer'
                })}
              >
                {currentBanner.ctaButton.label}
                <ChevronRight className="banner-carousel-cta-icon" size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Navigation Arrows */}
        {banners.length > 1 && (
          <>
            <button
              className="banner-carousel-nav banner-carousel-nav-prev"
              onClick={goToPrevious}
              aria-label="Previous banner"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="banner-carousel-nav banner-carousel-nav-next"
              onClick={goToNext}
              aria-label="Next banner"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Carousel */}
      {banners.length > 1 && (
        <div className="banner-carousel-thumbnails">
          <button
            className="banner-carousel-thumb-nav banner-carousel-thumb-nav-prev"
            onClick={goToPrevious}
            aria-label="Previous thumbnail"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="banner-carousel-thumb-list">
            {banners.map((banner, index) => (
              <button
                key={banner.id || index}
                className={`banner-carousel-thumb ${
                  index === currentIndex ? 'banner-carousel-thumb-active' : ''
                }`}
                onClick={() => goToBanner(index)}
                aria-label={`Go to banner ${index + 1}`}
              >
                {banner.video ? (
                  <video
                    className="banner-carousel-thumb-media"
                    src={banner.video}
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    className="banner-carousel-thumb-media"
                    src={banner.image}
                    alt={banner.title || `Banner ${index + 1}`}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            className="banner-carousel-thumb-nav banner-carousel-thumb-nav-next"
            onClick={goToNext}
            aria-label="Next thumbnail"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

BannerCarousel.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      image: PropTypes.string,
      video: PropTypes.string,
      ctaButton: PropTypes.shape({
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        external: PropTypes.bool
      })
    })
  ).isRequired
};

export default BannerCarousel;
