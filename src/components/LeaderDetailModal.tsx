import React from 'react';
import { X, Mail, Linkedin } from 'lucide-react';

interface Leader {
  id: number;
  name: string;
  position: { en: string; ar: string };
  image: string;
  bio: { en: string; ar: string };
  expertise: { en: string; ar: string }[];
  experience: string;
  education: { en: string; ar: string };
}

interface LeaderDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  leaderData: Leader | null;
  isArabic: boolean;
}

const LeaderDetailModal: React.FC<LeaderDetailModalProps> = ({ 
  isOpen, 
  onClose, 
  leaderData, 
  isArabic 
}) => {
  if (!isOpen || !leaderData) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full shadow-lg transition-all duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Header with Image */}
          <div className="relative">
            <div className="h-64 bg-gradient-to-br from-[#005670] to-[#004558] rounded-t-2xl flex items-center justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={leaderData.image}
                  alt={leaderData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Name and Position Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
              <h2 className="text-2xl font-bold mb-1">{leaderData.name}</h2>
              <p className="text-white/90">
                {isArabic ? leaderData.position.ar : leaderData.position.en}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Bio Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[#005670] mb-3 flex items-center">
                <div className="w-1 h-6 bg-[#005670] rounded mr-3"></div>
                {isArabic ? 'نبذة' : 'Biography'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {isArabic ? leaderData.bio.ar : leaderData.bio.en}
              </p>
            </div>

            {/* Experience & Education Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-[#005670] mb-2 flex items-center">
                  <div className="w-2 h-2 bg-[#005670] rounded-full mr-2"></div>
                  {isArabic ? 'الخبرة' : 'Experience'}
                </h4>
                <p className="text-gray-700 font-medium bg-gray-50 px-3 py-2 rounded-lg">
                  {leaderData.experience}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#005670] mb-2 flex items-center">
                  <div className="w-2 h-2 bg-[#005670] rounded-full mr-2"></div>
                  {isArabic ? 'التعليم' : 'Education'}
                </h4>
                <p className="text-gray-700 font-medium bg-gray-50 px-3 py-2 rounded-lg">
                  {isArabic ? leaderData.education.ar : leaderData.education.en}
                </p>
              </div>
            </div>

            {/* Expertise Section */}
            <div className="mb-6">
              <h4 className="font-semibold text-[#005670] mb-3 flex items-center">
                <div className="w-1 h-6 bg-[#005670] rounded mr-3"></div>
                {isArabic ? 'مجالات الخبرة' : 'Areas of Expertise'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {leaderData.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#005670] bg-opacity-10 text-[#005670] rounded-full text-sm font-medium border border-[#005670] border-opacity-20"
                  >
                    {isArabic ? skill.ar : skill.en}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-center space-x-4">
                <button className="flex items-center px-4 py-2 bg-[#005670] hover:bg-[#004558] text-white rounded-lg transition-colors duration-200">
                  <Mail className="w-4 h-4 mr-2" />
                  {isArabic ? 'إرسال بريد إلكتروني' : 'Send Email'}
                </button>
                
                <button className="flex items-center px-4 py-2 border-2 border-[#005670] text-[#005670] hover:bg-[#005670] hover:text-white rounded-lg transition-all duration-200">
                  <Linkedin className="w-4 h-4 mr-2" />
                  {isArabic ? 'لينكد إن' : 'LinkedIn'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderDetailModal;