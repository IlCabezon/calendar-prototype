"use client";

import type React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { StatusEnum } from "@/enums/status.enum";
import { DifficultyEnum } from "@/enums/difficulty.enum";

interface CalendarExample {
  title: string;
  description: string;
  href: string;
  icon: string;
  status: StatusEnum;
  difficulty: DifficultyEnum;
}

const routes_prefix = "/calendar-prototype";

const Routes = {
  ReactBigCalendar: `${routes_prefix}/react-big-calendar`,
  FullCalendar: `${routes_prefix}/fullcalendar`,
  CustomCalendar: `${routes_prefix}/custom-calendar`,
  MinaScheduler: `${routes_prefix}/mina-scheduler`,
  ExamplePage: `${routes_prefix}/example-page`,
};

const calendarExamples: CalendarExample[] = [
  {
    title: "React Big Calendar",
    description: "Usando la librería react-big-calendar",
    href: Routes.ReactBigCalendar,
    icon: "📖",
    status: StatusEnum.Pending,
    difficulty: DifficultyEnum.Medium,
  },
  {
    title: "FullCalendar.js",
    description: "Integración con FullCalendar para funcionalidades avanzadas",
    href: Routes.FullCalendar,
    icon: "⚡",
    status: StatusEnum.Pending,
    difficulty: DifficultyEnum.Medium,
  },
  {
    title: "Mina Scheduler Library",
    description:
      "Implementación de calendario personalizable y flexible para React que permite gestionar y mostrar eventos en vistas de día, semana o mes.",
    href: Routes.MinaScheduler,
    icon: "💻",
    status: StatusEnum.Pending,
    difficulty: DifficultyEnum.Hard,
  },
  {
    title: "Calendario Personalizado",
    description: "Implementación manual desde cero",
    href: Routes.CustomCalendar,
    icon: "💻",
    status: StatusEnum.Pending,
    difficulty: DifficultyEnum.Hard,
  },
  {
    title: "Example Page",
    description:
      "Pagina de ejemplo para mostrar una implementación de calendario",
    href: Routes.ExamplePage,
    icon: "🔧",
    status: StatusEnum.Pending,
    difficulty: DifficultyEnum.Hard,
  },
];

const getStatusText = (status: string): string => {
  switch (status) {
    case "completed":
      return "Completado";
    case "in-progress":
      return "En Progreso";
    default:
      return "Pendiente";
  }
};

const JIRA_LINK = "https://bxpress.atlassian.net/browse/EJFULL-2019";

const HomePage: React.FC = () => {
  const pendingCount = calendarExamples.filter(
    (ex) => ex.status === StatusEnum.Pending
  ).length;
  const inProgressCount = calendarExamples.filter(
    (ex) => ex.status === StatusEnum.InProgress
  ).length;
  const completedCount = calendarExamples.filter(
    (ex) => ex.status === StatusEnum.Completed
  ).length;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <span className={styles.headerIcon}>📅</span>
            <h1 className={styles.title}>Prototipo de Calendario</h1>
          </div>
          <p className={styles.subtitle}>
            Implementacion y herramientas para visualizar calendarios. Cada
            ejemplo demuestra distintos enfoques y funcionalidades. Este
            Prototipo responde a la tarea
            <span>
              <a href={JIRA_LINK} className={styles.jiraLink}>
                {" "}
                EJFULL-2019
              </a>
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <div className={styles.statIndicator}>
                <div
                  className={`${styles.statusDot} ${styles.statusPending}`}
                ></div>
                <span className={styles.statLabel}>Pendientes</span>
                <span className={styles.statBadge}>{pendingCount}</span>
              </div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <div className={styles.statIndicator}>
                <div
                  className={`${styles.statusDot} ${styles.statusInProgress}`}
                ></div>
                <span className={styles.statLabel}>En Progreso</span>
                <span className={styles.statBadge}>{inProgressCount}</span>
              </div>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statContent}>
              <div className={styles.statIndicator}>
                <div
                  className={`${styles.statusDot} ${styles.statusCompleted}`}
                ></div>
                <span className={styles.statLabel}>Completados</span>
                <span className={styles.statBadge}>{completedCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Examples Grid */}
        <div className={styles.examplesGrid}>
          {calendarExamples.map((example, index) => (
            <div key={index} className={styles.exampleCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardTitleSection}>
                  <div className={styles.iconContainer}>
                    <span className={styles.cardIcon}>{example.icon}</span>
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>{example.title}</h3>
                  </div>
                </div>
                <span
                  className={`${styles.difficultyBadge} ${
                    styles[`difficulty${example.difficulty}`]
                  }`}
                >
                  {example.difficulty}
                </span>
              </div>
              <p className={styles.cardDescription}>{example.description}</p>
              <div className={styles.cardFooter}>
                <span
                  className={`${styles.statusBadge} ${
                    styles[
                      `status${
                        example.status.charAt(0).toUpperCase() +
                        example.status.slice(1).replace("-", "")
                      }`
                    ]
                  }`}
                >
                  {getStatusText(example.status)}
                </span>

                <Link className={styles.viewButton} href={example.href}>
                  Ver Ejemplo
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>ElAgu-blue</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
