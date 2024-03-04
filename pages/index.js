import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/login">Ir para a Login Page</Link>
    </div>
  );
}

export default HomePage;