import React, { useState } from "react";
import { HandPlatter, Eye, EyeOff } from "lucide-react";
import Logo from "../assets/logo.png";
import "..//index.css";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg min-h-screen w-screen  p-4 sm:p-6 md:p-8 grid place-items-center">
      <div className="w-full max-w-5xl bg-white/40  backdrop-blur rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="relative hidden md:block bg-slate-950/90 backdrop-blur  text-white p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.25),transparent_40%)]"></div>
          <div className="relative z-10 h-full grid content-between">
            <div className="flex items-center ">
              <img
                src={Logo}
                alt=""
                className="h-10 border-none bg-transparent"
              />
              <span className="text-2xl font-semibold tracking-wide">
                PredictFood
              </span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
                Cuisinez plus malin avec{" "}
                <span className="text-emerald-400">P</span>redict
                <span className="text-[#F28D35]">F</span>ood !
              </h2>
              <p className="text-white/80 leading-relaxed">
                Connectez-vous pour découvrir des prévisions, recommandations et
                suivis personnalisés.
              </p>
            </div>

            <div className="text-sm text-white/70">
              © {new Date().getFullYear()} PredictFood. Tous droits réservés.
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 grid content-center">
          <div className="mb-10 text-center md:text-left">
            <div className="md:hidden mx-auto mb-4 flex justify-center">
              <div className="p-2 rounded-xl bg-slate-900 text-white inline-flex items-center gap-2">
                <HandPlatter className="h-5 w-5 text-emerald-400" />
                <span className="font-semibold">PredictFood</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl  font-bold text-slate-900">Inscription</h1>
            <p className="mt-2 text-slate-600">Créez votre compte restaurant</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm mx-3 font-medium text-slate-700">Nom du restaurant</label>
              <input id="name" type="text" defaultValue="Brasserie du Port" placeholder="Brasserie du Port" className="w-full rounded-lg bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="siret" className="text-sm mx-3 font-medium text-slate-700">SIRET</label>
              <input id="siret" type="text" defaultValue="12345678901234" placeholder="12345678901234" className="w-full rounded-lg bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="restaurant_type" className="text-sm mx-3 font-medium text-slate-700">Type de restaurant</label>
              <select id="restaurant_type" defaultValue="brasserie" className="w-full rounded-lg bg-white px-4 py-3 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition">
                <option value="brasserie">Brasserie</option>
                <option value="restaurant">Restaurant</option>
                <option value="fast-food">Fast-food</option>
                <option value="pizzeria">Pizzeria</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm mx-3 font-medium text-slate-700">Téléphone</label>
              <input id="phone" 
                     type="tel" 
                     defaultValue="0556789012" 
                     placeholder="0556789012" 
                     className="w-full rounded-lg bg-white px-4 py-3 
                     text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="address" className="text-sm mx-3 font-medium text-slate-700">Adresse</label>
              <input id="address" type="text" defaultValue="123 Rue du Port, 33120 Arcachon" placeholder="123 Rue du Port, 33120 Arcachon" className="w-full rounded-lg bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="capacity" className="text-sm mx-3 font-medium text-slate-700">Capacité</label>
              <input id="capacity" type="number" min="1" defaultValue="80" placeholder="80" className="w-full rounded-lg bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition" />
            </div>

            <div className="md:col-span-2 pt-2 border-t border-slate-200"></div>

            <div className="grid gap-2">
              <label htmlFor="owner_name" className="text-sm mx-3 font-medium text-slate-700">Nom du propriétaire</label>
              <input id="owner_name" type="text" defaultValue="Marie Dupont" placeholder="Marie Dupont" className="w-full rounded-lg bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="owner_email" className="text-sm mx-3 font-medium text-slate-700">E-mail du propriétaire</label>
              <input id="owner_email" type="email" defaultValue="marie@brasserie-port.fr" placeholder="marie@brasserie-port.fr" className="w-full rounded-lg bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition" />
            </div>

            <div className="md:col-span-2 grid gap-2">
              <div className="flex items-center justify-between mx-3">
                <label htmlFor="owner_password" className="text-sm font-medium text-slate-700">Mot de pass</label>
              </div>
              <div className="relative">
                <input id="owner_password" type={showPassword ? "text" : "password"} defaultValue="motdepasse123" placeholder="••••••••" className="w-full rounded-lg bg-white px-4 py-3 pr-12 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition" />
                <button type="button" aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"} aria-pressed={showPassword} onClick={() => setShowPassword((v) => !v)} className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-500 hover:text-slate-700 focus:outline-none">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <span className="text-xs m-3 text-end text-slate-600">
                Déjà un compte ?{" "}
                <a href="/login" className="text-[#134d11] hover:underline">
                  Se Connecter
                </a>
              </span>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-[#055902] px-4 py-3 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 transition">
                Créer le compte
              </button>
            </div>
          </form>

          {/* Boutons sociaux supprimés */}
        </div>
      </div>
    </div>
  );
};

export default Register;
