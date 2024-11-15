import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Estilos básicos de Swiper

import { Autoplay } from 'swiper/modules';  // Solo importar Autoplay

const Customers = () => {
    const customers = [
        { id: 1, name: 'Coca Cola', logo: '/assets/customers/Coca-Cola_logo.svg' },
        { id: 2, name: 'Customer 2', logo: '/assets/customer2.png' },
        { id: 3, name: 'Customer 3', logo: '/assets/customer3.png' },
        { id: 4, name: 'Customer 4', logo: '/assets/customer4.png' },
        { id: 5, name: 'Customer 5', logo: '/assets/customer5.png' },
        // Agrega más clientes según lo necesites
    ];

    return (
        <section className="my-20">
            <div className="flex items-center justify-center mb-20">
                <p className="head-text text-3xl font-semibold">Ellos confían en nosotros</p> {/* Agrega margen abajo */}
            </div>
            <div>
                <Swiper
                    modules={[Autoplay]}  // Solo usar Autoplay
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 0,  // No hay retraso entre las transiciones
                        disableOnInteraction: false,  // No se detiene al interactuar
                    }}
                    speed={2000}  // Velocidad de las transiciones
                    className="customer-slider"
                >
                    {customers.map((customer) => (
                        <SwiperSlide key={customer.id} className="flex justify-center items-center">
                            <img src={customer.logo} alt={customer.name} className="w-40 h-auto object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Customers;
