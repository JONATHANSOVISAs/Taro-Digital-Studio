import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Kontak() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container contact-container">

          <h1>Kontak Kami</h1>
          <p className="contact-intro">
            Taro Digital Studio adalah penyedia jasa pembuatan website modern
            untuk bisnis dan organisasi. Kami membantu brand membangun
            kehadiran digital yang profesional dan mudah diakses dengan harga terjangkau.
            Kami juga menyediakan paket untuk membantu proses pembelian hosting dan domain yang pastinya
            akan membantu setiap client dalam memasarkan produk bisnisnya.
          </p>

          <div className="contact-info">

            <div className="contact-item">
              <h3>WhatsApp</h3>
              <p>Hubungi kami langsung melalui WhatsApp.</p>

              <a 
                href="https://wa.me/6281325254768"
                className="btn"
                target="_blank"
              >
                Chat WhatsApp
              </a>
            </div>

            <div className="contact-item">
              <h3>Email</h3>
              <p>tarofoundations@gmail.com</p>
            </div>

            <div className="contact-item">
              <h3>Lokasi</h3>
              <p>Jakarta Barat, Indonesia</p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}