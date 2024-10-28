// // components/ServiceGrid.tsx
// 'use client'; // Indica que este componente es un Client Component

// import { Card, Row, Col } from 'antd';
// import { useEffect, useState } from 'react';

// import "../styles/HomePage.css"
// // Define la interfaz para el servicio
// interface Service {
//   id: number;       // Asegúrate de que el tipo coincida con el que defines en tu modelo Prisma
//   name: string;     // Asegúrate de que el tipo coincida con el que defines en tu modelo Prisma
// }
  
// const ServiceGrid = () => {
//   const [services, setServices] = useState<Service[]>([]); // Define el estado con la interfaz

//   // useEffect(() => {
//   //   const fetchServices = async () => {
//   //     const response = await fetch('/api/services'); // Llama a la API
//   //     const data: Service[] = await response.json(); // Usa la interfaz aquí
//   //     setServices(data);
//   //   };

//     fetchServices();
//   }, []);

//   return (
//     <Row gutter={[16, 16]}>
//       {services.map((service) => (
//         <Col key={service.id} xs={24} sm={12} md={12}>
//           <Card 
//             hoverable 
//             style={{ 
//               backgroundColor: '#FFB3BA',
//               height: '200px',
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center' 
//             }}
//           >
//             <div style={{ textAlign: 'center' }}>
//               <h3>{service.name}</h3>
//             </div>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default ServiceGrid;
