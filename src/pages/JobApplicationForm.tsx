import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Mail, Phone, FileText, Upload, Send, ChevronRight } from 'lucide-react';

interface JobApplicationFormProps {
  isArabic: boolean;
  onNavigate: (page: string) => void;
  selectedJobId?: number;
}

interface Job {
  id: number;
  title: { en: string; ar: string };
  department: string;
  location: { en: string; ar: string };
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ isArabic, onNavigate, selectedJobId }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    experience: '',
    education: '',
    coverLetter: '',
    resume: null as File | null,
    portfolio: '',
    linkedIn: '',
    references: '',
    availability: '',
    expectedSalary: ''
  });

  // Mock job data - in a real app, this would come from props or API
  const jobs: Job[] = [
    {
      id: 1,
      title: { en: "Senior Electrical Engineer", ar: "مهندس كهرباء أول" },
      department: "Engineering",
      location: { en: "Amman, Jordan", ar: "عمان، الأردن" }
    },
    {
      id: 2,
      title: { en: "Operations Manager", ar: "مدير العمليات" },
      department: "Operations",
      location: { en: "Amman, Jordan", ar: "عمان، الأردن" }
    },
    {
      id: 3,
      title: { en: "Environmental Specialist", ar: "أخصائي بيئي" },
      department: "Environmental",
      location: { en: "Amman, Jordan", ar: "عمان، الأردن" }
    }
  ];

  const selectedJob = jobs.find(job => job.id === selectedJobId);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted:', formData);
    alert(isArabic ? 'تم إرسال طلبك بنجاح!' : 'Your application has been submitted successfully!');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      country: '',
      experience: '',
      education: '',
      coverLetter: '',
      resume: null,
      portfolio: '',
      linkedIn: '',
      references: '',
      availability: '',
      expectedSalary: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-16 bg-gradient-to-br from-[#005670] via-[#004558] to-[#003445] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <div className="flex items-center text-white text-opacity-80 mb-8 text-sm">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors duration-200"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <button 
              onClick={() => onNavigate('careers')}
              className="hover:text-white transition-colors duration-200"
            >
              {isArabic ? 'الوظائف' : 'Careers'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">
              {isArabic ? 'تقديم طلب وظيفة' : 'Job Application'}
            </span>
          </div>

          {/* Back Button */}
          <button
            onClick={() => onNavigate('careers')}
            className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {isArabic ? 'العودة إلى الوظائف' : 'Back to Careers'}
          </button>

          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {isArabic ? 'تقديم طلب وظيفة' : 'Job Application'}
            </h1>
            {selectedJob && (
              <p className="text-xl opacity-90">
                {isArabic ? selectedJob.title.ar : selectedJob.title.en}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedJob && (
            <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#231f20] mb-4">
                {isArabic ? 'تفاصيل الوظيفة' : 'Job Details'}
              </h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-600">
                    {isArabic ? 'المنصب:' : 'Position:'}
                  </span>
                  <p className="text-[#005670] font-medium">
                    {isArabic ? selectedJob.title.ar : selectedJob.title.en}
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    {isArabic ? 'القسم:' : 'Department:'}
                  </span>
                  <p className="text-[#005670] font-medium">{selectedJob.department}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-600">
                    {isArabic ? 'الموقع:' : 'Location:'}
                  </span>
                  <p className="text-[#005670] font-medium">
                    {isArabic ? selectedJob.location.ar : selectedJob.location.en}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-[#005670] text-white p-6">
              <h2 className="text-2xl font-bold">
                {isArabic ? 'معلومات المتقدم' : 'Applicant Information'}
              </h2>
              <p className="opacity-90 mt-2">
                {isArabic 
                  ? 'يرجى ملء جميع الحقول المطلوبة بدقة'
                  : 'Please fill out all required fields accurately'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-[#231f20] mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {isArabic ? 'المعلومات الشخصية' : 'Personal Information'}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'الاسم الأول' : 'First Name'} *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                      placeholder={isArabic ? 'أدخل اسمك الأول' : 'Enter your first name'}
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'اسم العائلة' : 'Last Name'} *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                      placeholder={isArabic ? 'أدخل اسم العائلة' : 'Enter your last name'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'البريد الإلكتروني' : 'Email Address'} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                      placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'رقم الهاتف' : 'Phone Number'} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                      placeholder={isArabic ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'المدينة' : 'City'} *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                      placeholder={isArabic ? 'أدخل مدينتك' : 'Enter your city'}
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'البلد' : 'Country'} *
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                      placeholder={isArabic ? 'أدخل بلدك' : 'Enter your country'}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    {isArabic ? 'العنوان' : 'Address'}
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                    placeholder={isArabic ? 'أدخل عنوانك الكامل' : 'Enter your full address'}
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h3 className="text-xl font-bold text-[#231f20] mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  {isArabic ? 'المعلومات المهنية' : 'Professional Information'}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'سنوات الخبرة' : 'Years of Experience'} *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                    >
                      <option value="">
                        {isArabic ? 'اختر سنوات الخبرة' : 'Select years of experience'}
                      </option>
                      <option value="0-1">{isArabic ? '0-1 سنة' : '0-1 years'}</option>
                      <option value="2-3">{isArabic ? '2-3 سنوات' : '2-3 years'}</option>
                      <option value="4-5">{isArabic ? '4-5 سنوات' : '4-5 years'}</option>
                      <option value="6-10">{isArabic ? '6-10 سنوات' : '6-10 years'}</option>
                      <option value="10+">{isArabic ? '10+ سنوات' : '10+ years'}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                      {isArabic ? 'المؤهل التعليمي' : 'Educational Qualification'} *
                    </label>
                    <input
                      type="text"
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                      placeholder={isArabic ? 'مثال: بكالوريوس الهندسة الكهربائية' : 'e.g., Bachelor of Electrical Engineering'}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700 mb-2">
                        {isArabic ? 'ملف LinkedIn' : 'LinkedIn Profile'}
                      </label>
                      <input
                        type="url"
                        id="linkedIn"
                        name="linkedIn"
                        value={formData.linkedIn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                        {isArabic ? 'رابط المحفظة' : 'Portfolio URL'}
                      </label>
                      <input
                        type="url"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                        {isArabic ? 'تاريخ التوفر' : 'Availability Date'}
                      </label>
                      <input
                        type="date"
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-2">
                        {isArabic ? 'الراتب المتوقع' : 'Expected Salary'}
                      </label>
                      <input
                        type="text"
                        id="expectedSalary"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent"
                        placeholder={isArabic ? 'مثال: 1000-1500 دينار' : 'e.g., 1000-1500 JOD'}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h3 className="text-xl font-bold text-[#231f20] mb-6 flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  {isArabic ? 'المستندات' : 'Documents'}
                </h3>
                
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    {isArabic ? 'السيرة الذاتية' : 'Resume/CV'} *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#005670] transition-colors duration-200">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="hidden"
                    />
                    <label
                      htmlFor="resume"
                      className="cursor-pointer text-[#005670] hover:text-[#004558] font-medium"
                    >
                      {formData.resume 
                        ? formData.resume.name
                        : (isArabic ? 'انقر لرفع السيرة الذاتية' : 'Click to upload resume')
                      }
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      {isArabic ? 'PDF, DOC, DOCX (حد أقصى 5MB)' : 'PDF, DOC, DOCX (Max 5MB)'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  {isArabic ? 'خطاب التغطية' : 'Cover Letter'} *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent resize-none"
                  placeholder={isArabic 
                    ? 'اكتب خطاب التغطية هنا... اشرح لماذا أنت مناسب لهذا المنصب'
                    : 'Write your cover letter here... Explain why you are suitable for this position'
                  }
                />
              </div>

              {/* References */}
              <div>
                <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-2">
                  {isArabic ? 'المراجع' : 'References'}
                </label>
                <textarea
                  id="references"
                  name="references"
                  value={formData.references}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#005670] focus:border-transparent resize-none"
                  placeholder={isArabic 
                    ? 'أدخل معلومات المراجع (الاسم، المنصب، الشركة، رقم الهاتف، البريد الإلكتروني)'
                    : 'Enter reference information (Name, Position, Company, Phone, Email)'
                  }
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => onNavigate('careers')}
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-all duration-300"
                  >
                    {isArabic ? 'إلغاء' : 'Cancel'}
                  </button>
                  
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#005670] hover:bg-[#004558] text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isArabic ? 'إرسال الطلب' : 'Submit Application'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobApplicationForm;