import Link from "next/link";

export default function header() {
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

        </div>
      </header>
  );
}