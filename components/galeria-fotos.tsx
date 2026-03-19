"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
  span: string
}

const galleryData: GalleryImage[] = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casa-dedetizacao-1200x675-3FFx0BWGW1RYJroA98qxJywGVKDYr7.jpg",
    alt: "Profissional de dedetização em frente a residência",
    title: "Dedetização Residencial",
    span: "col-span-1"
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caminhao-limpa-fossa%20%282%29-llSgX3WdtnfbOk2COop8Nrv6N6qeWG.jpg",
    alt: "Caminhão limpa-fossa em frente a residência",
    title: "Limpa-Fossa",
    span: "col-span-2"
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desentupidora-1080-2-n2V1u1HxMF99QCJ56ZeyGDF2OLXbgf.png",
    alt: "Profissional desentupindo caixa de esgoto",
    title: "Desentupimento",
    span: "col-span-2"
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cupim%202-oIilGCJTDKkxM95rczsrtpHHFf9qNr.jpg",
    alt: "Cupins em madeira - controle de pragas",
    title: "Controle de Cupins",
    span: "col-span-1"
  },
]

function ImageModal({ src, onClose }: { src: string | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!src || !mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 opacity-100"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Visualização ampliada"
        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-primary transition-colors"
        onClick={onClose}
      >
        &times;
      </button>
    </div>,
    document.body
  )
}

export function GaleriaFotos() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (src: string) => setModalImage(src)
  const closeModal = () => setModalImage(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <section id="galeria-fotos" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Galeria
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              <span className="text-balance">
                Nosso Trabalho
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Confira alguns dos nossos serviços de dedetização, desentupimento e limpa-fossa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4">
            {galleryData.map((img) => (
              <div
                key={img.id}
                className={`group cursor-pointer relative overflow-hidden rounded-lg ${img.span}`}
                onClick={() => openModal(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ImageModal src={modalImage} onClose={closeModal} />
    </>
  )
}
