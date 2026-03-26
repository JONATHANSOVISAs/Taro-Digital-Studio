import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">

          <h1>Portofolio</h1>
          <p>Beberapa proyek website yang telah kami kerjakan</p>

          {/* CARD PROJECT 1 */}
          <div className="project-card">

            <div className="project-image">
              <img src="/images/parkirdw.png" alt="ParkirDW Website"/>
            </div>

            <div className="project-content">
              <h2>Website Sistem Parkir Kampus (ParkirDW)</h2>

              <p>
                Sistem ini dikembangkan untuk memenuhi project akhir skripsi
                kami di kampus. Sistem ini diperuntukkan untuk mahasiswa agar
                dapat mencari lahan parkir yang tersedia di area parkiran
              </p>

              <a href="https://parkirdw.netlify.app/#/" className="project-button">
                Lihat Website
              </a>
            </div>

          </div>


          {/* CARD PROJECT 2 */}
          <div className="project-card">

            <div className="project-image">
              <img src="/images/golden.png" alt="Individual Portofolio Website"/>
            </div>

            <div className="project-content">
              <h2>Golden Dragon - Booking Resto dan Order Menu</h2>

              <p>
                Website ini merupakan platform digital untuk restoran yang memungkinkan pelanggan melakukan reservasi meja 
                serta memesan menu secara online dengan mudah. Dengan tampilan yang modern dan user-friendly, 
                website ini membantu meningkatkan efisiensi layanan sekaligus memberikan pengalaman yang lebih praktis bagi pelanggan
              </p>

              <a href="https://meilindadeny-max.github.io/promosi-restoran/" className="project-button">
                Lihat Website
              </a>
            </div>

          </div>


           {/* CARD PROJECT 3 */}
          <div className="project-card">

            <div className="project-image">
              <img src="/images/wedding.png" alt="Individual Portofolio Website"/>
            </div>

            <div className="project-content">
              <h2>Kartu Undangan Pernikahan - Andreas & Felicia</h2>

              <p>
                Website ini merupakan undangan pernikahan digital untuk Andreas & Felicia yang dirancang dengan tampilan elegan dan modern. 
                Memuat informasi acara, galeri foto, serta detail penting lainnya, sehingga memudahkan tamu untuk mengakses undangan kapan saja dan di mana saja
              </p>

              <a href="https://meilindadeny-max.github.io/undangan-pernikahan/" className="project-button">
                Lihat Website
              </a>
            </div>

          </div>


          {/* CARD PROJECT 4 */}
          <div className="project-card">

            <div className="project-image">
              <img src="/images/fitzy.png" alt="Individual Portofolio Website"/>
            </div>

            <div className="project-content">
              <h2>Fitzy - Gym Personalization Website Boothcamp Project</h2>

              <p>
                Website ini merupakan hasil project kelompok boothcamp DBS x Dicoding dengan tema gym Personalization
                bagi client gym yang baru pertama kali mengikuti gym untuk diberikan rekomendasi latihan yang terbaik bagi mereka
                sesuai tinggi dan berat badan mereka
              </p>

              <a href="https://fitzyapps.netlify.app/" className="project-button">
                Lihat Website
              </a>
            </div>

          </div>


          {/* CARD PROJECT 5 */}
          <div className="project-card">

            <div className="project-image">
              <img src="/images/freshwash.png" alt="FreshWash Laundry Website"/>
            </div>

            <div className="project-content">
              <h2>Website FreshWash Laundry</h2>

              <p>
                FreshWash Laundry Landing Page adalah website sederhana yang 
                dirancang untuk membantu bisnis laundry dalam meningkatkan kehadiran 
                digital dan mempermudah pelanggan melakukan pemesanan
              </p>

              <a href="https://jonathansovisa.github.io/FreshWashLaundry/" className="project-button">
                Lihat Website
              </a>
            </div>

          </div>


         {/* CARD PROJECT 6 */}
          <div className="project-card">

            <div className="project-image">
              <img src="/images/crocly.png" alt="Crocly Website"/>
            </div>

            <div className="project-content">
              <h2>Website UMKM Crocly.ID</h2>

              <p>
                Crocly.id adalah usaha kreatif yang dijalankan oleh mahasiswa dengan semangat kuliner. 
                Dengan adanya website ini, membantu client untuk memasarkan produk mereka secara digital
                sebagai portofolio website mereka
              </p>

              <a href="https://jonathansovisas.github.io/crocly-id/" className="project-button">
                Lihat Website
              </a>
            </div>

          </div>


           {/* CARD PROJECT 7 */}
          <div className="project-card">

            <div className="project-image">
              <img src="/images/joportfolio.png" alt="Individual Portofolio Website"/>
            </div>

            <div className="project-content">
              <h2>Personal Website</h2>

              <p>
               Website personal sederhana yang dikembangkan untuk menampilkan profil,
               pengalaman, dan portofolio secara online. Website ini dirancang dengan
               tampilan yang clean dan responsif sehingga mudah diakses melalui
               berbagai perangkat
              </p>

              <a href="https://jonathansovisas.github.io/JoPortofolioWebs/" className="project-button">
                Lihat Website
              </a>
            </div>

          </div>

        </div>

      </main>
      <Footer />
    </>
  );
}