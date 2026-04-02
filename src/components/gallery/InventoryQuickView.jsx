export default function InventoryQuickView({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-800 border border-gray-700 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="relative h-80 bg-black">
          <img src={item.photo_url} alt="full" className="w-full h-full object-contain" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full backdrop-blur-md transition-all"
          >
            ✕
          </button>
        </div>
        <div className="p-8 text-left">
          <span className="text-blue-500 text-xs font-black uppercase tracking-widest">Quick View</span>
          <h2 className="text-3xl font-black text-white uppercase mt-2">{item.inventory_name}</h2>
          <div className="h-1 w-12 bg-blue-600 my-4"></div>
          <p className="text-gray-400 leading-relaxed text-lg">
            {item.description || "Опис відсутній для цього товару."}
          </p>
          <button 
            onClick={onClose}
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Зрозуміло
          </button>
        </div>
      </div>
    </div>
  );
}