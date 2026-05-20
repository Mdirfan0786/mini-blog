import Navbar from "../components/common/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="p-6">{children}</main>
    </>
  );
}

export default MainLayout;
