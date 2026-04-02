export default function ConfirmModal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">підтвердження</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 text-gray-600">скасувати</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded">видалити</button>
        </div>
      </div>
    </div>
  );
}