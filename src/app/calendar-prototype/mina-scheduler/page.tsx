"use client";

import React from "react";
import ExamplePage from "@/components/ExamplePage";

const MinaSchedulerPage: React.FC = () => {
  const conclusions = {
    detailedDescription:
      "Mina Scheduler es una librería de calendario para React que permite crear calendarios personalizables y flexibles. Ofrece vistas de día, semana y mes, y permite gestionar eventos de manera sencilla. Aunque es compatible con Next.js 14, presenta algunos problemas de instalación y vulnerabilidades en sus dependencias.",
    pros: [
      "Compatible con las version 14.~ de Next.js",
      "Utiliza tailwindcss para estilos",
      "Utilidades funcionales como actualizar, eliminar y agregar eventos",
      "Customizable",
      "Documentación completa y fácil de seguir en relacion al uso de la librería. https://github.com/Mina-Massoud/mina-scheduler",
    ],
    cons: [
      "Paquete NPM marcado como deprecado, última publicación hace 8 meses",
      "Nuevas versiones de Next UI generan conflictos con la versión de Mina Scheduler",
      "Una de las dependencias es marcada como de alta vulnerabilidad",
      "Utiliza muchas librerías de terceros, zod, framer-motion, react-icons, uuid, radix-ui, framer-motion, date-fns, react-day-picker, etc",
      "Dificil de instalar y hacer funcionar. La documentación difiere entre github a su página oficial. Al final ninguna de las dos explica correctamente como instalarlo",
      "Bug en la vista de semana, el evento cuando pasa de un día a otro no se muestra",
    ],
  };

  return (
    <ExamplePage conclusions={conclusions}>
      <MinaSchedulerComponent />
    </ExamplePage>
  );
};

export default MinaSchedulerPage;

import SchedulerWrapper from "@/components/schedule/_components/view/schedular-view-filteration";
import { SchedulerProvider } from "@/providers/schedular-provider";
import { Event } from "@/types";

const events = [
  {
    id: "1d4c5c73-b5fa-4f67-bb6e-1d5d66cbd57d",
    title: "Solicitud N°1666 - Rechazada",
    description: "Solicitud de reserva Rechazada",
    startDate: new Date(), // today's date
    endDate: new Date(new Date().getTime() + 60 * 60 * 1000), // one hour later
    variant: "danger",
  },
  {
    id: "2d4c5c73-b5fa-4f67-bb6e-1d5d66cbd57e",
    title: "Solicitud N°1667 - Aprobada",
    description: "Solicitud de reserva Aprobada",
    startDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // tomorrow
    endDate: new Date(new Date().getTime() + 25 * 60 * 60 * 1000), // one hour later
    variant: "success",
  },
  {
    id: "3d4c5c73-b5fa-4f67-bb6e-1d5d66cbd57f",
    title: "Solicitud N°1668 - Pendiente",
    description: "Solicitud de reserva Pendiente",
    startDate: new Date(new Date().getTime() + 48 * 60 * 60 * 1000), // two days later
    endDate: new Date(new Date().getTime() + 49 * 60 * 60 * 1000), // one hour later
    variant: "warning",
  },
  {
    id: "4d4c5c73-b5fa-4f67-bb6e-1d5d66cbd580",
    title: "Solicitud N°1669 - En Proceso",
    description: "Solicitud de reserva En Proceso",
    startDate: new Date(new Date().getTime() + 72 * 60 * 60 * 1000), // three days later
    endDate: new Date(new Date().getTime() + 73 * 60 * 60 * 1000), // one hour later
    variant: "default",
  },
  // superposición de eventos
  {
    id: "5d4c5c73-b5fa-4f67-bb6e-1d5d66cbd581",
    title: "Solicitud N°1670 - Superposición",
    description: "Solicitud de reserva con superposición",
    startDate: new Date(new Date().getTime() + 72 * 60 * 60 * 1000), // three days later
    endDate: new Date(new Date().getTime() + 73 * 60 * 60 * 1000), // one hour later
    variant: "info",
  },
] as Event[];

const MinaSchedulerComponent = () => {
  const alertEvent = (event: Event) => {
    alert(`Event: ${JSON.stringify(event, null, 2)}\n`);
  };

  const onEventDelete = (event: string) => {
    alert(`Event deleted: ${event}`);
  };

  return (
    <SchedulerProvider
      initialState={events}
      weekStartsOn="monday"
      onAddEvent={alertEvent}
      onUpdateEvent={alertEvent}
      onDeleteEvent={onEventDelete}
    >
      <SchedulerWrapper
        stopDayEventSummary={true}
        classNames={{
          buttons: {
            addEvent: "bg-red-500",
            next: "bg-blue-500",
            prev: "bg-green-500",
          },
        }}
        views={{ views: ["day", "month", "week"], mobileViews: ["day"] }}
        CustomComponents={{
          CustomEventModal: {
            CustomAddEventModal: {
              title: "Custom Add Event",
              CustomForm: MyCustomForm,
            },
          },
        }}
      />
    </SchedulerProvider>
  );
};

import { useScheduler } from "@/providers/schedular-provider";

const MyCustomForm: React.FC<{ register: any; errors: any }> = ({
  register,
  errors,
}) => {
  const { events, dispatch, getters, handlers } = useScheduler();

  console.log(events);

  return (
    <>
      <input
        {...register("title")}
        placeholder="Custom Event Name"
        className={`input ${errors.title ? "input-error" : ""}`}
      />
      {errors.title && (
        <span className="error-message">{errors.title.message}</span>
      )}

      <textarea
        {...register("description")}
        placeholder="Custom Description"
        className="textarea"
      />

      <input
        {...register("startDate")}
        type="date"
        className={`input ${errors.startDate ? "input-error" : ""}`}
      />

      <input
        {...register("endDate")}
        type="date"
        className={`input ${errors.endDate ? "input-error" : ""}`}
      />

      <button type="submit" className="btn">
        Submit
      </button>
    </>
  );
};
