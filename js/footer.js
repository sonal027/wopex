// Footer Component - Include this in every page
class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const currentPath = window.location.pathname;
    const isComponentPage =
      currentPath.includes("/components/") ||
      currentPath.includes("\\components\\");

    // Adjust paths based on current page location
    const basePath = isComponentPage ? "../" : "./";

    this.innerHTML = `
    <!-- FOOTER -->
    <footer class="bg-[#0A1E3A] text-slate-200 py-8">
      <div
        class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div class="text-sm">
          &copy; <span id="year"></span> WOPEX Manufacturing India Pvt Ltd. All
          rights reserved.
        </div>
        <div class="flex items-center gap-4 text-sm">
          <a href="${basePath}components/certification.html" class="hover:underline">Certifications</a>
           <a href="${basePath}components/aboutUs.html"  class="hover:underline">About Us</a>
           <a href="${basePath}components/products.html"  class="hover:underline">Products</a>
         <a href="${basePath}components/contact.html" class="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
        `;
  }
}

// Register the custom element
customElements.define("app-footer", FooterComponent);
