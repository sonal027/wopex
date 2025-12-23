
// year code 
document.getElementById("year").textContent = new Date().getFullYear();
(function () {
    const track = document.getElementById("logo-track");
    if (!track) return;
    let pos = 0;
    const speed = 0.5;
    function frame() {
        pos -= speed;
        if (Math.abs(pos) > track.scrollWidth / 1.5) pos = 0;
        track.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
})();


// slideshow code
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? "1" : "0";
    });
    dots.forEach((d, i) => {
        d.style.backgroundColor =
            i === index ? "white" : "rgba(255,255,255,0.4)";
    });
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);

// Click dots to change slide
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        current = i;
        showSlide(i);
    });
});

// Initialize
showSlide(0);



// Updated timeline data structure
const timeline = [
    {
        heading: "Engineering",
        subheading: "Tender · Design · Specs",
        detail: {
            title: "Tender/Study",
            description: [
                "Clause by Clause review and compliance mapping",
                "Feasibility study with risk & timeline summary",
                "Welding specification adoption & recommendations",
                "Costing estimations and cost-to-design insights",
            ],
            title2: "Design",
            description2: [
                "Support to design team with DFx reviews",
                "Drawing approval workflows and stamp control",
                "Design to cost tradeoff reports",
                "Specifications edition and traceability",
                "Training for manufacturing handoff",
            ],
            bigHeading: "Engineering",
        },
        images: ["img/engg1.png", "img/weilding.jpg", "img/engg3.png"],
    },
    {
        heading: "Manufacturing",
        subheading: "Research · New Tech",
        detail: {
            title: "Industrialization",
            description: [
                "Workshop documentation edition (SOP, instruction sheets,)",
                "Specification and design of production jigs",
                "Specification and qualification of manufacturing means",
            ],
            title2: "Workshop / Work Site",
            description2: [
                "Manufacturing & supervision",
                "Audits and continuous improvement advices",
                "Workers' training and qualification",
            ],
            bigHeading: "Manufacturing",
        },
        images: ["img/man1.png", "img/man2.png", "img/part1.jpeg"],
    },
    {
        heading: "Quality",
        subheading: "Markets · Partnerships",
        detail: {
            title: "Certification",
            description: [
                "Support to certification (ISO 3834, EN 15085-2, EN 1090-1, IRIS…)",
                "External welding coordination",
                "Writing and/or validation of documentation ",
            ],
            title2: "Inspection",
            description2: [
                "Manufacturing site inspection",
                "Product inspection and FAI Management",
                "Customer or third-party representation",
                "FROSIO / COFREND 2 PT",
            ],
            bigHeading: "Quality",
        },
        images: ["img/quali3.png", "img/quali1.png", "img/quali2.jpg"],
    },
    {
        heading: "Suppliers",
        subheading: "Capacity · Facilities",
        detail: {
            title: "Purchasing department support",
            description: [
                "Supplier selection and Quotation analysis",
                "Supplier audit and validation",
                "Technical support to purchasing department",
                "Sourcing support",
            ],
            title2: "Development",
            description2: [
                "Transfer of competencies",
                "Supervision",
                "Technical support",
                "Product validation (FAI, final customer acceptance)",
            ],
            bigHeading: "Suppliers",
        },
        images: [
            "img/supplier1.jpg",
            "img/supplier2.png",
            "img/supplier3.jpg",
        ],
    },
];

let start = 0;
const designGrid = document.getElementById("design-grid");

// Main section elements
const mainHeadingEl = document.getElementById("main-heading");
const mainSubheadingEl = document.getElementById("main-subheading");
// Detail section elements
const detailTitleEl = document.getElementById("detail-title");
const detailTitleEl2 = document.getElementById("detail-title2");
const detailTextEl = document.getElementById("detail-text");
const detailTextEl2 = document.getElementById("detail-text2");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateTimeline() {
    // Top heading
    mainHeadingEl.textContent = timeline[start].heading;
    mainSubheadingEl.textContent = timeline[start].subheading;
    // Detail section
    detailTitleEl.textContent = timeline[start].detail.title;
    detailTitleEl2.textContent = timeline[start].detail.title2;
    detailTextEl.innerHTML = timeline[start].detail.description
        .map((item) => `<li>${item}</li>`)
        .join("");

    detailTextEl2.innerHTML = timeline[start].detail.description2
        .map((item) => `<li>${item}</li>`)
        .join("");

    updateImageGrid();

    // Enable/disable navigation
    prevBtn.disabled = start === 0;
    nextBtn.disabled = start === timeline.length - 1;

    designGrid.innerHTML = timeline[start].images
        .map(
            (img) =>
                `<img src="${img}" class="w-full h-28 object-cover rounded-lg shadow" />`
        )
        .join("");

    updateImageGrid();
}

function updateImageGrid() {
    const imgs = timeline[start].images;

    designGrid.innerHTML = `
    <!-- LEFT BIG IMAGE -->
    <div class="row-span-2 h-96">
      <img src="${imgs[0]}" class="w-full h-full object-cover rounded-xl shadow transition-all duration-300 transform hover:scale-105" />
    </div>

    <!-- RIGHT TOP SMALL -->
    <div class="h-42">
      <img src="${imgs[1]}" class="w-full h-full object-cover rounded-xl shadow transition-all duration-300 transform hover:scale-105" />
    </div>

    <!-- RIGHT BOTTOM SMALL -->
    <div class="h-42">
      <img src="${imgs[2]}" class="w-full h-full object-cover rounded-xl shadow transition-all duration-300 transform hover:scale-105" />
    </div>
  `;
}

prevBtn.addEventListener("click", () => {
    if (start > 0) {
        start--;
        updateTimeline();
    }
});

nextBtn.addEventListener("click", () => {
    if (start < timeline.length - 1) {
        start++;
        updateTimeline();
    }
});

updateTimeline();

const track = document.getElementById("marquee-track");
let pos = 0;
let speed = 1; // adjust marquee speed
let paused = false;

// pause on hover
track.addEventListener("mouseenter", () => (paused = true));
track.addEventListener("mouseleave", () => (paused = false));

function animate() {
    if (!paused) pos -= speed;

    const width = track.scrollWidth / 2;
    if (Math.abs(pos) >= width) pos = 0;

    track.style.transform = `translateX(${pos}px)`;

    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// ================= GOOGLE SHEETS FORM INTEGRATION =================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

// REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwbrhhOsj9ir-krgaVhr89r8_rL2HkasakdSwY0aSsxe0uB55OnDtlebGe_34lrJAIz4A/exec";

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formMessage.classList.add('hidden');
        
        const formData = {
            name: contactForm.name.value,
            company: contactForm.company.value,
            email: contactForm.email.value,
            phone: contactForm.phone.value,
            industry: contactForm.industry.value,
            brief: contactForm.brief.value
        };
        
        try {
            const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
                mode: 'no-cors'
            });
            
            formMessage.textContent = '✓ Thank you! Your enquiry has been sent. We will contact you soon.';
            formMessage.classList.remove('hidden');
            formMessage.style.color = '#86efac';
            contactForm.reset();
            
        } catch (error) {
            console.error('Error:', error);
            formMessage.textContent = '✗ Error sending form. Please try emailing info@wopex.in';
            formMessage.classList.remove('hidden');
            formMessage.style.color = '#f87171';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send enquiry';
        }
    });
}