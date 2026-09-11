'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const images = [
  '/design/tgc1.webp',
  '/design/tgc2.webp',
  '/design/tgc6.webp',
  '/design/tgc7.webp',
  '/design/tgc3.webp',
  '/design/tgc4.webp',
  '/design/tgc5.webp',
  '/design/tgc8.webp',
  '/design/tgc9.webp',
  '/design/c1.webp',
  '/design/n1.webp',
  '/design/n2.webp',
  '/design/n3.webp',
  '/design/w2.webp',
  '/design/psba.webp',
  '/design/w1.webp',
  '/design/13.webp',
  '/design/2.webp',
  '/design/3.webp',
  '/design/4.webp',
  '/design/6.webp',
  '/design/7.webp',
  '/design/9.webp',
  '/design/10.webp',
  '/design/11.webp',
  '/design/12_1.webp',
  '/design/8.webp',
  '/design/c2.webp',
  '/design/a1.webp',
  '/design/14.webp',
  '/design/m7.webp',
  '/design/a2.webp',
  '/design/15.webp',
  '/design/1.webp',
  '/design/ca1.webp',
  '/design/c1.webp',
  '/design/d4.webp',
  '/design/b1.webp',
  '/design/16.webp',
  '/design/e1.webp',
  '/design/f1.webp',
  '/design/17.webp',
  '/design/i1.webp',
  '/design/i2.webp',
  '/design/i3.webp',
  '/design/j1.webp',
  '/design/j2.webp',
  '/design/j3.webp',
  '/design/j4.webp',
];

export default function MasonryGallery() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen px-4 py-0 md:px-0">
      <div className="grid grid-cols-2 gap-2 transition-all md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelectedImage(src)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-150 ease-out"
          >
            <motion.img
              src={src}
              alt={`Gallery ${index}`}
              className={`w-full rounded-2xl object-cover p-2 transition-all duration-150 ease-out ${
                hovered === null
                  ? 'blur-0 scale-100'
                  : hovered === index
                    ? 'blur-0 scale-105'
                    : 'scale-95 opacity-80 blur-[2px]'
              }`}
            />
          </motion.div>
        ))}
      </div>

      {mounted &&
        typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm md:p-8"
                onClick={() => setSelectedImage(null)}
              >
                <div className="relative flex max-h-full w-full max-w-5xl items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-12 z-[60] rounded-lg bg-black/100 p-2 text-white/70 transition-all duration-300 hover:bg-black/70 hover:text-white md:-top-16"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 md:h-6 md:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <motion.img
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    src={selectedImage}
                    alt="Preview"
                    className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl md:rounded-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}

// 'use client';

// import { AnimatePresence, motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { createPortal } from 'react-dom';

// const images = [
//   '/design/tgc1.webp',
//   '/design/tgc2.webp',
//   '/design/tgc3.webp',
//   '/design/tgc4.webp',
//   '/design/tgc5.webp',
//   '/design/tgc6.webp',
//   '/design/tgc7.webp',
//   '/design/tgc8.webp',
//   '/design/tgc9.webp',
//   '/design/c1.webp',
//   '/design/n1.webp',
//   '/design/n2.webp',
//   '/design/n3.webp',
//   '/design/w2.webp',
//   '/design/psba.webp',
//   '/design/w1.webp',
//   '/design/13.webp',
//   '/design/2.webp',
//   '/design/3.webp',
//   '/design/4.webp',
//   '/design/6.webp',
//   '/design/7.webp',
//   '/design/9.webp',
//   '/design/10.webp',
//   '/design/11.webp',
//   '/design/12_1.webp',
//   '/design/8.webp',
//   '/design/c2.webp',
//   '/design/a1.webp',
//   '/design/14.webp',
//   '/design/m7.webp',
//   '/design/a2.webp',
//   '/design/15.webp',
//   '/design/1.webp',
//   '/design/ca1.webp',
//   '/design/c1.webp',
//   '/design/d4.webp',
//   '/design/b1.webp',
//   '/design/16.webp',
//   '/design/e1.webp',
//   '/design/f1.webp',
//   '/design/17.webp',
//   '/design/i1.webp',
//   '/design/i2.webp',
//   '/design/i3.webp',
//   '/design/j1.webp',
//   '/design/j2.webp',
//   '/design/j3.webp',
//   '/design/j4.webp',
// ];

// export default function MasonryGallery() {
//   const [hovered, setHovered] = useState<number | null>(null);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <div className="relative min-h-screen px-4 md:px-0">

//       {/* MASONRY GRID */}
//       <div
//         className="
//           grid
//           grid-cols-2
//           gap-4
//           md:grid-cols-3
//           lg:grid-cols-4
//           auto-rows-[10px]
//         "
//       >
//         {images.map((src, index) => (
//           <MasonryItem
//             key={index}
//             src={src}
//             index={index}
//             hovered={hovered}
//             setHovered={setHovered}
//             setSelectedImage={setSelectedImage}
//           />
//         ))}
//       </div>

//       {/* LIGHTBOX */}
//       {mounted &&
//         typeof document !== 'undefined' &&
//         createPortal(
//           <AnimatePresence>
//             {selectedImage && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm md:p-8"
//                 onClick={() => setSelectedImage(null)}
//               >
//                 <div className="relative flex max-h-full w-full max-w-5xl items-center justify-center">

//                   <button
//                     onClick={() => setSelectedImage(null)}
//                     className="absolute -top-12 z-[60] rounded-lg bg-black p-2 text-white/70 transition-all hover:bg-black/70 hover:text-white md:-top-16"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 md:h-6 md:w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </button>

//                   <motion.img
//                     initial={{ scale: 0.85, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     exit={{ scale: 0.85, opacity: 0 }}
//                     transition={{ duration: 0.35, ease: 'easeOut' }}
//                     src={selectedImage}
//                     alt="Preview"
//                     className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl md:rounded-2xl"
//                     onClick={(e) => e.stopPropagation()}
//                   />

//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>,
//           document.body,
//         )}
//     </div>
//   );
// }

// /* -------------------------------- */
// /* MASONRY ITEM */
// /* -------------------------------- */

// function MasonryItem({
//   src,
//   index,
//   hovered,
//   setHovered,
//   setSelectedImage,
// }: {
//   src: string;
//   index: number;
//   hovered: number | null;
//   setHovered: (value: number | null) => void;
//   setSelectedImage: (value: string) => void;
// }) {
//   const [rowSpan, setRowSpan] = useState(1);

//   const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
//     const img = e.currentTarget;

//     const grid = img.closest('.grid');

//     if (!grid) return;

//     const gridWidth = grid.clientWidth;

//     const columns =
//       window.innerWidth >= 1024
//         ? 4
//         : window.innerWidth >= 768
//           ? 3
//           : 2;

//     const gap = 16;

//     const columnWidth =
//       (gridWidth - gap * (columns - 1)) / columns;

//     const imageHeight =
//       (img.naturalHeight / img.naturalWidth) * columnWidth;

//     const span = Math.ceil((imageHeight + gap) / (10 + gap));

//     setRowSpan(Math.max(1, span));
//   };

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         scale: 0.9,
//         filter: 'blur(5px)',
//       }}
//       whileInView={{
//         opacity: 1,
//         scale: 1,
//         filter: 'blur(0px)',
//       }}
//       transition={{
//         duration: 0.5,
//         ease: 'easeOut',
//       }}
//       viewport={{
//         once: true,
//         margin: '0px 0px -50px 0px',
//       }}
//       onMouseEnter={() => setHovered(index)}
//       onMouseLeave={() => setHovered(null)}
//       onClick={() => setSelectedImage(src)}
//       style={{
//         gridRowEnd: `span ${rowSpan}`,
//       }}
//       className="
//         group
//         relative
//         cursor-pointer
//         overflow-hidden
//         rounded-2xl
//       "
//     >
//       <motion.img
//         src={src}
//         alt={`Gallery ${index}`}
//         onLoad={handleLoad}
//         className={`
//           block
//           h-auto
//           w-full
//           rounded-2xl
//           object-contain
//           transition-all
//           duration-150
//           ease-out

//           ${
//             hovered === null
//               ? 'scale-100'
//               : hovered === index
//                 ? 'scale-105'
//                 : 'scale-95 opacity-80 blur-[2px]'
//           }
//         `}
//       />
//     </motion.div>
//   );
// }
