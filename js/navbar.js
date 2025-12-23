// Navbar Component - Include this in every page
class NavbarComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const currentPath = window.location.pathname;
        const isComponentPage = currentPath.includes('/components/') || currentPath.includes('\\components\\');
        
        // Adjust paths based on current page location
        const basePath = isComponentPage ? '../' : './';
        
        this.innerHTML = `
            <header class="sticky top-0 z-50 bg-white/70 glass border-b border-slate-200">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <!-- LOGO -->
                        <a href="${basePath}index.html" class="flex items-center gap-3">
                            <img src="${basePath}img/logo.png" class="h-12 w-auto object-contain" />
                        </a>

                        <!-- NAV LINKS -->
                        <nav class="hidden md:flex items-center gap-6 text-sm">
                            <a href="${basePath}components/aboutUs.html" class="font-medium hover:text-brand-900">
                                About
                            </a>
                            <a href="${basePath}components/certification.html" class="font-medium hover:text-brand-900">
                                Certification
                            </a>
                            <a href="${basePath}components/infrastructure.html" class="font-medium hover:text-brand-900">
                                Infrastructure
                            </a>
                            <a href="${basePath}components/products.html" class="font-medium hover:text-brand-900">
                                Products
                            </a>
                            <a href="${basePath}components/contact.html" class="font-medium hover:text-brand-900">
                                Contact
                            </a>
                        </nav>

                        <!-- CTA -->
                        <a href="${basePath}components/contact.html"
                            class="inline-flex items-center gap-2 rounded-md bg-[#CD000D] text-white px-4 py-2 text-sm font-medium shadow-lg">
                            Request Quote
                        </a>
                    </div>
                </div>
            </header>
        `;
    }
}

// Register the custom element
customElements.define('app-navbar', NavbarComponent);
