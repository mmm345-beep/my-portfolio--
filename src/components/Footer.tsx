export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-900/40">
          Innovation at the speed of thought
        </p>
        <div className="flex justify-center gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-black">Privacy</a>
          <a href="#" className="hover:text-black">Terms</a>
          <a href="#" className="hover:text-black">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
