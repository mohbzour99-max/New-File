// Business page specific functionality

function populateBusinessProjects() {
    const projectDetails = document.getElementById('projectDetails');
    if (!projectDetails) return;

    const projects = [
        {
            name: { en: 'Amman East Power Plant (IPP1)', ar: 'محطة عمان الشرقية للطاقة' },
            capacity: '400 MW',
            technology: { en: 'Combined Cycle Gas Turbine', ar: 'توربين غاز دورة مركبة' },
            investment: '$300M',
            commissioned: '2009',
            image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            features: [
                { en: 'First IPP in Jordan', ar: 'أول منتج مستقل في الأردن' },
                { en: 'World Bank Standards', ar: 'معايير البنك الدولي' },
                { en: 'High Efficiency Technology', ar: 'تقنية عالية الكفاءة' }
            ],
            description: {
                en: 'The Amman East power plant is Jordan\'s first Independent Power Producer, located east of Amman. The project was built and is owned and operated by AES Jordan.',
                ar: 'محطة عمان الشرقية للطاقة هي أول منتج مستقل للطاقة في الأردن، وتقع شرق عمان. تم بناء المشروع وهو مملوك ومُشغل من قبل AES الأردن.'
            }
        },
        {
            name: { en: 'Levant Power Plant (IPP4)', ar: 'محطة بلاد الشام للطاقة' },
            capacity: '241 MW',
            technology: { en: 'Tri-Fuel Peaking Plant', ar: 'محطة ذروة ثلاثية الوقود' },
            investment: '$360M',
            commissioned: '2015',
            image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            features: [
                { en: 'Flexible Fuel Options', ar: 'خيارات وقود مرنة' },
                { en: 'Grid Stabilization', ar: 'استقرار الشبكة' },
                { en: 'Fast Response Time', ar: 'وقت استجابة سريع' }
            ],
            description: {
                en: 'The AES Levant power plant is located east of Amman, on the same site of the Amman East power plant. The project is a tri-fuel engine technology, designed primarily for peaking operation.',
                ar: 'تقع محطة AES بلاد الشام للطاقة شرق عمان، على نفس موقع محطة عمان الشرقية للطاقة. المشروع عبارة عن تقنية محرك ثلاثي الوقود، مصمم في المقام الأول لتشغيل الذروة.'
            }
        },
        {
            name: { en: 'AM Solar', ar: 'AM الطاقة الشمسية' },
            capacity: '50 MW',
            technology: { en: 'Solar Photovoltaic', ar: 'الطاقة الشمسية الكهروضوئية' },
            investment: '$80M',
            commissioned: '2022',
            image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            features: [
                { en: 'Clean Renewable Energy', ar: 'طاقة متجددة نظيفة' },
                { en: 'Zero Emissions Operation', ar: 'تشغيل بدون انبعاثات' },
                { en: 'Advanced Solar Technology', ar: 'تقنية شمسية متقدمة' }
            ],
            description: {
                en: 'The AM Solar project represents an important step in AES Jordan\'s journey towards diversifying our energy portfolio and contributing to Jordan\'s renewable energy goals.',
                ar: 'يمثل مشروع AM الطاقة الشمسية خطوة مهمة في رحلة AES الأردن نحو تنويع محفظة الطاقة والمساهمة في أهداف الطاقة المتجددة في الأردن.'
            }
        }
    ];

    projectDetails.innerHTML = projects.map((project, index) => `
        <div class="grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}">
            <div class="${index % 2 === 1 ? 'lg:col-start-2' : ''}">
                <img
                    src="${project.image}"
                    alt="${project.name.en}"
                    class="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
            </div>
            
            <div class="${index % 2 === 1 ? 'lg:col-start-1' : ''}">
                <div class="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 class="text-3xl font-bold text-[#231f20] mb-4">
                        <span class="nav-text" data-en="${project.name.en}" data-ar="${project.name.ar}">${project.name.en}</span>
                    </h3>
                    
                    <p class="text-gray-700 leading-relaxed mb-6">
                        <span class="nav-text" data-en="${project.description.en}" data-ar="${project.description.ar}">${project.description.en}</span>
                    </p>
                    
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <div class="text-sm text-gray-500 mb-1">
                                <span class="nav-text" data-en="Capacity" data-ar="القدرة">Capacity</span>
                            </div>
                            <div class="text-xl font-bold text-[#005670]">${project.capacity}</div>
                        </div>
                        <div>
                            <div class="text-sm text-gray-500 mb-1">
                                <span class="nav-text" data-en="Investment" data-ar="الاستثمار">Investment</span>
                            </div>
                            <div class="text-xl font-bold text-[#005670]">${project.investment}</div>
                        </div>
                        <div>
                            <div class="text-sm text-gray-500 mb-1">
                                <span class="nav-text" data-en="Technology" data-ar="التقنية">Technology</span>
                            </div>
                            <div class="text-lg font-semibold text-gray-700">
                                <span class="nav-text" data-en="${project.technology.en}" data-ar="${project.technology.ar}">${project.technology.en}</span>
                            </div>
                        </div>
                        <div>
                            <div class="text-sm text-gray-500 mb-1">
                                <span class="nav-text" data-en="Commissioned" data-ar="التشغيل">Commissioned</span>
                            </div>
                            <div class="text-lg font-semibold text-gray-700">${project.commissioned}</div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        ${project.features.map(feature => `
                            <div class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-[#005670] mr-3"></i>
                                <span class="text-gray-700">
                                    <span class="nav-text" data-en="${feature.en}" data-ar="${feature.ar}">${feature.en}</span>
                                </span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}