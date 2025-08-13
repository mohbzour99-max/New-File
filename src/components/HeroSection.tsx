import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface HeroSectionProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isArabic, onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Single video configuration
  const videoConfig = {
    src: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    fallback: 'https://i.postimg.cc/nzTyB6rp/download.webp',
    title: { en: 'Powering Jordan\'s Future', ar: 'تشغيل مستقبل الأردن' },
    subtitle: { en: '641 MW Total Capacity', ar: '641 ميجاواط إجمالي القدرة' }
  };

  // Handle video play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle video load and setup
  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      // Set video to 15 seconds duration by controlling playback
      videoRef.current.addEventListener('timeupdate', () => {
        if (videoRef.current && videoRef.current.currentTime >= 15) {
          videoRef.current.currentTime = 0; // Reset to beginning after 15 seconds
        }
      });

      videoRef.current.play().catch(() => {
        // Autoplay failed, which is expected in many browsers
        setIsPlaying(false);
      });
    }
  };

  // Handle video end (loop after 15 seconds)
  const handleVideoTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 15) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Single Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onTimeUpdate={handleVideoTimeUpdate}
          onError={() => setVideoLoaded(false)}
        >
          <source src={videoConfig.src} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <img
            src={videoConfig.fallback}
            alt={isArabic ? videoConfig.title.ar : videoConfig.title.en}
            className="w-full h-full object-cover"
          />
        </video>

        {/* Fallback image if video fails to load */}
        {!videoLoaded && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${videoConfig.fallback}')` }}
          />
        )}
      </div>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#005670] via-[#005670]/60 to-transparent opacity-70" />
      
      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-20 flex space-x-3">
        <button
          onClick={togglePlayPause}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <button
          onClick={toggleMute}
          className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtitle */}
        <div className="mb-4">
          <span className="inline-block px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full text-xl md:text-2xl font-bold mb-4 animate-fade-in-up">
            {isArabic ? videoConfig.subtitle.ar : videoConfig.subtitle.en}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          {isArabic ? videoConfig.title.ar : videoConfig.title.en}
        </h1>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          {isArabic 
            ? 'توليد طاقة موثوق وفعال لغد مستدام'
            : 'Reliable and efficient energy generation for a sustainable tomorrow'
          }
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <button 
            onClick={() => onNavigate?.('business')}
            className="bg-[#005670] hover:bg-[#004558] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
          >
            {isArabic ? 'أعمالنا' : 'Our Business'}
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;