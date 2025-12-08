# 🌊 NautaData

> Visualización y procesamiento de modelos de Machine Learning en el navegador utilizando **WebGPU** para aceleración de hardware.

![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-development-orange)
![Tech](https://img.shields.io/badge/stack-Vite_React_WebGPU-purple)

## 📖 Sobre el Proyecto

**NautaData** es una aplicación web de alto rendimiento diseñada para ejecutar inferencia de modelos de Inteligencia Artificial directamente en el cliente (Client-Side). 

A diferencia de las soluciones tradicionales que procesan datos en el servidor, este proyecto utiliza **WebGPU** para acceder a la tarjeta gráfica del usuario, permitiendo cálculos de tensores y visualizaciones en tiempo real con latencia mínima.

### Características Principales
* 🚀 **Zero-Server Inference:** El modelo corre 100% en el navegador.
* ⚡ **WebGPU Accelerated:** Uso de *Compute Shaders* para operaciones matemáticas pesadas.
* 🎨 **UI Moderna:** Interfaz construida con Tailwind CSS v4 y React.
* 🛠 **Arquitectura Modular:** Separación estricta entre lógica de UI (React) y lógica de Renderizado/ML (Core).

## 🛠 Tech Stack

* **Core:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/) + [SWC](https://swc.rs/) (Rust-based compiler)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Gráficos/ML:** WebGPU API + [LiteRT](https://github.com/tensorflow/tfjs) (o ONNX Runtime)
* **Routing:** React Router v6

## 📂 Arquitectura del Proyecto

El proyecto sigue una arquitectura de separación de intereses para mantener el rendimiento alto:

```text
src/
├── core/           # 🧠 Lógica Pura (No-React)
│   ├── webgpu/     # Configuración de adaptadores y pipelines WebGPU
│   └── ml/         # Carga e inferencia del modelo (TFLite/ONNX)
├── components/     # 🧩 Interfaz de Usuario (React)
│   ├── layout/     # Navbar, Wrappers
│   └── viewer/     # Canvas y controladores de vista
├── pages/          # 📄 Vistas principales (Rutas)
└── hooks/          # 🪝 Puentes entre React y el Core (useGPU, useModel)