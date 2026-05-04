"use client";
import "animate.css";

const QurbaniTips = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center animate__animated animate__fadeInDown">
        Qurbani Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-5 border rounded-lg shadow animate__animated animate__fadeInUp">
          <h3 className="font-semibold text-lg mb-2">Healthy Animal</h3>
          <p>Select animals that are active, healthy and disease-free.</p>
        </div>

        <div className="p-5 border rounded-lg shadow animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="font-semibold text-lg mb-2">Right Age</h3>
          <p>Ensure the animal meets the Islamic age requirements.</p>
        </div>

        <div className="p-5 border rounded-lg shadow animate__animated animate__fadeInUp animate__delay-2s">
          <h3 className="font-semibold text-lg mb-2">Proper Feeding</h3>
          <p>Animals should be well-fed with natural and safe খাবার.</p>
        </div>
      </div>
    </div>
  );
};

export default QurbaniTips;