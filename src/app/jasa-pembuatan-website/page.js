import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Jasa Pembuatan Website Profesional | Taro Digital Studio",
  description:
    "Butuh jasa pembuatan website profesional? Taro Digital Studio membantu bisnis dan UMKM memiliki website modern, cepat, dan SEO-friendly.",
};

export default function Page() {
  return (
    <>
      <Header />

      <main className="container article-page">
        <h1>Jasa Pembuatan Website Profesional</h1>

        <p>
          Taro Digital Studio menyediakan jasa pembuatan website profesional
          untuk bisnis, UMKM, dan organisasi yang ingin berkembang di era digital.
          Kami membantu Anda memiliki website yang modern, cepat, dan SEO-friendly.
        </p>

        <h2>Kenapa Bisnis Anda Membutuhkan Website?</h2>
        <p>
          Di era digital saat ini, website bukan hanya pelengkap, tetapi kebutuhan.
          Website membantu meningkatkan kredibilitas bisnis, menjangkau lebih banyak
          pelanggan, dan meningkatkan penjualan secara online.
        </p>

        <h2>Layanan yang Kami Tawarkan</h2>
        <ul>
          <li>Website Company Profile</li>
          <li>Landing Page Bisnis</li>
          <li>Website untuk UMKM</li>
          <li>Optimasi SEO dasar</li>
        </ul>

        <h2>Keunggulan Taro Digital Studio</h2>
        <ul>
          <li>Desain modern dan profesional</li>
          <li>Loading cepat dan responsive</li>
          <li>SEO-friendly</li>
          <li>Harga terjangkau</li>
        </ul>

        <h2>Berapa Biaya Pembuatan Website?</h2>
        <p>
          Biaya pembuatan website tergantung kebutuhan. Kami menyediakan paket
          yang fleksibel sesuai dengan kebutuhan bisnis Anda.
        </p>

        <h2>Hubungi Kami</h2>
        <p>
          Tertarik membuat website untuk bisnis Anda? Hubungi kami sekarang
          untuk konsultasi gratis.
        </p>

        <div className="cta-wrapper">
          <a
            href="https://wa.me/6281325254768"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Konsultasi Sekarang
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}