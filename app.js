class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
            <div class="logo"><img src="./images/logo.jpg" alt="" /></div>
            <nav class="nav-links">
              <a href="./index.html">HOME</a>
              <a href="./about.html">ABOUT</a>
              <a href="./gallery.html">GALLERY</a>
              <a href="./blog.html">BLOG</a>
              <a href="./contact.html">CONTACT</a>
            </nav>
          </div>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
    <div class="footer">
        <div class="footer-text"><p>© 2023 by Piranio. All rights reserved.
        </p></div>
        <div class="social-media">
            <a href="#" class="icon"><i class="fa-brands fa-twitter fa-border fa-2x"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-border fa-facebook-f fa-2x"></i></a>
            <a href="#" class="icon"><i class="fa-solid fa-border fa-g fa-2x"></i></a>
            <a href="#" class="icon"><i class="fa-brands fa-border fa-pinterest fa-2x"></i></a>
        </div>
    </div>`}
}

customElements.define('my-footer', MyFooter)
