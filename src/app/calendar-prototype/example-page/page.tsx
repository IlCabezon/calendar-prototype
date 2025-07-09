"use client";

import type React from "react";
import ExamplePage from "@/components/ExamplePage";
import { DifficultyEnum } from "@/enums/difficulty.enum";
import { StatusEnum } from "@/enums/status.enum";

const BasicCalendarExample: React.FC = () => {
  // Conclusiones estáticas definidas por ti
  const conclusions = {
    keyPoints: [
      "Implementación simple y directa usando CSS Grid para el layout del calendario",
      "Uso de JavaScript nativo para cálculos de fechas sin dependencias externas",
      "Componente completamente controlado con estado mínimo",
      "Fácil de entender y mantener para desarrolladores junior",
    ],
    detailedDescription:
      "Esta implementación representa el enfoque más básico para crear un calendario en React. Utiliza CSS Grid para crear la estructura visual del calendario y JavaScript nativo para todos los cálculos de fechas. El componente es completamente funcional pero carece de características avanzadas como navegación entre meses, eventos o interactividad compleja. Es ideal como punto de partida para entender los conceptos fundamentales antes de migrar a soluciones más robustas.",
    pros: [
      "Sin dependencias externas - reduce el tamaño del bundle",
      "Código simple y fácil de entender",
      "Control total sobre el comportamiento y estilos",
      "Rápido de implementar para casos de uso básicos",
      "Excelente rendimiento al no tener overhead de librerías",
    ],
    cons: [
      "Funcionalidad limitada - solo muestra el mes actual",
      "No incluye manejo de eventos o citas",
      "Falta navegación entre meses/años",
      "Requiere desarrollo manual para características avanzadas",
      "No es accesible por defecto - necesita trabajo adicional",
      "Manejo manual de zonas horarias y localizaciones",
    ],
  };

  return (
    <ExamplePage
      title="Calendario Básico"
      description="Implementación simple de un calendario usando componentes React nativos y CSS Grid"
      difficulty={DifficultyEnum.Easy}
      status={StatusEnum.Completed}
      conclusions={conclusions}
    >
      <div>
        <h1>Simulacion de un calendario básico con React y CSS Grid</h1>
      </div>
    </ExamplePage>
  );
};

export default BasicCalendarExample;
