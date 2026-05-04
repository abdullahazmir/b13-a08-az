"use client";
import "animate.css";

const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
        Why Choose QurbaniHat?
      </h2>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-lg shadow animate__animated animate__fadeInUp">
          <h3 className="font-semibold text-lg mb-2">Trusted Sellers</h3>
          <p>We ensure verified sellers for safe and reliable покупки.</p>
        </div>

        <div className="p-6 border rounded-lg shadow animate__animated animate__fadeInUp animate__delay-1s">
          <h3 className="font-semibold text-lg mb-2">Healthy Animals</h3>
          <p>All animals are well-fed and checked for health conditions.</p>
        </div>

        <div className="p-6 border rounded-lg shadow animate__animated animate__fadeInUp animate__delay-2s">
          <h3 className="font-semibold text-lg mb-2">Easy Booking</h3>
          <p>Simple and fast booking process with instant confirmation.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;