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

    <h1>Pentingnya Website untuk UMKM di Era Digital</h1>

    <p>
      Banyak UMKM masih bergantung pada media sosial untuk berjualan. Namun, website memberikan banyak keunggulan 
      yang tidak bisa didapatkan dari platform lain.
    </p>

    <h2>Keuntungan Memiliki Website</h2>

    <ul>
      <li>Brand terlihat lebih profesional</li>
      <li>Kontrol penuh terhadap bisnis</li>
      <li>Tidak bergantung pada algoritma sosial media</li>
      <li>Lebih mudah ditemukan di Google</li>
    </ul>

    <h2>Website sebagai Investasi</h2>

    <p>
      Website bukan sekadar biaya, melainkan investasi jangka panjang yang dapat meningkatkan penjualan dan kepercayaan pelanggan.
    </p>

    <h2>Mulai dari Sekarang</h2>

    <p>
      Tidak perlu menunggu bisnis besar untuk memiliki website. Mulailah dari sekarang dan kembangkan bisnis Anda secara digital.
    </p>

    <a 
      href="https://wa.me/6281325254768" 
      className="btn"
      target="_blank"
    >
      Mulai Sekarang
    </a>

  </div>
</section>
      </main>

      <Footer />
    </>
  );
}