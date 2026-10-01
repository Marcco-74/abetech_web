import React, { useState } from 'react';
import { 
  BuildingStorefrontIcon, 
  CloudArrowUpIcon, 
  WrenchScrewdriverIcon, 
  CodeBracketIcon, 
  ArrowDownTrayIcon,
  CheckCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export default function App() {
  const systems = [
    {
      id: 'dental-cco',
      title: 'Dental CCo - Gestión Odontológica',
      category: 'Salud / Clínicas',
      description: 'Sistema completo para la gestión de citas médicas, historial de pacientes, control de odontólogos y envío de agendas por Correo y WhatsApp.',
      badge: 'Gratis / Open Source',
      features: [
        'Control de Pacientes y Dentistas',
        'Agenda Semanal y Notificaciones vía Resend API',
        'Base de Datos PostgreSQL (Supabase / Render)',
        'Backend Django REST + Frontend React'
      ],
      demoUrl: 'https://dental-one-omega.vercel.app',
      downloadUrl: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* NAVBAR */}
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              AbeTech
            </span>
            <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full font-medium">
              PYME Solutions
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#sistemas" className="hover:text-blue-400 transition">Sistemas Gratuitos</a>
            <a href="#servicios" className="hover:text-blue-400 transition">Servicios y Soporte</a>
            <a href="#nosotros" className="hover:text-blue-400 transition">Nosotros</a>
          </div>
          <a
            href="https://wa.me/51900000000?text=Hola%20AbeTech,%20necesito%20información%20sobre%20sus%20sistemas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition shadow-lg shadow-blue-600/30 flex items-center space-x-2"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Contacto</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 px-4 py-2 rounded-full mb-8 text-sm text-slate-300">
          <BuildingStorefrontIcon className="w-5 h-5 text-teal-400" />
          <span>Transformando Pequeñas y Medianas Empresas</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Software Potente para PYMES, <br />
          <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            100% Gratuito para Empezar
          </span>
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto mb-10">
          Descarga nuestros sistemas de gestión listos para producción. Te regalamos la versión base y te apoyamos con la instalación en la nube y el soporte técnico cuando lo necesites.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#sistemas"
            className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg shadow-teal-500/20 transition flex items-center justify-center space-x-2"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            <span>Explorar Sistemas</span>
          </a>
          <a
            href="#servicios"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-8 py-4 rounded-xl transition"
          >
            Servicios de Soporte
          </a>
        </div>
      </section>

      {/* CATALOGO */}
      <section id="sistemas" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Catálogo de Sistemas para PYMES</h2>
          <p className="text-slate-400">Selecciona el software que necesitas para tu negocio y pruébalo o descárgalo gratis.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((sys) => (
            <div key={sys.id} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                    {sys.category}
                  </span>
                  <span className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-md font-medium">
                    {sys.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{sys.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{sys.description}</p>
                
                <div className="space-y-2 mb-6">
                  {sys.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                      <CheckCircleIcon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/50 flex gap-3">
                <a
                  href={sys.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 text-center py-2.5 rounded-lg text-sm font-semibold transition"
                >
                  Ver Demo
                </a>
                <a
                  href={sys.downloadUrl}
                  className="flex-1 bg-teal-500 hover:bg-teal-400 text-slate-950 text-center py-2.5 rounded-lg text-sm font-bold transition flex items-center justify-center space-x-1"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  <span>Descargar</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Servicios Profesionales AbeTech</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Te entregamos el código gratis, pero si no quieres complicarte con servidores, bases de datos o configuraciones técnicas, nosotros lo hacemos por ti.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition">
              <CloudArrowUpIcon className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Despliegue e Instalación Cloud</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Desplegamos tu sistema en la nube (Vercel, Render, Supabase) configurando dominio propio, correos masivos y base de datos persistente.
              </p>
              <span className="text-teal-400 font-bold text-sm">Pago Único</span>
            </div>

            <div className="bg-gradient-to-b from-blue-900/20 to-slate-900 border border-blue-500/30 rounded-2xl p-8 relative">
              <span className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Recomendado
              </span>
              <WrenchScrewdriverIcon className="w-12 h-12 text-teal-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Soporte Técnico & Mantenimiento</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Plan mensual que incluye copias de seguridad automáticas de tu base de datos, resolución de errores y asistencia técnica prioritaria.
              </p>
              <span className="text-teal-400 font-bold text-sm">Plan Mensual</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition">
              <CodeBracketIcon className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">Desarrollo de Funciones a Medida</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                ¿Necesitas un reporte especial, integración con facturación electrónica o un módulo extra? Personalizamos el software según tu negocio.
              </p>
              <span className="text-teal-400 font-bold text-sm">A Cotizar</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="nosotros" className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-slate-200">AbeTech</span>
            <span>— Soluciones Digitales para PYMES</span>
          </div>
          <span className="text-xl font-bold text-slate-200">
            Contactenos : 
          <span className="text-teal-400 font-bold text-sm">  abetech61@gmail.com</span>
            
          </span>
          <p>© {new Date().getFullYear()} AbeTech. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}