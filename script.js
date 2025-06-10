document.addEventListener('DOMContentLoaded', () => {

    // Data from the report
    const data = {
        modules: [
            { id: 'registrasi', name: 'Modul Registrasi', desc: 'Pintu gerbang utama untuk pasien, mengelola pendaftaran pasien baru dan lama. Datanya disimpan di Database Central dan menginisiasi entri di EMR Module.' },
            { id: 'login', name: 'Modul Login', desc: 'Bertanggung jawab untuk otentikasi dan otorisasi pengguna, memastikan setiap akses ke modul lain sah dan sesuai hak akses.' },
            { id: 'emr', name: 'EMR Module', desc: 'Inti dari sistem, menyimpan seluruh riwayat medis pasien, diagnosa, tindakan, dan hasil pemeriksaan. Modul lain akan berinteraksi dengannya untuk update atau mengambil data medis.' },
            { id: 'lab', name: 'Modul Laboratorium', desc: 'Menerima permintaan tes dari dokter, memprosesnya, dan mengirimkan hasilnya kembali ke EMR Module atau informasi biaya ke Modul Billing.' },
            { id: 'farmasi', name: 'Modul Farmasi', desc: 'Menerima resep dari dokter, memprosesnya, dan mengirimkan informasi biaya ke Modul Billing.' },
            { id: 'billing', name: 'Modul Billing', desc: 'Mengelola semua aspek keuangan, menghitung tagihan dari berbagai layanan, dan mencatat transaksi pembayaran.' },
            { id: 'db', name: 'Database Central', desc: 'Sebagai repositori data utama, semua modul akan membaca dan menulis data ke database ini untuk menjaga konsistensi dan integritas informasi.' }
        ],
        implementationPlan: [
            { phase: "Fase 1: Perencanaan & Persiapan", duration: "2 Bulan", desc: "Analisis kebutuhan, pembentukan tim, penyusunan jadwal, dan persiapan lingkungan teknis." },
            { phase: "Fase 2: Pengembangan & Kustomisasi", duration: "4 Bulan", desc: "Pengembangan modul inti (Pendaftaran & RME), setup database, dan desain UI/UX." },
            { phase: "Fase 3: Migrasi & Integrasi Lanjutan", duration: "3 Bulan", desc: "Migrasi data lama, integrasi modul Farmasi & Laboratorium via API, pengembangan modul Keuangan." },
            { phase: "Fase 4: Pelatihan & Go-Live", duration: "2 Bulan", desc: "Pelatihan intensif untuk semua staf, pembuatan user manual, dan peluncuran sistem secara bertahap." },
            { phase: "Fase 5: Monitoring & Dukungan", duration: "1 Bulan", desc: "Pemantauan kinerja sistem secara intensif, perbaikan bug cepat, dan pengumpulan umpan balik pengguna." }
        ],
        operationalActivities: [
            { title: "Pemantauan Kinerja Server", content: "Memantau CPU, RAM, Disk I/O, dan trafik jaringan pada server aplikasi dan database secara harian menggunakan tools seperti Nagios & Zabbix." },
            { title: "Manajemen Backup dan Pemulihan", content: "Mencadangkan database dan konfigurasi sistem secara otomatis (harian/mingguan), serta melakukan uji pemulihan data secara berkala." },
            { title: "Manajemen Akun Pengguna", content: "Membuat, memodifikasi, atau menonaktifkan akun pengguna dan mengelola hak akses sesuai peran secara harian." },
            { title: "Penanganan Insiden Umum", content: "Menangani laporan gangguan seperti gagal login atau error tampilan data melalui sistem helpdesk atau ticketing internal." },
        ],
        incidentSteps: [
            { title: "Deteksi Dini (0-5 Menit)", desc: "Sistem monitoring mengirimkan notifikasi peringatan (SMS/Email) kepada tim operasional bahwa server tidak merespons." },
            { title: "Verifikasi Masalah (5-15 Menit)", desc: "Tim operasional memeriksa status server (ping, SSH) dan memastikan skala masalah (server atau layanan spesifik)." },
            { title: "Isolasi & Penanganan Awal (15-60 Menit)", desc: "Mencoba me-restart server atau layanan database. Jika gagal, memeriksa log untuk mencari penyebab (disk full, corrupt file)." },
            { title: "Pemulihan (60-120 Menit)", desc: "Melakukan restore database dari backup terakhir yang berhasil ke server cadangan jika masalah hardware atau korupsi data." },
            { title: "Komunikasi & Dokumentasi", desc: "Menginformasikan pengguna bahwa sistem telah pulih dan mendokumentasikan insiden, penyebab, dan langkah penanganan." },
            { title: "Analisis & Pencegahan", desc: "Melakukan Root Cause Analysis (RCA) untuk mengetahui akar penyebab dan mengimplementasikan langkah pencegahan di masa depan." }
        ],
        performanceResults: {
            labels: ['Login Pengguna', 'Akses RME', 'Submit Resep/Lab'],
            targets: [1, 2, 3],
            predictions: [0.8, 1.5, 2.5] 
        },
        evaluation: {
            success: [
                "Efisiensi Pendaftaran: Waktu antrean turun dari 45 menit menjadi kurang dari 10 menit.",
                "Akses Rekam Medis: Akses data pasien menjadi lebih cepat dan efisien, mengurangi human error.",
                "Integrasi Modul: Modul Lab & Apotek berhasil terintegrasi dengan baik ke dalam alur kerja utama.",
                "Ketersediaan Sistem: Uptime sistem stabil mendekati target 99.5% pada bulan pertama operasi."
            ],
            improvement: [
                "Optimalisasi Modul Laporan: Query untuk laporan kompleks masih perlu dioptimalkan untuk kecepatan.",
                "Penyesuaian Alur Kerja End-to-End: Beberapa proses antar departemen memerlukan penyesuaian minor untuk efisiensi maksimal.",
                "Usulan Fitur Baru: Pengguna mengusulkan fitur antrean online berbasis mobile untuk pengembangan selanjutnya."
            ]
        },
        maintenancePlan: [
            { type: "Corrective (Perbaikan)", desc: "Segera mengatasi bug minor yang dilaporkan dan melakukan optimasi query pada modul laporan yang teridentifikasi lambat." },
            { type: "Adaptive (Penyesuaian)", desc: "Memantau tren penggunaan dan melakukan peningkatan kapasitas server jika diperlukan. Menyesuaikan alur kerja sistem berdasarkan umpan balik." },
            { type: "Perfective (Penyempurnaan)", desc: "Mengembangkan fitur-fitur baru yang diusulkan seperti antrean online, dan melakukan penyempurnaan UI/UX secara berkala." },
            { type: "Preventive (Pencegahan)", desc: "Melakukan update rutin sistem/modul setiap 2 minggu, maintenance server bulanan, dan audit keamanan secara berkala." }
        ]
    };

    // Section A: Architecture
    const moduleDiagram = document.getElementById('module-diagram');
    const moduleInfo = document.getElementById('module-info');
    data.modules.forEach(module => {
        const card = document.createElement('button');
        card.className = 'module-card bg-white p-4 rounded-lg shadow text-center cursor-pointer border-2 border-transparent';
        card.textContent = module.name;
        card.dataset.id = module.id;
        moduleDiagram.appendChild(card);
    });
    
    moduleDiagram.addEventListener('click', (e) => {
        if(e.target.classList.contains('module-card')) {
            const selectedId = e.target.dataset.id;
            const moduleData = data.modules.find(m => m.id === selectedId);
            
            document.querySelectorAll('.module-card').forEach(card => card.classList.remove('active'));
            e.target.classList.add('active');

            moduleInfo.style.opacity = '0';
            setTimeout(() => {
                moduleInfo.innerHTML = `<p><strong class="text-slate-800">${moduleData.name}:</strong> ${moduleData.desc}</p>`;
                moduleInfo.style.opacity = '1';
            }, 150);
        }
    });

    const timelineContainer = document.querySelector('#arsitektur .relative');
    data.implementationPlan.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item mb-8';
        timelineItem.innerHTML = `
            <h4 class="font-semibold text-lg text-slate-800">${item.phase}</h4>
            <p class="text-sm font-medium text-teal-600 mb-1">${item.duration}</p>
            <p class="text-slate-600">${item.desc}</p>
        `;
        timelineContainer.appendChild(timelineItem);
    });

    // Section B: Operations
    const opAccordion = document.querySelector('#operasional .space-y-4');
    data.operationalActivities.forEach((activity, index) => {
        const item = document.createElement('div');
        item.className = 'bg-white rounded-lg shadow-sm border border-slate-200';
        item.innerHTML = `
            <button class="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-700">
                <span>${activity.title}</span>
                <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="px-4 pb-4 text-slate-600 hidden">
                <p>${activity.content}</p>
            </div>
        `;
        opAccordion.appendChild(item);
    });

    opAccordion.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        }
    });
    
    // Incident Simulation
    let currentStep = 0;
    const stepsContainer = document.getElementById('steps-container');
    const stepCounter = document.getElementById('step-counter');
    const prevBtn = document.getElementById('prev-step');
    const nextBtn = document.getElementById('next-step');

    function renderSteps() {
        stepsContainer.innerHTML = '';
        data.incidentSteps.forEach((step, index) => {
            const stepEl = document.createElement('div');
            stepEl.className = 'step-content absolute w-full text-center';
            if (index !== currentStep) {
                stepEl.classList.add('hidden');
            }
            stepEl.innerHTML = `
                <h4 class="text-lg font-semibold text-slate-800 mb-2">${step.title}</h4>
                <p>${step.desc}</p>
            `;
            stepsContainer.appendChild(stepEl);
        });
        stepCounter.textContent = `Langkah ${currentStep + 1} dari ${data.incidentSteps.length}`;
        prevBtn.disabled = currentStep === 0;
        nextBtn.disabled = currentStep === data.incidentSteps.length - 1;
    }

    nextBtn.addEventListener('click', () => {
        if (currentStep < data.incidentSteps.length - 1) {
            currentStep++;
            renderSteps();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            renderSteps();
        }
    });
    
    renderSteps();

    // Section C: Performance
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.performanceResults.labels,
            datasets: [
                {
                    label: 'Target Waktu Respon (detik)',
                    data: data.performanceResults.targets,
                    backgroundColor: 'rgba(203, 213, 225, 0.6)', // slate-300
                    borderColor: 'rgba(100, 116, 139, 1)', // slate-500
                    borderWidth: 1
                },
                {
                    label: 'Prediksi Hasil (detik)',
                    data: data.performanceResults.predictions,
                    backgroundColor: 'rgba(20, 184, 166, 0.6)', // teal-500
                    borderColor: 'rgba(15, 118, 110, 1)', // teal-700
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Waktu (detik)'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.raw} detik`;
                        }
                    }
                }
            }
        }
    });

    // Section D: Evaluation
    const successList = document.getElementById('success-list');
    data.evaluation.success.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        successList.appendChild(li);
    });

    const improvementList = document.getElementById('improvement-list');
    data.evaluation.improvement.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        improvementList.appendChild(li);
    });

    const maintenanceAccordion = document.getElementById('maintenance-accordion');
    data.maintenancePlan.forEach(plan => {
        const item = document.createElement('div');
        item.className = 'bg-white rounded-lg shadow-sm border border-slate-200';
        item.innerHTML = `
            <button class="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-700">
                <span>${plan.type}</span>
                <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="px-4 pb-4 text-slate-600 hidden">
                <p>${plan.desc}</p>
            </div>
        `;
        maintenanceAccordion.appendChild(item);
    });

    maintenanceAccordion.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('svg');
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        }
    });
    
        // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});