export default function Footer() {
  return (
    <footer className="bg-transparent text-slate-400 py-6 text-center backdrop-blur-sm">
      <p className="text-sm">
        © {new Date().getFullYear()} Nguyen Tan Phat.
        {" "}Built with React & Tailwind CSS.
      </p>
    </footer>
  );
}
