import React, { useState } from 'react';

/**
 * App Component - Versi Teroptimasi & Proper
 * Memenuhi syarat: Vite, Tailwind CSS, Responsive UI, State Management, & Conditional Rendering.
 */
const App = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi loading interaktif
    setTimeout(() => {
      setIsLoading(false);
      alert(isLoginView ? `Login Berhasil: ${email}` : `Registrasi Berhasil: ${name}`);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-indigo-50 flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Card Wrapper Utama */}
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row min-h-[620px]">
        
        {/* ================= SISI KIRI: BRANDING & VISUAL (DESKTOP ONLY) ================= */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-600 p-12 flex-col justify-between text-white relative overflow-hidden">
          {/* Ornamen Estetik di Background */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40"></div>
          
          <div className="relative z-10">
            {/* Logo App */}
            <div className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-wider">SecureAuth</span>
            </div>
            
            <h2 className="text-4xl font-extrabold leading-tight mb-6 tracking-tight">
              {isLoginView ? "Akses Dasbor Manajemen Anda." : "Mari Bergabung Bersama Kami."}
            </h2>
            <p className="text-indigo-100/80 text-base leading-relaxed max-w-sm">
              {isLoginView 
                ? "Kelola semua aset digital, pantau performa jaringan, dan amankan data Anda dalam satu platform terpusat."
                : "Dapatkan akses penuh ke fitur workspace kolaboratif dan mulai kembangkan proyek impian Anda hari ini."}
            </p>
          </div>

          {/* Footer Sisi Kiri */}
          <div className="relative z-10 text-xs text-indigo-200/70 tracking-wide font-medium">
            © 2026 SecureAuth Inc. • React-PDWF-Nim
          </div>
        </div>

        {/* ================= SISI KANAN: AREA FORMULIR (LOGIN / REGISTER) ================= */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2">
              {isLoginView ? "Selamat Datang" : "Registrasi Akun"}
            </h1>
            <p className="text-slate-400 text-sm">
              {isLoginView ? "Silakan masuk dengan akun Anda." : "Buat akun baru untuk memulai akses layanan."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* INPUT NAMA LENGKAP (Hanya tampil di menu Register) */}
            {!isLoginView && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all duration-200 text-sm text-slate-800 placeholder:text-slate-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            {/* INPUT EMAIL */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Alamat Email</label>
              <input
                type="email"
                required
                placeholder="contoh@email.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all duration-200 text-sm text-slate-800 placeholder:text-slate-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* INPUT PASSWORD */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Kata Sandi</label>
                {isLoginView && (
                  <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                    Lupa Sandi?
                  </a>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all duration-200 text-sm text-slate-800 placeholder:text-slate-400 tracking-widest"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Tombol Toggle Mata (SVG Berstandar UI Proper) */}
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* OPSI INGAT SAYA (Hanya tampil di menu Login) */}
            {isLoginView && (
              <div className="flex items-center gap-2 px-0.5 py-1">
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/30 h-4 w-4 transition-all" 
                />
                <label htmlFor="rememberMe" className="text-xs font-semibold text-slate-500 cursor-pointer select-none">
                  Ingat perangkat ini selama 30 hari
                </label>
              </div>
            )}

            {/* BUTTON SUBMIT UTAMA */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-700 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10 disabled:bg-indigo-400 text-sm"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Memproses data...</span>
                </>
              ) : (
                <span>{isLoginView ? "Masuk ke Sistem" : "Selesaikan Pendaftaran"}</span>
              )}
            </button>

            {/* GARIS PEMISAH SOSIAL MEDIA */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-wider">
                <span className="px-3 bg-white text-slate-400 font-bold text-[10px]">Atau menggunakan</span>
              </div>
            </div>

            {/* BUTTON OAUTH (GOOGLE & GITHUB) */}
            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 active:scale-[0.99] transition-all font-semibold text-slate-600 text-xs">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google Logo" />
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 active:scale-[0.99] transition-all font-semibold text-slate-600 text-xs">
                <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-4 h-4 text-slate-800" alt="Github Logo" />
                GitHub
              </button>
            </div>
          </form>

          {/* TOGGLE ANTARA LOGIN DAN REGISTER */}
          <p className="mt-8 text-center text-xs text-slate-400 font-medium tracking-wide">
            {isLoginView ? "Belum memiliki kredensial?" : "Sudah terdaftar sebelumnya?"}{' '}
            <button 
              onClick={() => {
                setIsLoginView(!isLoginView);
                // Reset form state sewaktu pindah halaman
                setEmail('');
                setPassword('');
                setName('');
              }} 
              className="text-indigo-600 font-bold hover:text-indigo-700 hover:underline transition-all"
            >
              {isLoginView ? "Daftar Akun Baru" : "Masuk di Sini"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;