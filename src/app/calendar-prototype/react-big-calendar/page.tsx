"use client";

import React from "react";
import ExamplePage from "@/components/ExamplePage";

const ReactBigCalendar = () => {
  const conclusions = {
    detailedDescription:
      "React Big Calendar es una librería de calendario para React que permite crear calendarios interactivos y personalizables. Es fácil de usar y se integra bien con aplicaciones React. Pagina de npm: https://www.npmjs.com/package/react-big-calendar",
    pros: [
      "Permite varias opciones de Localization y date formates: date-fns, moment.js, globalize y day.js",
      "Altamente personalizable. Admite componentes custom",
      "Fluidez y agenda para visualizar todos los eventos de la vista selecionada",
      "Disponibiliza gran cantidad de eventos y callbacks para personalizar la funcionalidad",
      "Permite mostrar rangos de horas a mostrar - Esto es util para el rango horario de trabajo",
    ],
    cons: [
      "Requiere conocimiento de algun localizer como date-fns o moment.js",
      "Require conocimiento del preprocesador de CSS SASS",
    ],
  };

  return (
    <ExamplePage conclusions={conclusions}>
      <ReactBigCalendarComponent />
    </ExamplePage>
  );
};

export default ReactBigCalendar;

import { Calendar, dateFnsLocalizer, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import dayjs from "dayjs";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

/* const localizer = dayjsLocalizer(dayjs); */

/* const events: Array<{ start: Date; end: Date; title: string }> = [
  {
    start: new Date(2023, 9, 1, 10, 0), // 1 de octubre de 2023 a las 10:00
    end: new Date(2023, 9, 1, 12, 0), // 1 de octubre de 2023 a las 12:00
    title: "Evento de ejemplo",
  },
]; */

// events con dayjs
const events: Array<{ start: Date; end: Date; title: string; data?: unknown }> =
  [
    {
      start: dayjs("2025-07-10T15:00").toDate(), // 1 de octubre de 2023 a las 10:00
      end: dayjs("2025-07-10T15:30").toDate(), // 1 de octubre de 2023 a las 12:00
      title: "Evento de ejemplo",
      data: {
        // admite pasar data adicional . Esto puede ser util para renderizar y trabajar con la información de la resrva
        x: 10,
        y: 20,
      },
    },
    {
      start: dayjs("2025-07-11T10:00").toDate(), // 1 de octubre de 2023 a las 10:00
      end: dayjs("2025-07-11T12:00").toDate(), // 1 de octubre de 2023 a las 12:00
      title: "Otro evento de ejemplo",
    },
    {
      start: dayjs("2025-07-12T09:00").toDate(), // 1 de octubre de 2023 a las 10:00
      end: dayjs("2025-07-12T11:00").toDate(), // 1 de octubre de 2023 a las 12:00
      title: "Evento adicional",
    },
    // ejemplo superpuesto
    {
      start: dayjs("2025-07-10T15:00").toDate(), // 1 de octubre de 2023 a las 10:00
      end: dayjs("2025-07-10T15:30").toDate(), // 1 de octubre de 2023 a las 12:00
      title: "Evento de ejemplo superpuesto",
    },
    {
      start: dayjs("2025-07-10T15:00").toDate(), // 1 de octubre de 2023 a las 10:00
      end: dayjs("2025-07-10T15:30").toDate(), // 1 de octubre de 2023 a las 12:00
      title: "Otro evento de ejemplo superpuesto",
    },
  ];

const ReactBigCalendarComponent: React.FC = () => {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        // se pueden modificar las vistas disponibles
        // views={["month"]}
        views={["month", "week", "day", "agenda"]}
        //date={new Date(2025, 6, 10)} // para setear la fecha inicial del calendario

        // permite cambiar el rango horario del día
        min={dayjs("2025-07-10T08:00").toDate()} // hora minima a mostrar
        max={
          dayjs("2025-07-10T18:00").toDate() // hora maxima a mostrar
        }
        // permite cambiar el formato de las fechas a mostrar
        formats={{
          dayHeaderFormat: (date) => {
            console.log(date);
            return dayjs(date).format("dddd"); // Formato del encabezado del día
          },
          monthHeaderFormat: (date) => {
            return dayjs(date).format("MMMM YYYY"); // Formato del encabezado del mes
          },
        }}
        components={{
          event: CustomEvent,
        }}
      />
    </div>
  );
};

const CustomEvent = ({ event }: { event: any }) => {
  return (
    <span>
      <strong>{event.title}</strong>
      <br />
      {dayjs(event.start).format("DD/MM/YYYY HH:mm")} -{" "}
      {dayjs(event.end).format("DD/MM/YYYY HH:mm")}
    </span>
  );
};
