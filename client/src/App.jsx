import React, { useState } from 'react';

/**
 * App Component - Versi "Premium" Login & Register
 * Fitur: Toggle antara Login dan Register tanpa reload halaman.
 */
const App = () => {
  // State untuk menentukan halaman mana yang aktif (login atau register)
  const [isLoginView, setIsLoginView] = useState(true);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      alert(isLoginView ? `Berhasil Login: ${email}` : `Berhasil Daftar Akun: ${name}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Container Utama */}
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Sisi Kiri: Branding Visual */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-600 p-12 flex-col justify-between text-white relative">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-indigo-600 rounded-lg"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight">NexusCloud</span>
            </div>
            
            <h2 className="text-4xl font-bold leading-tight mb-6">
              {isLoginView ? "Kelola Proyek Anda Dengan Lebih Cerdas." : "Mulai Perjalanan Anda Bersama Kami."}
            </h2>
            <p className="text-indigo-100 text-lg max-w-sm">
              {isLoginView 
                ? "Platform terintegrasi untuk kolaborasi tim dan manajemen data yang aman."
                : "Bergabunglah dengan ribuan profesional lainnya untuk meningkatkan produktivitas."}
            </p>
          </div>

          <div className="relative z-10 text-sm text-indigo-200">
            © 2026 NexusCloud Inc. • React-PDWF-Nim
          </div>
        </div>

        {/* Sisi Kanan: Formulir */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              {isLoginView ? "Selamat Datang" : "Buat Akun Baru"}
            </h1>
            <p className="text-slate-500 text-sm">
              {isLoginView ? "Silakan masuk untuk melanjutkan." : "Lengkapi data di bawah untuk mendaftar."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Nama (Hanya muncul saat Register) */}
            {!isLoginView && (
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
              <input
                type="email"
                required
                placeholder="nama@email.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between px-1">
                <label className="text-sm font-semibold text-slate-700">Kata Sandi</label>
                {isLoginView && <a href="#" className="text-xs font-bold text-indigo-600 hover:underline">Lupa Password?</a>}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg disabled:bg-indigo-400"
            >
              {isLoading ? "Memproses..." : (isLoginView ? "Masuk Sekarang" : "Daftar Sekarang")}
            </button>
          </form>

          {/* Toggle View */}
          <p className="mt-8 text-center text-sm text-slate-500">
            {isLoginView ? "Belum punya akun?" : "Sudah punya akun?"}{' '}
            <button 
              onClick={() => setIsLoginView(!isLoginView)} 
              className="text-indigo-600 font-bold hover:underline"
            >
              {isLoginView ? "Daftar Sekarang" : "Masuk di Sini"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;