"use client";

import type React from "react";
import styles from "./ExamplePage.module.css";
import Link from "next/link";
import { DifficultyEnum } from "@/enums/difficulty.enum";
import { StatusEnum } from "@/enums/status.enum";

interface ExamplePageProps {
  title: string;
  description: string;
  difficulty: DifficultyEnum;
  status: StatusEnum;
  children: React.ReactNode; // El componente del ejemplo de calendario
  conclusions: {
    keyPoints: string[];
    detailedDescription: string;
    pros: string[];
    cons: string[];
  };
}

const ExamplePage: React.FC<ExamplePageProps> = ({
  title,
  description,
  difficulty,
  status,
  children,
  conclusions,
}) => {
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

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header con botón de volver */}
        <div className={styles.header}>
          <Link className={styles.backButton} href={"/"}>
            <span className={styles.backIcon}>←</span>
            Volver
          </Link>

          <div className={styles.titleSection}>
            <div className={styles.titleRow}>
              <h1 className={styles.title}>{title}</h1>
              <div className={styles.badges}>
                <span
                  className={`${styles.difficultyBadge} ${
                    styles[`difficulty${difficulty}`]
                  }`}
                >
                  {difficulty}
                </span>
                <span
                  className={`${styles.statusBadge} ${
                    styles[
                      `status${
                        status.charAt(0).toUpperCase() +
                        status.slice(1).replace("-", "")
                      }`
                    ]
                  }`}
                >
                  {getStatusText(status)}
                </span>
              </div>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>

        {/* Sección de implementación */}
        <div className={styles.implementationSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🚀</span>
            Implementación
          </h2>
          <div className={styles.implementationContainer}>{children}</div>
        </div>

        {/* Sección de análisis detallado */}
        <div className={styles.analysisSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>📋</span>
            Descripción Detallada
          </h2>
          <div className={styles.descriptionCard}>
            <p className={styles.detailedDescription}>
              {conclusions.detailedDescription}
            </p>
          </div>
        </div>

        {/* Sección de conclusiones */}
        <div className={styles.conclusionsSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>📊</span>
            Análisis y Conclusiones
          </h2>

          <div className={styles.conclusionsGrid}>
            {/* Conclusiones Clave */}
            <div className={styles.conclusionCard}>
              <h3 className={styles.conclusionTitle}>
                <span className={styles.conclusionIcon}>💡</span>
                Conclusiones Clave
              </h3>
              <div className={styles.conclusionsList}>
                {conclusions.keyPoints.map((point, index) => (
                  <div key={index} className={styles.conclusionItem}>
                    <span className={styles.bulletPoint}>•</span>
                    <span className={styles.conclusionText}>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Puntos a Favor */}
            <div className={styles.conclusionCard}>
              <h3 className={styles.conclusionTitle}>
                <span className={styles.conclusionIcon}>✅</span>
                Puntos a Favor
              </h3>
              <div className={styles.conclusionsList}>
                {conclusions.pros.map((pro, index) => (
                  <div
                    key={index}
                    className={`${styles.conclusionItem} ${styles.proItem}`}
                  >
                    <span className={styles.bulletPoint}>+</span>
                    <span className={styles.conclusionText}>{pro}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Puntos en Contra */}
            <div className={styles.conclusionCard}>
              <h3 className={styles.conclusionTitle}>
                <span className={styles.conclusionIcon}>❌</span>
                Puntos en Contra
              </h3>
              <div className={styles.conclusionsList}>
                {conclusions.cons.map((con, index) => (
                  <div
                    key={index}
                    className={`${styles.conclusionItem} ${styles.conItem}`}
                  >
                    <span className={styles.bulletPoint}>-</span>
                    <span className={styles.conclusionText}>{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
