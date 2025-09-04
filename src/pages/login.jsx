import React, { useState } from 'react'
import { HandPlatter, Eye, EyeOff } from 'lucide-react'

import '..//index.css';
const login = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='bg min-h-screen w-screen  p-4 sm:p-6 md:p-8 grid place-items-center'>
      <div className='w-full h-3/4 max-w-5xl bg-white/40  backdrop-blur rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2'>
        <div className='relative hidden md:block bg-slate-950/90 backdrop-blur  text-white p-8 lg:p-10'>
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.25),transparent_40%)]'></div>
          <div className='relative z-10 h-full grid content-between'>
            <div className='flex items-center gap-3'>
              <div className='p-2 rounded-xl bg-white/10 ring-1  ring-white/20'>
                <HandPlatter className='h-6 w-6 text-emerald-400' />
              </div>
              <span className='text-2xl font-semibold tracking-wide'>PredictFood</span>
            </div>

            <div className='space-y-4'>
              <h2 className='text-3xl lg:text-4xl font-extrabold leading-tight'>
                Mangez plus malin avec <span className='text-emerald-400'>P</span>redict<span className='text-[#F28D35]'>F</span>ood
              </h2>
              <p className='text-white/80 leading-relaxed'>
                Connectez-vous pour découvrir des prévisions, recommandations et suivis
                personnalisés. Optimisez vos courses et vos repas au quotidien.
              </p>
            </div>

            <div className='text-sm text-white/70'>
              © {new Date().getFullYear()} PredictFood. Tous droits réservés.
            </div>
          </div>
        </div>

        <div className='p-6 sm:p-8 lg:p-10 grid content-center'>
          <div className='mb-10 text-center md:text-left'>
            <div className='md:hidden mx-auto mb-4 flex justify-center'>
              <div className='p-2 rounded-xl bg-slate-900 text-white inline-flex items-center gap-2'>
                <HandPlatter className='h-5 w-5 text-emerald-400' />
                <span className='font-semibold'>PredictFood</span>
              </div>
            </div>
            <h1 className='text-2xl sm:text-3xl  font-bold text-slate-900'>Bienvenue</h1>
            <p className='mt-2 text-slate-600'>
              Connectez-vous pour continuer
            </p>
          </div>

          <form className='grid grid-cols-1 gap-5'>
            <div className='grid gap-2'>
              <label htmlFor='email' className='text-sm mx-3 font-medium text-slate-700'>
                Adresse e-mail
              </label>
              <input
                id='email'
                type='email'
                placeholder='vous@exemple.com'
                className='w-full rounded-lg bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition'
              />
            </div>

            <div className='grid gap-2'>
              <div className='flex items-center justify-between mx-3'>
                <label htmlFor='password' className='text-sm  font-medium text-slate-700'>
                  Mot de passe
                </label>
                <a href='#' className='text-sm text-emerald-800 hover:text-emerald-800 hover:underline'>
                  Mot de passe oublié ?
                </a>
              </div>
              <div className='relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='••••••••'
                  className='w-full rounded-lg bg-white px-4 py-3 pr-12 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400 transition'
                />
                <button
                  type='button'
                  aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword(v => !v)}
                  className='absolute inset-y-0 right-0 px-3 flex items-center text-slate-500 hover:text-slate-700 focus:outline-none'
                >
                  {showPassword ? <EyeOff className='h-5 w-5' /> : <Eye className='h-5 w-5' />}
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between mx-3'>
              <label className='inline-flex items-center gap-2'>
                <input type='checkbox' className='h-4 w-4  text-emerald-600 focus:ring-emerald-500' />
                <span className='text-sm text-slate-700'>Se souvenir de moi</span>
              </label>
              <span className='text-xs text-slate-600'>
                Besoin d’un compte ? <a href='#' className='text-emerald-800 hover:underline'>Inscription</a>
              </span>
            </div>

            <button
              type='submit'
              className='mt-10 inline-flex items-center justify-center rounded-md bg-[#055902] px-4 py-3 text-white font-semibold shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200 transition'
            >
              Se connecter
            </button>
          </form>

          {/* Boutons sociaux supprimés */}
        </div>
      </div>
    </div>
  )
}

export default login
