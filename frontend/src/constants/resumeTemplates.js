// Define resume templates with enhanced styling
const resumeTemplates = [
  {
    id: 'modern',
    name: 'Modern Professional',
    thumbnail: 'linear-gradient(135deg, #2563eb, #1d4ed8, #1e40af)',
    styles: {
      container: 'font-sans bg-white text-gray-900 shadow-2xl',
      header: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-10 relative overflow-hidden before:absolute before:top-0 before:right-0 before:w-32 before:h-32 before:bg-white before:opacity-10 before:rounded-full before:-translate-y-8 before:translate-x-8',
      section: 'border-l-4 border-blue-600 pl-8 mb-10 relative before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-blue-400 before:to-blue-600 before:-ml-px',
      heading: 'text-2xl font-bold text-blue-800 mb-6 uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-blue-600',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-blue-600 font-semibold',
    }
  },
  {
    id: 'classic',
    name: 'Classic Executive',
    thumbnail: 'linear-gradient(135deg, #4b5563, #374151, #1f2937)',
    styles: {
      container: 'font-serif bg-white text-gray-900 shadow-xl border border-gray-100',
      header: 'border-b-4 border-gray-800 p-8 text-center bg-gradient-to-b from-gray-50 to-white',
      section: 'mb-10 pb-6 border-b-2 border-gray-100 last:border-b-0',
      heading: 'text-xl font-bold text-gray-900 mb-5 uppercase tracking-widest relative inline-block after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-gray-300',
      text: 'text-sm text-gray-800 leading-6',
      accent: 'text-gray-900 font-bold',
    }
  },
  {
    id: 'minimal',
    name: 'Clean Minimal',
    thumbnail: 'linear-gradient(135deg, #f3f4f6, #e5e7eb, #d1d5db)',
    styles: {
      container: 'font-sans bg-white text-gray-800 shadow-lg',
      header: 'p-10 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white',
      section: 'mb-8 pl-4 border-l border-gray-200 hover:border-gray-400 transition-colors duration-300',
      heading: 'text-lg font-light text-gray-800 mb-5 tracking-wide uppercase relative before:absolute before:-left-4 before:top-0 before:bottom-0 before:w-px before:bg-gray-400',
      text: 'text-sm text-gray-600 leading-relaxed',
      accent: 'text-gray-800 font-medium',
    }
  },
  {
    id: 'creative',
    name: 'Creative Teal',
    thumbnail: 'linear-gradient(135deg, #0d9488, #0f766e, #115e59)',
    styles: {
      container: 'font-sans bg-white text-gray-900 shadow-2xl overflow-hidden',
      header: 'bg-gradient-to-br from-teal-500 via-teal-600 to-cyan-600 text-white p-10 relative before:absolute before:top-0 before:right-0 before:w-40 before:h-40 before:bg-white before:opacity-10 before:rounded-full before:-translate-y-20 before:translate-x-20',
      section: 'border-l-4 border-teal-500 pl-8 mb-10 bg-gradient-to-r from-teal-50 to-white p-6 rounded-r-xl shadow-sm relative before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-teal-400 before:to-teal-600 before:-ml-px',
      heading: 'text-xl font-bold text-teal-700 mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-teal-500',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-teal-600 font-semibold',
    }
  },
  {
    id: 'corporate',
    name: 'Corporate Purple',
    thumbnail: 'linear-gradient(135deg, #7e22ce, #6b21a8, #581c87)',
    styles: {
      container: 'font-sans bg-gray-50 text-gray-900 shadow-2xl',
      header: 'bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-800 text-white p-10 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-transparent before:to-black before:opacity-10',
      section: 'bg-white rounded-xl p-8 mb-8 shadow-lg border-t-4 border-purple-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-purple-400 before:to-purple-600 before:-mt-1',
      heading: 'text-xl font-bold text-purple-700 mb-6 flex items-center relative after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-purple-500',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-purple-600 font-semibold',
    }
  },
  {
    id: 'elegant',
    name: 'Elegant Green',
    thumbnail: 'linear-gradient(135deg, #059669, #047857, #065f46)',
    styles: {
      container: 'font-serif bg-white text-gray-900 shadow-xl border border-emerald-100',
      header: 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-10 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-emerald-400 before:to-emerald-500',
      section: 'mb-10 p-6 border-2 border-emerald-200 rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow-sm hover:shadow-md transition-shadow duration-300',
      heading: 'text-xl font-semibold text-emerald-800 mb-6 border-b-2 border-emerald-300 pb-3 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-emerald-600 after:-mb-px',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-emerald-600 font-bold',
    }
  },
  {
    id: 'bold',
    name: 'Bold Orange',
    thumbnail: 'linear-gradient(135deg, #ea580c, #c2410c, #9a3412)',
    styles: {
      container: 'font-sans bg-white text-gray-900 shadow-2xl',
      header: 'bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white p-10 relative overflow-hidden before:absolute before:top-0 before:right-0 before:w-32 before:h-32 before:bg-gradient-to-br before:from-yellow-400 before:to-orange-400 before:opacity-20 before:rounded-full before:-translate-y-16 before:translate-x-16',
      section: 'mb-10 pl-10 border-l-8 border-orange-400 relative before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-gradient-to-b before:from-orange-300 before:to-orange-500 before:-ml-px',
      heading: 'text-2xl font-black text-orange-600 mb-6 uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-orange-500',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-orange-500 font-bold',
    }
  },
  {
    id: 'tech',
    name: 'Tech Indigo',
    thumbnail: 'linear-gradient(135deg, #4f46e5, #4338ca, #3730a3)',
    styles: {
      container: 'font-mono bg-white text-gray-900 shadow-2xl border border-indigo-100',
      header: 'bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white p-10 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-transparent before:to-black before:opacity-10',
      section: 'mb-10 p-6 border-2 border-indigo-300 rounded-lg bg-gradient-to-br from-indigo-50 to-white shadow-sm relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-indigo-400 before:to-purple-400 before:rounded-t-lg',
      heading: 'text-lg font-bold text-indigo-800 mb-6 uppercase tracking-widest relative after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-indigo-600',
      text: 'text-sm text-gray-700 font-mono leading-relaxed',
      accent: 'text-indigo-600 font-bold',
    }
  },
  {
    id: 'luxe',
    name: 'Luxe Gold',
    thumbnail: 'linear-gradient(135deg, #d97706, #b45309, #92400e)',
    styles: {
      container: 'font-serif bg-amber-50 text-gray-900 shadow-2xl border border-amber-200',
      header: 'bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 text-white p-10 relative before:absolute before:top-0 before:right-0 before:w-40 before:h-40 before:bg-gradient-to-br before:from-yellow-300 before:to-amber-300 before:opacity-20 before:rounded-full before:-translate-y-20 before:translate-x-20',
      section: 'mb-10 p-8 bg-white rounded-xl shadow-lg border-t-4 border-amber-400 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-amber-300 before:to-yellow-400 before:-mt-1',
      heading: 'text-xl font-bold text-amber-700 mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-amber-600',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-amber-600 font-semibold',
    }
  },
  {
    id: 'forest',
    name: 'Forest Green',
    thumbnail: 'linear-gradient(135deg, #166534, #14532d, #134e26)',
    styles: {
      container: 'font-sans bg-green-50 text-gray-900 shadow-xl',
      header: 'bg-gradient-to-br from-green-700 via-green-800 to-emerald-800 text-white p-10 relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-2 before:bg-gradient-to-r before:from-green-500 before:to-emerald-500',
      section: 'mb-10 p-6 bg-white rounded-xl border-l-8 border-green-500 shadow-lg relative before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-gradient-to-b before:from-green-400 before:to-green-600 before:-ml-px',
      heading: 'text-xl font-semibold text-green-800 mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-green-600',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-green-600 font-bold',
    }
  },
  {
    id: 'electric',
    name: 'Electric Violet',
    thumbnail: 'linear-gradient(135deg, #7c3aed, #6d28d9, #5b21b6)',
    styles: {
      container: 'font-sans bg-white text-gray-900 shadow-2xl',
      header: 'bg-gradient-to-br from-violet-600 via-violet-700 to-purple-700 text-white p-10 relative overflow-hidden before:absolute before:top-0 before:right-0 before:w-32 before:h-32 before:bg-gradient-to-br before:from-pink-400 before:to-violet-400 before:opacity-20 before:rounded-full before:-translate-y-16 before:translate-x-16',
      section: 'mb-10 p-6 border-2 border-violet-300 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 shadow-sm hover:shadow-md transition-all duration-300',
      heading: 'text-xl font-bold text-violet-700 mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-violet-600',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-violet-600 font-semibold',
    }
  },
  {
    id: 'fresh',
    name: 'Fresh Cyan',
    thumbnail: 'linear-gradient(135deg, #06b6d4, #0891b2, #0e7490)',
    styles: {
      container: 'font-sans bg-white text-gray-900 shadow-2xl overflow-hidden',
      header: 'bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-500 text-white p-10 rounded-t-2xl relative before:absolute before:bottom-0 before:left-0 before:right-0 before:h-2 before:bg-gradient-to-r before:from-cyan-300 before:to-blue-400',
      section: 'mb-10 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200 shadow-sm hover:shadow-md transition-all duration-300',
      heading: 'text-xl font-bold text-cyan-700 mb-6 relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-cyan-400 before:to-cyan-600 after:absolute after:bottom-0 after:left-6 after:w-16 after:h-0.5 after:bg-cyan-500',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-cyan-600 font-semibold',
    }
  },
  {
    id: 'warm',
    name: 'Warm Rose',
    thumbnail: 'linear-gradient(135deg, #e11d48, #be123c, #9f1239)',
    styles: {
      container: 'font-serif bg-rose-50 text-gray-900 shadow-xl',
      header: 'bg-gradient-to-br from-rose-600 via-rose-700 to-pink-700 text-white p-10 relative before:absolute before:top-0 before:right-0 before:w-32 before:h-32 before:bg-gradient-to-br before:from-pink-400 before:to-rose-400 before:opacity-20 before:rounded-full before:-translate-y-16 before:translate-x-16',
      section: 'bg-white p-8 mb-8 rounded-2xl shadow-lg border-2 border-rose-200 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-rose-400 before:to-pink-400 before:rounded-t-2xl',
      heading: 'text-xl font-semibold text-rose-700 mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-16 after:h-0.5 after:bg-rose-500',
      text: 'text-sm text-gray-700 leading-relaxed',
      accent: 'text-rose-600 font-bold',
    }
  }
];

export default resumeTemplates;