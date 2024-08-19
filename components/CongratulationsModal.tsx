import React from 'react';

interface CongratulationsModalProps {
  onClose: () => void;
}

const CongratulationsModal: React.FC<CongratulationsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Congratulations!</h2>
        <p className="text-center mb-6">You have completed all 29 questions!</p>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsModal;
