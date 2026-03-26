import Link from "next/link";

export default function Navbar() {
  return (
        <header>
        <div className="container nav">
          <div className="logo">
            
          <Link href="/">
            <img src="/images/logotaro.png" alt="Taro Digital Studio" />
          </Link>

            <div>
              <h2>Taro Digital Studio</h2>
              <h5>Software & Web Development</h5>
            </div>
          </div>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">Tentang Kami</a>
            <a href="#services">Layanan</a>
            <a href="#testimoni">Testimoni</a>
            <Link href="/kontak">
               Kontak
            </Link>

          </nav>
        </div>
      </header>
  );
}