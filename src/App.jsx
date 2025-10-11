import './index.css'

function App() {
  return (
    <div className="homepage">
      {/* --- Navigation Bar --- */}
      <header className="navbar">
        <div className="logo-section">
          <img src="/Cleaning logo.jpg" alt="Cleaning Logo" className="logo" />
          <h1 className="brand-name">Roman's Servicio De Limpieza</h1>
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Gallery</li>
            <li>Contact</li>
            <li>Policies</li>
          </ul>
        </nav>

        <a href="tel:4805162263" className="call-btn">(480) 516-2263</a>
      </header>

      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Clean interior"
          />
        </div>

        <div className="hero-text">
          <h2>Quality Home Cleaning You Can Count On</h2>
          <p>
            Roman's Cleaning Services is a family-owned business based in Arizona.
            We offer trustworthy, friendly, and detailed cleaning for homes and offices.
          </p>
          <p>
            Our mission is to make every space sparkle as easy as 1, 2, 3!
          </p>

          <div className="button-group">
            <a href="mailto:romancleaning@email.com" className="quote-btn">Request a Quote</a>
            <a href="tel:4805162263" className="call-alt-btn">Call Now</a>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className="services-section">
        <div className="services-text">
          <h2>Full Service Residential & Commercial Cleaning</h2>
          <p>
            Life gets busy — we get it! Our trained and trustworthy team uses
            professional techniques and top-quality products to make your home or
            workspace shine from top to bottom.
          </p>
          <p>
            Whether it is your home, office, or rental property, we tailor each
            cleaning to your needs. We take pride in helping families, property
            managers, and business owners keep their spaces fresh, healthy, and
            sparkling clean.
          </p>

          <div className="services-list">
            <ul>
              <li> House Cleaning</li>
              <li> Office Cleaning</li>
              <li> Deep Cleaning</li>
              <li> Window Cleaning</li>
              <li> Upholstery Cleaning</li>
            </ul>
            <ul>
              <li> Airbnb Cleaning</li>
              <li> Move-In / Move-Out Cleaning</li>
              <li> Post-Construction Cleaning</li>
              <li> Tile & Grout Cleaning</li>
            </ul>
          </div>
        </div>

        <div className="services-image">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=80"
            alt="Clean bedroom interior"
          />
        </div>
      </section>
    </div>
  )
}

export default App
