"use client";

import type React from "react";
import styles from "./ExamplePage.module.css";
import Link from "next/link";

interface ExamplePageProps {
  children: React.ReactNode; // El componente del ejemplo de calendario
  conclusions: {
    detailedDescription: string;
    pros: string[];
    cons: string[];
  };
}

const ExamplePage: React.FC<ExamplePageProps> = ({ children, conclusions }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Header con botón de volver */}
        <div className={styles.header}>
          <Link className={styles.backButton} href={"/"}>
            <span className={styles.backIcon}>←</span>
            Volver
          </Link>
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
