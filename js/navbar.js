// Navbar Component - Include this in every page
class NavbarComponent extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupToggle();
    }

    setupToggle() {
        const toggleBtn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');

        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    render() {
        const currentPath = window.location.pathname;
        const isComponentPage =
            currentPath.includes('/components/') ||
            currentPath.includes('\\components\\');

        const basePath = isComponentPage ? '../' : './';

        this.innerHTML = `
        <header class="sticky top-0 z-50 bg-white glass border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">

                    <!-- LOGO -->
                    <a href="${basePath}index.html" class="flex items-center gap-3">
                        <img src="${basePath}img/logo.png" class="h-12 w-auto object-contain" />
                    </a>

                    <!-- DESKTOP NAV -->
                    <nav class="hidden md:flex items-center gap-6 text-sm">
                        <a href="${basePath}components/aboutUs.html" class="font-medium hover:text-brand-900">About</a>
                        <a href="${basePath}components/certification.html" class="font-medium hover:text-brand-900">Certification</a>
                        <a href="${basePath}components/infrastructure.html" class="font-medium hover:text-brand-900">Infrastructure</a>
                        <a href="${basePath}components/products.html" class="font-medium hover:text-brand-900">Products</a>
                        <a href="${basePath}components/contact.html" class="font-medium hover:text-brand-900">Contact</a>
                    </nav>

                    <!-- DESKTOP CTA -->
                    <a href="${basePath}components/contact.html"
                        class="hidden md:inline-flex items-center gap-2 rounded-md bg-[#CD000D] text-white px-4 py-2 text-sm font-medium shadow-lg">
                        Request Quote
                    </a>

                    <!-- MOBILE MENU BUTTON -->
                    <button id="mobile-menu-btn"
                        class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- MOBILE MENU -->
            <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200 bg-white">
                <nav class="flex flex-col gap-4 px-6 py-4 text-sm">
                    <a href="${basePath}components/aboutUs.html" class="font-medium">About</a>
                    <a href="${basePath}components/certification.html" class="font-medium">Certification</a>
                    <a href="${basePath}components/infrastructure.html" class="font-medium">Infrastructure</a>
                    <a href="${basePath}components/products.html" class="font-medium">Products</a>
                    <a href="${basePath}components/contact.html" class="font-medium">Contact</a>

                    <a href="${basePath}components/contact.html"
                        class="mt-2 inline-flex justify-center rounded-md bg-[#CD000D] text-white px-4 py-2 font-medium shadow-lg">
                        Request Quote
                    </a>
                </nav>
            </div>
        </header>
        `;
    }
}

// Register the custom element
customElements.define('app-navbar', NavbarComponent);
