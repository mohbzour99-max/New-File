// Sustainability page specific functionality

function populateSustainabilityContent() {
    populateSustainabilityAreas();
    populateCompanyValues();
}

function populateSustainabilityAreas() {
    const sustainabilityAreas = document.getElementById('sustainabilityAreas');
    if (!sustainabilityAreas) return;

    const areas = [
        {
            id: 'safety',
            icon: 'shield',
            title: { en: 'Safety First', ar: 'السلامة أولاً' },
            description: { 
                en: 'Prioritizing safety for our people, contractors, and communities',
                ar: 'إعطاء الأولوية للسلامة لموظفينا ومقاولينا ومجتمعاتنا'
            }
        },
        {
            id: 'environment',
            icon: 'leaf',
            title: { en: 'Environmental Protection', ar: 'حماية البيئة' },
            description: { 
                en: 'Protecting the environment through sustainable practices',
                ar: 'حماية البيئة من خلال الممارسات المستدامة'
            }
        },
        {
            id: 'social',
            icon: 'users',
            title: { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' },
            description: { 
                en: 'Contributing to community development and social welfare',
                ar: 'المساهمة في التنمية المجتمعية والرفاه الاجتماعي'
            }
        },
        {
            id: 'stakeholder',
            icon: 'handshake',
            title: { en: 'Stakeholder Relations', ar: 'علاقات أصحاب المصلحة' },
            description: { 
                en: 'Building strong relationships with all stakeholders',
                ar: 'بناء علاقات قوية مع جميع أصحاب المصلحة'
            }
        },
        {
            id: 'assets',
            icon: 'building-2',
            title: { en: 'Asset Management', ar: 'إدارة الأصول' },
            description: { 
                en: 'Optimizing asset performance and lifecycle management',
                ar: 'تحسين أداء الأصول وإدارة دورة الحياة'
            }
        },
        {
            id: 'supply',
            icon: 'truck',
            title: { en: 'Supply Chain Management', ar: 'إدارة سلسلة التوريد' },
            description: { 
                en: 'Ensuring sustainable and responsible supply chain practices',
                ar: 'ضمان ممارسات سلسلة التوريد المستدامة والمسؤولة'
            }
        }
    ];

    sustainabilityAreas.innerHTML = areas.map((area, index) => `
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border-2 border-transparent hover:border-[#005670] hover:border-opacity-20" onclick="navigateToSustainabilityDetail('${area.id}')">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-[#005670] group-hover:bg-[#004558] rounded-full mb-6 transition-all duration-300 group-hover:scale-110">
                <i data-lucide="${area.icon}" class="w-8 h-8 text-white"></i>
            </div>
            
            <h3 class="text-xl font-bold text-[#231f20] group-hover:text-[#005670] mb-4 transition-colors duration-300">
                <span class="nav-text" data-en="${area.title.en}" data-ar="${area.title.ar}">${area.title.en}</span>
            </h3>
            
            <p class="text-gray-600 group-hover:text-gray-700 leading-relaxed mb-6 transition-colors duration-300">
                <span class="nav-text" data-en="${area.description.en}" data-ar="${area.description.ar}">${area.description.en}</span>
            </p>
            
            <div class="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-[#005670] font-semibold text-sm mr-2">
                    <span class="nav-text" data-en="Learn More" data-ar="اقرأ المزيد">Learn More</span>
                </span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-[#005670] transform group-hover:translate-x-1 transition-transform duration-300"></i>
            </div>
        </div>
    `).join('');

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function populateCompanyValues() {
    const companyValues = document.getElementById('companyValues');
    if (!companyValues) return;

    const values = [
        {
            icon: 'shield',
            title: { en: 'PUT SAFETY FIRST', ar: 'السلامة أولاً' },
            description: { 
                en: 'We always put safety first—for our people, contractors and communities.',
                ar: 'نضع السلامة دائماً في المقدمة - لموظفينا ومقاولينا ومجتمعاتنا.'
            }
        },
        {
            icon: 'check-circle',
            title: { en: 'ACT WITH INTEGRITY', ar: 'التصرف بنزاهة' },
            description: { 
                en: 'Integrity is at the core of everything we do—how we conduct ourselves and how we interact with our stakeholders.',
                ar: 'النزاهة هي جوهر كل ما نقوم به - كيف نتصرف وكيف نتفاعل مع أصحاب المصلحة.'
            }
        },
        {
            icon: 'handshake',
            title: { en: 'HONOR COMMITMENTS', ar: 'الوفاء بالالتزامات' },
            description: { 
                en: 'We honor our commitments to our customers, teammates, communities, owners, suppliers and partners.',
                ar: 'نحن نفي بالتزاماتنا تجاه عملائنا وزملائنا ومجتمعاتنا والملاك والموردين والشركاء.'
            }
        },
        {
            icon: 'star',
            title: { en: 'STRIVE FOR EXCELLENCE', ar: 'السعي للتميز' },
            description: { 
                en: 'We strive to be the best in all that we do and to perform at world-class levels.',
                ar: 'نسعى لأن نكون الأفضل في كل ما نقوم به وأن نؤدي على مستويات عالمية.'
            }
        },
        {
            icon: 'smile',
            title: { en: 'HAVE FUN THROUGH WORK', ar: 'الاستمتاع من خلال العمل' },
            description: { 
                en: 'Work can be fun, fulfilling and exciting. We appreciate being part of a team that is making a difference.',
                ar: 'يمكن أن يكون العمل ممتعاً ومُرضياً ومثيراً. نحن نقدر كوننا جزءاً من فريق يحدث فرقاً.'
            }
        }
    ];

    companyValues.innerHTML = values.map((value, index) => `
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-[#005670] rounded-full mb-6">
                <i data-lucide="${value.icon}" class="w-8 h-8 text-white"></i>
            </div>
            
            <h3 class="text-xl font-bold text-[#005670] mb-4">
                <span class="nav-text" data-en="${value.title.en}" data-ar="${value.title.ar}">${value.title.en}</span>
            </h3>
            
            <p class="text-gray-600 leading-relaxed">
                <span class="nav-text" data-en="${value.description.en}" data-ar="${value.description.ar}">${value.description.en}</span>
            </p>
        </div>
    `).join('');

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function navigateToSustainabilityDetail(areaId) {
    // For now, just show an alert. In a full implementation, this would navigate to a detail page
    const areaNames = {
        'safety': { en: 'Safety First', ar: 'السلامة أولاً' },
        'environment': { en: 'Environmental Protection', ar: 'حماية البيئة' },
        'social': { en: 'Social Responsibility', ar: 'المسؤولية الاجتماعية' },
        'stakeholder': { en: 'Stakeholder Relations', ar: 'علاقات أصحاب المصلحة' },
        'assets': { en: 'Asset Management', ar: 'إدارة الأصول' },
        'supply': { en: 'Supply Chain Management', ar: 'إدارة سلسلة التوريد' }
    };
    
    const areaName = areaNames[areaId];
    if (areaName) {
        const message = isArabic 
            ? `سيتم توجيهك إلى صفحة ${areaName.ar}`
            : `You would be navigated to ${areaName.en} page`;
        alert(message);
    }
}