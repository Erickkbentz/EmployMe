import React, { useRef } from 'react';

function UploadResume() {
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div className="p-4">
            <button
                className="bg-yellow-700 hover:bg-yellow-500 text-white py-2 px-4 rounded text-sm"
                onClick={handleButtonClick}
            >
                Upload Resume
            </button>
            <input type="file" ref={fileInputRef} className="hidden" accept='.pdf'/>
        </div>
    );
}

export default UploadResume; 