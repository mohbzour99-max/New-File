// Careers page specific functionality

function populateJobListings() {
    const jobListings = document.getElementById('jobListings');
    if (!jobListings) return;

    const jobs = [
        {
            id: 1,
            title: { en: "Senior Electrical Engineer", ar: "مهندس كهرباء أول" },
            department: "Engineering",
            location: { en: "Amman, Jordan", ar: "عمان، الأردن" },
            type: { en: "Full-time", ar: "دوام كامل" },
            experience: { en: "5+ years", ar: "5+ سنوات" },
            salary: { en: "Competitive", ar: "راتب تنافسي" },
            description: {
                en: "We are seeking a Senior Electrical Engineer to join our dynamic team. The successful candidate will be responsible for designing, developing, and maintaining electrical systems for our power generation facilities.",
                ar: "نحن نبحث عن مهندس كهرباء أول للانضمام إلى فريقنا الديناميكي. سيكون المرشح الناجح مسؤولاً عن تصميم وتطوير وصيانة الأنظمة الكهربائية لمرافق توليد الطاقة لدينا."
            },
            requirements: [
                { en: "Bachelor's degree in Electrical Engineering", ar: "درجة البكالوريوس في الهندسة الكهربائية" },
                { en: "Minimum 5 years of experience in power generation", ar: "خبرة لا تقل عن 5 سنوات في توليد الطاقة" },
                { en: "Strong knowledge of electrical systems and safety protocols", ar: "معرفة قوية بالأنظمة الكهربائية وبروتوكولات السلامة" },
                { en: "Excellent communication skills in English and Arabic", ar: "مهارات تواصل ممتازة باللغتين الإنجليزية والعربية" }
            ]
        },
        {
            id: 2,
            title: { en: "Operations Manager", ar: "مدير العمليات" },
            department: "Operations",
            location: { en: "Amman, Jordan", ar: "عمان، الأردن" },
            type: { en: "Full-time", ar: "دوام كامل" },
            experience: { en: "8+ years", ar: "8+ سنوات" },
            salary: { en: "Competitive", ar: "راتب تنافسي" },
            description: {
                en: "Join our operations team as an Operations Manager. You will oversee daily operations, ensure compliance with safety standards, and lead a team of skilled professionals in our power generation facility.",
                ar: "انضم إلى فريق العمليات لدينا كمدير عمليات. ستشرف على العمليات اليومية وتضمن الامتثال لمعايير السلامة وتقود فريقاً من المهنيين المهرة في منشأة توليد الطاقة لدينا."
            },
            requirements: [
                { en: "Bachelor's degree in Engineering or related field", ar: "درجة البكالوريوس في الهندسة أو مجال ذي صلة" },
                { en: "Minimum 8 years of operations management experience", ar: "خبرة لا تقل عن 8 سنوات في إدارة العمليات" },
                { en: "Strong leadership and team management skills", ar: "مهارات قيادة وإدارة فريق قوية" },
                { en: "Knowledge of power plant operations and maintenance", ar: "معرفة بعمليات وصيانة محطات الطاقة" }
            ]
        },
        {
            id: 3,
            title: { en: "Environmental Specialist", ar: "أخصائي بيئي" },
            department: "Environmental",
            location: { en: "Amman, Jordan", ar: "عمان، الأردن" },
            type: { en: "Full-time", ar: "دوام كامل" },
            experience: { en: "3+ years", ar: "3+ سنوات" },
            salary: { en: "Competitive", ar: "راتب تنافسي" },
            description: {
                en: "We are looking for an Environmental Specialist to ensure our operations comply with environmental regulations and to develop sustainability initiatives that align with our commitment to environmental protection.",
                ar: "نحن نبحث عن أخصائي بيئي لضمان امتثال عملياتنا للوائح البيئية ولتطوير مبادرات الاستدامة التي تتماشى مع التزامنا بحماية البيئة."
            },
            requirements: [
                { en: "Bachelor's degree in Environmental Science or related field", ar: "درجة البكالوريوس في العلوم البيئية أو مجال ذي صلة" },
                { en: "Minimum 3 years of environmental compliance experience", ar: "خبرة لا تقل عن 3 سنوات في الامتثال البيئي" },
                { en: "Knowledge of environmental regulations and standards", ar: "معرفة باللوائح والمعايير البيئية" },
                { en: "Strong analytical and problem-solving skills", ar: "مهارات تحليلية وحل مشاكل قوية" }
            ]
        }
    ];

    jobListings.innerHTML = jobs.map(job => `
        <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div class="grid lg:grid-cols-4 gap-6">
                <div class="lg:col-span-3">
                    <h3 class="text-2xl font-bold text-[#231f20] mb-3">
                        <span class="nav-text" data-en="${job.title.en}" data-ar="${job.title.ar}">${job.title.en}</span>
                    </h3>
                    
                    <div class="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div class="flex items-center">
                            <i data-lucide="map-pin" class="w-4 h-4 mr-1"></i>
                            <span class="nav-text" data-en="${job.location.en}" data-ar="${job.location.ar}">${job.location.en}</span>
                        </div>
                        <div class="flex items-center">
                            <i data-lucide="clock" class="w-4 h-4 mr-1"></i>
                            <span class="nav-text" data-en="${job.type.en}" data-ar="${job.type.ar}">${job.type.en}</span>
                        </div>
                        <div class="flex items-center">
                            <i data-lucide="users" class="w-4 h-4 mr-1"></i>
                            <span class="nav-text" data-en="${job.experience.en}" data-ar="${job.experience.ar}">${job.experience.en}</span>
                        </div>
                        <div class="flex items-center">
                            <i data-lucide="dollar-sign" class="w-4 h-4 mr-1"></i>
                            <span class="nav-text" data-en="${job.salary.en}" data-ar="${job.salary.ar}">${job.salary.en}</span>
                        </div>
                    </div>
                    
                    <p class="text-gray-700 leading-relaxed mb-4">
                        <span class="nav-text" data-en="${job.description.en}" data-ar="${job.description.ar}">${job.description.en}</span>
                    </p>
                    
                    <div>
                        <h4 class="font-semibold text-[#231f20] mb-2">
                            <span class="nav-text" data-en="Requirements:" data-ar="المتطلبات:">Requirements:</span>
                        </h4>
                        <ul class="space-y-1">
                            ${job.requirements.map(req => `
                                <li class="text-gray-600 text-sm flex items-start">
                                    <span class="w-2 h-2 bg-[#005670] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span class="nav-text" data-en="${req.en}" data-ar="${req.ar}">${req.en}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="lg:col-span-1 flex flex-col justify-between">
                    <div class="text-center lg:text-right mb-4">
                        <div class="inline-block px-3 py-1 bg-[#005670] bg-opacity-10 text-[#005670] rounded-full text-sm font-medium mb-2">
                            ${job.department}
                        </div>
                    </div>
                    
                    <button class="apply-job-btn w-full bg-[#005670] hover:bg-[#004558] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center" data-job-id="${job.id}">
                        <span class="nav-text" data-en="Apply Now" data-ar="تقدم الآن">Apply Now</span>
                        <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners for apply buttons
    const applyButtons = jobListings.querySelectorAll('.apply-job-btn');
    applyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const jobId = e.currentTarget.getAttribute('data-job-id');
            navigateToPage('apply-job');
        });
    });

    // Recreate icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}