import { useState } from "react";


const Popup = () => {
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleZoomChange = (e) => {
        const zoom = parseFloat(e.target.value);
        setZoomLevel(zoom);

        // Execute zoom function in the active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: (zoom) => {
                    const video = document.querySelector('video');
                    if (video) {
                        video.style.transform = `scale(${zoom})`;
                        video.style.transformOrigin = 'center center';
                    }
                },
                args: [zoom],
            });
        });
    };

    return (
        <div className="p-4 bg-black w-[400px] h-[250px] flex items-center flex-col text-white">
            <h1 className=" text-lg font-bold mb-1"><img src="./logo.png" alt="Logo" className="inline-block w-10 h-10" />You<span className="text-red-600">Tube</span> Zoom</h1>

            <p className="text-center font-bold pl-4 pr-4">Enhance Your Viewing Experience with Effortless Zoom and Pan Controls on YouTube</p>


            <input
                className="w-2/3 mt-8 pl-4 pr-4 rounded-lg h-2 appearance-none cursor-pointer transition-all"
                type="range"
                min="0.5"
                max="3"
                step="0.1"
                value={zoomLevel}
                onChange={handleZoomChange}
            />
            <p>Zoom Level: {zoomLevel.toFixed(1)}</p>

            <h3 className=" text-left font-bold ml-5 mt-10">Control + Scroll to <span className="text-red-400">Zoom</span></h3>
            <h3 className="text-left font-bold ml-5">Control + Click and drag to <span className="text-red-400">Move</span></h3>
        </div>
    );
};

export default Popup;