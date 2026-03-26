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
        <section className="article">
  <div className="container">

    <h1>Jasa Pembuatan Website di Jakarta untuk UMKM dan Bisnis Lokal</h1>

    <p> 
      Agar bisnis Anda semakin dikenal, memiliki website adalah langkah penting untuk menjangkau lebih banyak pelanggan.
    </p>

    <h2>Kenapa Setiap Bisnis Pada Zaman Sekarang Perlu Website?</h2>

    <ul>
      <li>Meningkatkan visibilitas di Google</li>
      <li>Menjangkau pelanggan di luar kota</li>
      <li>Meningkatkan kepercayaan pelanggan</li>
      <li>Memudahkan promosi produk atau jasa</li>
    </ul>

    <h2>Layanan Website untuk Bisnis Lokal</h2>

    <p>
      Kami menyediakan layanan pembuatan website khusus untuk bisnis anda dengan desain modern dan mudah digunakan.
    </p>

    <ul>
      <li>Website restoran & cafe</li>
      <li>Website jasa & profesional</li>
      <li>Website UMKM</li>
      <li>Landing page promosi</li>
    </ul>

    <h2>Solusi Digital untuk Bisnis Anda</h2>

    <p>
      Dengan website, bisnis Anda tidak hanya dikenal secara lokal tetapi juga bisa menjangkau pasar yang lebih luas.
    </p>

    <a 
      href="https://wa.me/6281325254768" 
      className="btn"
      target="_blank"
    >
      Konsultasi Gratis
    </a>

  </div>
</section>
      </main>

      <Footer />
    </>
  );
}