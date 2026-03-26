"use client";

import { useRef } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {

    const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };


  return (
    
    <main>

      <> <Navbar /> </>
      
      <section id="home" className="hero">
        <div className="container hero-container">

          <div className="hero-text">
            <h1>Bangun Website Profesional</h1>
            <p>Website modern dan SEO-friendly untuk membantu bisnis berkembang</p>

            <div className="hero-buttons">
              <a 
              href="https://wa.me/6281325254768"
                className="btn"
                target="_blank"
              > Minta Penawaran</a>
              
              <Link href="/portofolio" className="btn">
               Lihat Portofolio
              </Link>

            </div>
          </div>

          <div className="hero-image">
            <img src="/images/SEO.png" alt="Website Illustration"/>
          </div>

        </div>
      </section>

      <section className="features section grey">

        <div className="feature">
          <h3>⚡ Cepat</h3>
          <p>Website dioptimalkan agar loading cepat</p>
        </div>

        <div className="feature">
          <h3>🔍 SEO Friendly</h3>
          <p>Mudah ditemukan di Google</p>
        </div>

        <div className="feature">
          <h3>📱 Responsive</h3>
          <p>Tampil bagus di semua perangkat</p>
        </div>

      </section>

      <section id="about" className="about">
        <div className="container about-container">

          <div className="about-image">
            <img src="/images/logotaro1.png" alt="Taro Digital Studio"/>
          </div>

          <div className="about-text">
            <h2>Tentang Kami</h2>
            <p>
              Taro Digital Studio membantu bisnis dan organisasi membangun website
              modern, cepat, dan SEO-friendly.
            </p>

            <p>
              Kami menyediakan jasa pembuatan website profesional di Indonesia,
              membantu UMKM dan bisnis tampil online dengan desain modern dan SEO-friendly.
            </p>
          </div>

        </div>
      </section>

      <section id="services" className="section grey">
        <div className="container">

          <h2>Layanan</h2>

          <div className="cards">

            <div className="card">
              <img src="/images/WebsiteDevelopment.jpg"/>
              <h3>Website Development</h3>
              <p>Membuat website profesional untuk organisasi dan bisnis</p>
            </div>

            <div className="card">
              <img src="/images/LandingPage.jpg"/>
              <h3>Landing Page</h3>
              <p>Halaman sederhana sebagai portofolio perusahaan kamu</p>
            </div>

            <div className="card">
              <img src="/images/SEOOptimization.jpg"/>
              <h3>Basic SEO Optimization</h3>
              <p>Website dioptimalkan agar mudah ditemukan di Google</p>
            </div>

          </div>

        </div>
      </section>

      <section id="testimoni" className="section grey">
      <div className="container">

        <h2>Testimoni</h2>

        <div className="testimonial-container">

          <div className="testimonial">
            <p>
              "Taro Digital Studio helped us build a professional website
              quickly. The result is modern and easy to manage."
            </p>

            <h4>— Michael Tan</h4>
            <span>Startup Founder</span>
          </div>

          <div className="testimonial">
            <p>
              "Very smooth experience working with Taro Digital Studio.
              Our business website looks much more professional."
            </p>

            <h4>— Sarah Wijaya</h4>
            <span>Business Owner</span>
          </div>

          <div className="testimonial">
            <p>
              "Fast, clean, and SEO-friendly website. Highly recommended."
            </p>

            <h4>— David Chen</h4>
            <span>Marketing Manager</span>
          </div>

        </div>

      </div>
      </section>

  {/* 🔥 ARTIKEL SLIDER */}
      <section className="section">
        <div className="container">

          <h2>Insight & Artikel</h2>
          <p>Pelajari lebih lanjut tentang pentingnya website</p>

          <div className="article-wrapper">

            <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

            <div className="cards slider" ref={sliderRef}>

              <div className="testimonial">
                <h3>Jasa Pembuatan Website!</h3>
                <p>Solusi website profesional untuk bisnis</p>
                <Link href="/jasa-pembuatan-website" className="btn">
                  Baca Selengkapnya
                </Link>
              </div>

              <div className="testimonial">
                <h3>Jasa Website Terbaik Kamu!</h3>
                <p>Layanan website untuk bisnis lokal</p>
                <Link href="/jasa-website-murah" className="btn">
                  Baca Selengkapnya
                </Link>
              </div>

              <div className="testimonial">
                <h3>Website untuk UMKM</h3>
                <p>Kenapa UMKM wajib punya website</p>
                <Link href="/website-umkm" className="btn">
                  Baca Selengkapnya
                </Link>
              </div>


              <div className="testimonial">
                <h3>Kenapa Harus Taro Digital Studio?</h3>
                <p>Alasan Buka Jasa Web di Taro Digital Studio</p>
                <Link href="/kenapa-taro" className="btn">
                  Baca Selengkapnya
                </Link>
              </div>

            </div>

            <button className="scroll-btn right" onClick={scrollRight}>›</button>

          </div>

        </div>
      </section>

      <> <Footer /> </>
      
    </main>
  );
}