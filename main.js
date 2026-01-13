// BuildConnect Mobile App - Main JavaScript
// Comprehensive functionality for materials, projects, and referrals

// Global state management
const AppState = {
    currentPage: window.location.pathname.split('/').pop() || 'index.html',
    selectedMaterials: [],
    projects: [],
    referrals: [],
    user: {
        tier: 'gold',
        points: 2450,
        totalEarnings: 1850,
        referralCode: 'BC2024-GOLD-789'
    }
};

// Material data
const materialsData = [
    {
        id: 1,
        name: 'EcoBlend Foundation Mix',
        category: 'foundation',
        price: 45,
        image: './resources/materials-display.png',
        description: 'Sustainable cement-organic blend for strong foundations',
        specs: { strength: '35 MPa', coverage: '12 m²/bag', weight: '25 kg' },
        ecoRating: 5,
        inStock: true
    },
    {
        id: 2,
        name: 'GreenStruct Wall Mix',
        category: 'structural',
        price: 52,
        image: './resources/materials-display.png',
        description: 'High-strength organic composite for structural walls',
        specs: { strength: '42 MPa', coverage: '10 m²/bag', weight: '25 kg' },
        ecoRating: 4,
        inStock: true
    },
    {
        id: 3,
        name: 'BioFinish Surface Coat',
        category: 'decorative',
        price: 38,
        image: './resources/materials-display.png',
        description: 'Decorative organic finish with natural textures',
        specs: { coverage: '8 m²/bag', texture: 'Fine', colors: '5 options' },
        ecoRating: 5,
        inStock: true
    },
    {
        id: 4,
        name: 'ThermalShield Insulation',
        category: 'insulation',
        price: 65,
        image: './resources/materials-display.png',
        description: 'Advanced organic insulation with thermal properties',
        specs: { rValue: 'R-6.5', coverage: '15 m²/bag', thickness: '100mm' },
        ecoRating: 5,
        inStock: true
    },
    {
        id: 5,
        name: 'FlexiBond Adhesive',
        category: 'structural',
        price: 28,
        image: './resources/materials-display.png',
        description: 'Flexible organic adhesive for various applications',
        specs: { bondStrength: '2.5 MPa', coverage: '20 m²/bag', setTime: '30 min' },
        ecoRating: 4,
        inStock: true
    },
    {
        id: 6,
        name: 'AquaSeal Waterproof',
        category: 'foundation',
        price: 72,
        image: './resources/materials-display.png',
        description: 'Waterproof organic sealant for foundations',
        specs: { waterResistance: '10 bar', coverage: '6 m²/bag', elasticity: '300%' },
        ecoRating: 4,
        inStock: true
    },
    {
        id: 7,
        name: 'DecorStone Veneer',
        category: 'decorative',
        price: 85,
        image: './resources/materials-display.png',
        description: 'Natural stone-look organic veneer panels',
        specs: { size: '600x300mm', thickness: '15mm', weight: '12 kg/m²' },
        ecoRating: 5,
        inStock: true
    },
    {
        id: 8,
        name: 'SoundGuard Acoustic',
        category: 'insulation',
        price: 58,
        image: './resources/materials-display.png',
        description: 'Acoustic insulation with organic sound absorption',
        specs: { nrc: '0.85', coverage: '12 m²/bag', density: '80 kg/m³' },
        ecoRating: 5,
        inStock: true
    }
];

// Project data
const projectsData = [
    {
        id: 1,
        name: 'Sunset Residence',
        type: 'Residential House',
        status: 'materials',
        budget: 125000,
        timeline: 8,
        location: 'Hillside District',
        progress: 65,
        startDate: '2024-01-15',
        description: 'Modern family home with sustainable materials'
    },
    {
        id: 2,
        name: 'Downtown Office Complex',
        type: 'Commercial Building',
        status: 'design',
        budget: 450000,
        timeline: 18,
        location: 'Central Business District',
        progress: 35,
        startDate: '2024-02-01',
        description: '12-story commercial building with retail spaces'
    },
    {
        id: 3,
        name: 'Riverside Apartments',
        type: 'Residential Complex',
        status: 'construction',
        budget: 680000,
        timeline: 24,
        location: 'Riverside Area',
        progress: 80,
        startDate: '2023-08-10',
        description: '48-unit apartment complex with amenities'
    },
    {
        id: 4,
        name: 'Tech Park Phase 1',
        type: 'Commercial Building',
        status: 'planning',
        budget: 320000,
        timeline: 12,
        location: 'Technology Park',
        progress: 15,
        startDate: '2024-03-01',
        description: 'Modern office spaces for tech companies'
    },
    {
        id: 5,
        name: 'Green Valley School',
        type: 'Educational Facility',
        status: 'completed',
        budget: 180000,
        timeline: 10,
        location: 'Green Valley',
        progress: 100,
        startDate: '2023-05-20',
        description: 'Eco-friendly elementary school building'
    }
];

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    const currentPage = AppState.currentPage;
    
    // Initialize page-specific functionality
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'materials.html':
            initializeMaterialsPage();
            break;
        case 'projects.html':
            initializeProjectsPage();
            break;
        case 'referrals.html':
            initializeReferralsPage();
            break;
    }
    
    // Initialize common functionality
    initializeNavigation();
    initializeAnimations();
}

// Navigation functions
function navigateTo(page) {
    window.location.href = page;
}

function initializeNavigation() {
    // Update active navigation state
    const navButtons = document.querySelectorAll('nav button');
    navButtons.forEach(button => {
        const href = button.getAttribute('onclick');
        if (href && href.includes(AppState.currentPage)) {
            button.classList.add('text-white');
            button.classList.remove('text-gray-400');
        }
    });
}

// Home page initialization
function initializeHomePage() {
    animateStats();
    initializeCalculator();
}

function animateStats() {
    // Animate statistics counters
    anime({
        targets: '#stat-projects',
        innerHTML: [0, 20],
        round: 1,
        duration: 2000,
        delay: 500,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '#stat-materials',
        innerHTML: [0, 15],
        round: 1,
        duration: 2000,
        delay: 700,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '#stat-referrals',
        innerHTML: [0, 24],
        round: 1,
        duration: 2000,
        delay: 900,
        easing: 'easeOutExpo'
    });
}

function initializeCalculator() {
    const lengthInput = document.getElementById('calc-length');
    const widthInput = document.getElementById('calc-width');
    const heightInput = document.getElementById('calc-height');
    
    if (lengthInput && widthInput && heightInput) {
        [lengthInput, widthInput, heightInput].forEach(input => {
            input.addEventListener('input', updateQuickCalculation);
        });
        updateQuickCalculation();
    }
}

function updateQuickCalculation() {
    const length = parseFloat(document.getElementById('calc-length')?.value) || 10;
    const width = parseFloat(document.getElementById('calc-width')?.value) || 8;
    const height = parseFloat(document.getElementById('calc-height')?.value) || 3;
    
    const volume = length * width * height;
    const bags = Math.ceil(volume * 2); // 2 bags per cubic meter
    const cost = bags * 50; // $50 per bag
    
    const volumeEl = document.getElementById('calc-volume');
    const bagsEl = document.getElementById('calc-bags');
    const costEl = document.getElementById('calc-cost');
    
    if (volumeEl) volumeEl.textContent = volume.toFixed(1);
    if (bagsEl) bagsEl.textContent = bags;
    if (costEl) costEl.textContent = `$${cost.toLocaleString()}`;
}

// Materials page initialization
function initializeMaterialsPage() {
    renderMaterialsGrid();
    initializeMaterialCalculator();
    updateSelectedMaterials();
}

function renderMaterialsGrid() {
    const grid = document.getElementById('materials-grid');
    if (!grid) return;
    
    grid.innerHTML = materialsData.map(material => `
        <div class="material-card bg-white rounded-xl shadow-lg overflow-hidden" data-category="${material.category}">
            <div class="h-48 bg-gradient-to-br from-green-500 to-green-600 relative">
                <img src="${material.image}" alt="${material.name}" class="w-full h-full object-cover opacity-80">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div class="absolute top-4 right-4">
                    <div class="flex space-x-1">
                        ${Array.from({length: material.ecoRating}, () => '<svg class="w-4 h-4 text-green-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>').join('')}
                    </div>
                </div>
                <div class="absolute bottom-4 left-4 text-white">
                    <h3 class="text-lg font-bold">${material.name}</h3>
                    <p class="text-sm opacity-90">$${material.price}/bag</p>
                </div>
            </div>
            <div class="p-6">
                <p class="text-gray-600 mb-4 text-sm">${material.description}</p>
                <div class="space-y-2 mb-4">
                    ${Object.entries(material.specs).map(([key, value]) => `
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-600 capitalize">${key}:</span>
                            <span class="font-medium">${value}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="flex space-x-2">
                    <button onclick="addMaterialToQuote(${material.id})" class="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                        Add to Quote
                    </button>
                    <button onclick="selectMaterial(${material.id})" class="px-4 py-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg text-sm font-semibold transition-colors">
                        Select
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterMaterials(category) {
    const cards = document.querySelectorAll('.material-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update button states
    buttons.forEach(btn => {
        btn.classList.remove('filter-active');
        btn.classList.add('bg-gray-100', 'text-gray-700');
    });
    
    event.target.classList.add('filter-active');
    event.target.classList.remove('bg-gray-100', 'text-gray-700');
    
    // Filter cards
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function addMaterialToQuote(materialId) {
    const material = materialsData.find(m => m.id === materialId);
    if (material && !AppState.selectedMaterials.find(m => m.id === materialId)) {
        AppState.selectedMaterials.push(material);
        updateSelectedMaterials();
        showNotification(`${material.name} added to quote`);
    }
}

function selectMaterial(materialId) {
    const material = materialsData.find(m => m.id === materialId);
    if (material) {
        // Update calculator with material price
        const costEl = document.getElementById('calc-cost');
        if (costEl) {
            const bags = parseInt(document.getElementById('calc-bags')?.textContent) || 48;
            costEl.textContent = `$${(bags * material.price).toLocaleString()}`;
        }
        showNotification(`${material.name} selected for calculation`);
    }
}

function updateSelectedMaterials() {
    const container = document.getElementById('selected-materials');
    if (!container) return;
    
    if (AppState.selectedMaterials.length === 0) {
        container.innerHTML = '<div class="text-gray-500 text-sm text-center py-4">No materials selected</div>';
        return;
    }
    
    container.innerHTML = AppState.selectedMaterials.map(material => `
        <div class="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div>
                <div class="font-medium text-gray-800">${material.name}</div>
                <div class="text-sm text-gray-600">$${material.price}/bag</div>
            </div>
            <button onclick="removeFromQuote(${material.id})" class="text-red-500 hover:text-red-700">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
            </button>
        </div>
    `).join('');
}

function removeFromQuote(materialId) {
    AppState.selectedMaterials = AppState.selectedMaterials.filter(m => m.id !== materialId);
    updateSelectedMaterials();
}

function initializeMaterialCalculator() {
    const inputs = ['calc-length', 'calc-width', 'calc-height'];
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', updateMaterialCalculation);
        }
    });
}

function updateMaterialCalculation() {
    const length = parseFloat(document.getElementById('calc-length')?.value) || 10;
    const width = parseFloat(document.getElementById('calc-width')?.value) || 8;
    const height = parseFloat(document.getElementById('calc-height')?.value) || 0.3;
    
    const volume = length * width * height;
    const bags = Math.ceil(volume * 2);
    const avgPrice = 50; // Average price per bag
    const cost = bags * avgPrice;
    
    const volumeEl = document.getElementById('calc-volume');
    const bagsEl = document.getElementById('calc-bags');
    const costEl = document.getElementById('calc-cost');
    
    if (volumeEl) volumeEl.textContent = `${volume.toFixed(1)} m³`;
    if (bagsEl) bagsEl.textContent = bags;
    if (costEl) costEl.textContent = `$${cost.toLocaleString()}`;
}

function addToQuote() {
    if (AppState.selectedMaterials.length === 0) {
        showNotification('Please select materials first', 'warning');
        return;
    }
    showNotification('Quote request submitted successfully!', 'success');
}

function requestDetailedQuote() {
    showNotification('Detailed quote request sent. Our team will contact you soon!', 'success');
}

// Projects page initialization
function initializeProjectsPage() {
    renderProjectsList();
    initializeProjectTimeline();
}

function renderProjectsList() {
    const container = document.getElementById('projects-list');
    if (!container) return;
    
    container.innerHTML = projectsData.map(project => `
        <div class="project-card bg-white rounded-xl shadow-lg overflow-hidden" data-status="${project.status}">
            <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-bold text-gray-800">${project.name}</h3>
                    <span class="status-badge status-${project.status}">${project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
                </div>
                
                <p class="text-gray-600 mb-4">${project.description}</p>
                
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <div class="text-sm text-gray-600">Budget</div>
                        <div class="font-bold text-green-600">$${project.budget.toLocaleString()}</div>
                    </div>
                    <div>
                        <div class="text-sm text-gray-600">Timeline</div>
                        <div class="font-bold text-blue-600">${project.timeline} months</div>
                    </div>
                    <div>
                        <div class="text-sm text-gray-600">Type</div>
                        <div class="font-medium text-gray-800">${project.type}</div>
                    </div>
                    <div>
                        <div class="text-sm text-gray-600">Location</div>
                        <div class="font-medium text-gray-800">${project.location}</div>
                    </div>
                </div>
                
                <div class="mb-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm font-medium text-gray-700">Progress</span>
                        <span class="text-sm text-gray-600">${project.progress}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-red-600 h-2 rounded-full transition-all duration-300" style="width: ${project.progress}%"></div>
                    </div>
                </div>
                
                <div class="flex space-x-2">
                    <button onclick="viewProject(${project.id})" class="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
                        View Details
                    </button>
                    <button onclick="updateProjectStatus(${project.id})" class="px-4 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg text-sm font-semibold transition-colors">
                        Update
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProjects(status) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update button states
    buttons.forEach(btn => {
        btn.classList.remove('filter-active');
        btn.classList.add('bg-gray-100', 'text-gray-700');
    });
    
    event.target.classList.add('filter-active');
    event.target.classList.remove('bg-gray-100', 'text-gray-700');
    
    // Filter cards
    cards.forEach(card => {
        if (status === 'all' || card.dataset.status === status) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function showNewProjectForm() {
    const modal = document.getElementById('new-project-modal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function hideNewProjectForm() {
    const modal = document.getElementById('new-project-modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function viewProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        showNotification(`Opening ${project.name} details`, 'info');
    }
}

function updateProjectStatus(projectId) {
    showNotification('Project status updated', 'success');
}

function uploadDocuments() {
    showNotification('Document upload feature coming soon', 'info');
}

function requestQuote() {
    navigateTo('materials.html');
}

function initializeProjectTimeline() {
    const chartContainer = document.getElementById('timeline-chart');
    if (!chartContainer) return;
    
    const chart = echarts.init(chartContainer);
    
    const option = {
        tooltip: {
            trigger: 'item'
        },
        series: [{
            type: 'pie',
            radius: '70%',
            data: [
                { value: 3, name: 'Planning', itemStyle: { color: '#eab308' } },
                { value: 2, name: 'Design', itemStyle: { color: '#3b82f6' } },
                { value: 1, name: 'Materials', itemStyle: { color: '#8b5cf6' } },
                { value: 1, name: 'Construction', itemStyle: { color: '#f97316' } },
                { value: 2, name: 'Completed', itemStyle: { color: '#10b981' } }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    
    chart.setOption(option);
}

// Referrals page initialization
function initializeReferralsPage() {
    initializeReferralChart();
}

function shareReferral(method) {
    const referralLink = `buildconnect.com/ref/${AppState.user.referralCode}`;
    
    switch(method) {
        case 'email':
            window.location.href = `mailto:?subject=BuildConnect Referral&body=Join BuildConnect using my referral link: ${referralLink}`;
            break;
        case 'sms':
            window.location.href = `sms:?body=Join BuildConnect using my referral link: ${referralLink}`;
            break;
        case 'social':
            if (navigator.share) {
                navigator.share({
                    title: 'BuildConnect Referral',
                    text: 'Join BuildConnect using my referral link',
                    url: referralLink
                });
            } else {
                navigator.clipboard.writeText(referralLink).then(() => {
                    showNotification('Referral link copied to clipboard', 'success');
                });
            }
            break;
    }
}

function redeemReward(rewardType) {
    const rewards = {
        'cash-50': { name: '$50 Cash Bonus', cost: 500 },
        'discount-15': { name: '15% Material Discount', cost: 750 },
        'premium-support': { name: 'Premium Support', cost: 1000 }
    };
    
    const reward = rewards[rewardType];
    if (reward && AppState.user.points >= reward.cost) {
        AppState.user.points -= reward.cost;
        showNotification(`${reward.name} redeemed successfully!`, 'success');
        // Update points display
        const pointsEl = document.getElementById('reward-points');
        if (pointsEl) pointsEl.textContent = AppState.user.points.toLocaleString();
    } else {
        showNotification('Insufficient points for this reward', 'warning');
    }
}

function initializeReferralChart() {
    const chartContainer = document.getElementById('referral-chart');
    if (!chartContainer) return;
    
    const chart = echarts.init(chartContainer);
    
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [2, 4, 3, 6, 5, 4],
            type: 'line',
            smooth: true,
            itemStyle: { color: '#667eea' },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(102, 126, 234, 0.3)' },
                        { offset: 1, color: 'rgba(102, 126, 234, 0.05)' }
                    ]
                }
            }
        }]
    };
    
    chart.setOption(option);
}

// Common utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
    
    // Set colors based on type
    const colors = {
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-white',
        error: 'bg-red-500 text-white',
        info: 'bg-blue-500 text-white'
    };
    
    notification.className += ` ${colors[type] || colors.info}`;
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.card-hover, .project-card, .reward-card, .material-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        observer.observe(el);
    });
}

// Form handling
document.addEventListener('submit', function(e) {
    if (e.target.id === 'new-project-form') {
        e.preventDefault();
        handleNewProjectSubmission();
    }
});

function handleNewProjectSubmission() {
    const formData = new FormData(document.getElementById('new-project-form'));
    const projectData = Object.fromEntries(formData);
    
    // Add to projects data
    const newProject = {
        id: projectsData.length + 1,
        name: projectData['project-name'] || 'New Project',
        type: projectData['project-type'] || 'Residential House',
        status: 'planning',
        budget: parseInt(projectData['project-budget']) || 100000,
        timeline: parseInt(projectData['project-timeline']) || 6,
        location: projectData['project-location'] || 'TBD',
        progress: 0,
        startDate: new Date().toISOString().split('T')[0],
        description: projectData['project-description'] || 'New construction project'
    };
    
    projectsData.push(newProject);
    hideNewProjectForm();
    renderProjectsList();
    showNotification('Project created successfully!', 'success');
}

// Handle new project form submission
document.addEventListener('DOMContentLoaded', function() {
    const newProjectForm = document.getElementById('new-project-form');
    if (newProjectForm) {
        newProjectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleNewProjectSubmission();
        });
    }
});

// Export functions for global access
window.navigateTo = navigateTo;
window.filterMaterials = filterMaterials;
window.addMaterialToQuote = addMaterialToQuote;
window.selectMaterial = selectMaterial;
window.removeFromQuote = removeFromQuote;
window.addToQuote = addToQuote;
window.requestDetailedQuote = requestDetailedQuote;
window.filterProjects = filterProjects;
window.showNewProjectForm = showNewProjectForm;
window.hideNewProjectForm = hideNewProjectForm;
window.viewProject = viewProject;
window.updateProjectStatus = updateProjectStatus;
window.uploadDocuments = uploadDocuments;
window.requestQuote = requestQuote;
window.shareReferral = shareReferral;
window.redeemReward = redeemReward;