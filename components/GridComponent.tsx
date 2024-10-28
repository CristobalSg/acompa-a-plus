"use client";

import { FaWalking, FaHeartbeat, FaDumbbell } from 'react-icons/fa'; // Importa íconos
import { useState } from 'react';
import "../styles/HomePage.css";


// Define la interfaz para el tipo de acción
interface Action {
  id: number;
  name: string;
  icon: JSX.Element;
  description: string;
  image: string; // Nuevo campo para la imagen
}

// Acciones con imágenes de ejemplo
const actions: Action[] = [
  { id: 1, name: 'Caminar', icon: <FaWalking />, description: 'Ejercicio de caminar para mejorar la movilidad.', image: '../images/walking.jpg' },
  { id: 2, name: 'Ejercicios', icon: <FaHeartbeat />, description: 'Ejercicio para fortalecer el corazón.', image: '/images/cardio.jpg' },
  { id: 3, name: 'Pesas', icon: <FaDumbbell />, description: 'Ejercicio con pesas para fortalecer los músculos.', image: '/images/weights.jpg' },
  // Agrega más acciones con imágenes si es necesario
];

// Componente para la cuadrícula
const ActionGrid = ({ actions, onSelect }: { actions: Action[], onSelect: (action: Action) => void }) => (
  <div className="grid-container">
    {actions.map((action) => (
      <div
        key={action.id}
        className="grid-item"
        onClick={() => onSelect(action)}
        style={{ cursor: 'pointer' }}
      >
        <div>{action.icon}</div> {/* Icono */}
        <div>{action.name}</div> {/* Nombre descriptivo */}
      </div>
    ))}
  </div>
);

// Componente para la vista de detalles
const ActionDetail = ({ action, onBack }: { action: Action, onBack: () => void }) => (
  <div className="action-detail">
    <h2>{action.name}</h2>
    <p>{action.description}</p>
    {/* <img src={action.image} alt={action.name} style={{ width: '100%', height: 'auto', marginTop: '20px' }} /> */}
    <button onClick={onBack} style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}>
      Volver
    </button>
  </div>
);

const GridComponent = () => {
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);

  const handleBack = () => {
    setSelectedAction(null); // Restablece la selección
  };

  return (
    <div className="container">
      {/* Mostrar la cuadrícula o los detalles según la selección */}
      {!selectedAction ? (
        <>
          <h1 style={{ marginTop: '30px' }}>Inicio (Home)</h1>
          <p>Esta es la página de inicio o home de tu aplicación.</p>
          <h1>Subtítulo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore sequi illo eius assumenda molestiae impedit, itaque nostrum ratione ipsam suscipit fugit aspernatur laboriosam quos incidunt qui veniam officiis et!</p>
          <ActionGrid actions={actions} onSelect={setSelectedAction} />
        </>
      ) : (
        <ActionDetail action={selectedAction} onBack={handleBack} />
      )}
    </div>
  );
};

export default GridComponent;
