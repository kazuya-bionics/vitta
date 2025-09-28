"use client";

import { LiaMoneyCheckSolid } from "react-icons/lia";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { LiaChartBarSolid } from "react-icons/lia";

export const Services = () => {
  return (
    <div className="w-full mt-8 flex justify-center items-center">
      <div className="w-[90vw] rounded-[45px] p-8 bg-white shadow-2xl grid grid-cols-1 md:grid-cols-4 overflow-hidden border border-slate-200">
        
        {/* Encabezado */}
        <div className="md:col-span-4 flex flex-col justify-center items-center text-center border-b pb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Conoce en qué somos expertos</h2>
          <p className="text-slate-500 max-w-xl">Te acompañamos con soluciones financieras pensadas para proteger y hacer crecer tu patrimonio.</p>
        </div>

        {/* Cards */}
        <ServiceCard 
          title="Asesorías Financieras"
          icon={<LiaMoneyCheckSolid size={80} />}
          desc="Planificación estratégica para maximizar tu inversión y alcanzar tus metas."
        />
        <ServiceCard 
          title="Gestión Patrimonial"
          icon={<LiaHandHoldingUsdSolid size={80} />}
          desc="Cuidamos tu patrimonio con estrategias personalizadas y seguras."
        />
        <ServiceCard 
          title="Ahorro Inteligente"
          icon={<LiaPiggyBankSolid size={80} />}
          desc="Diseñamos planes de ahorro eficientes adaptados a tus necesidades."
        />
        <ServiceCard 
          title="Análisis Financiero"
          icon={<LiaChartBarSolid size={80} />}
          desc="Tomamos decisiones informadas con base en datos reales y precisos."
        />
      </div>
    </div>
  );
};

/* 🧩 Componente reutilizable para cada servicio */
const ServiceCard = ({ title, icon, desc }) => {
  return (
    <div className="border-r border-b last:border-r-0 last:md:border-b-0 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:bg-orange-50 hover:-translate-y-1 hover:shadow-md">
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
};
