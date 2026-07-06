import React from 'react';
import GalleryCard from '../../components/GalleryCard';
import './gallery.css';

const galleryItems = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475609/IMG_0761_yrqqx8.jpg',
    alt: 'Monochrome architectural details under dramatic lighting'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779477363/IMG_0603_2_kl72bc.jpg',
    alt: 'Moody streetscape photography with light reflections'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475604/IMG_9644_bzsupp.jpg',
    alt: 'Minimalist interior design aesthetics and potted plants'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476610/IMG_0943_mlplua.jpg',
    alt: 'Geometric shadows cast on modern urban concrete walls'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476596/IMG_0903_yfmby3.jpg',
    alt: 'Abstract composition of light leaks and glass textures'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779526523/IMG_0254_le0wym.jpg',
    alt: 'Sunset colors reflecting on glass windows of a high-rise building'
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475618/IMG_9403_qka83x.jpg',
    alt: 'Vintage analog film photography aesthetic with soft grain'
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779526530/IMG_0975_e2arux.jpg',
    alt: 'Cinematic perspective of a lonely highway path'
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476601/IMG_9821_pzhzfn.jpg',
    alt: 'Close up view of modern designer desktop workspace setup'
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476612/IMG_9482_tckasd.jpg',
    alt: 'Symmetrical design patterns in modern structural architecture'
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779527174/IMG_0656_chvp57.jpg',
    alt: 'Moody portrait shot with natural shadow gradients on face'
  },
  {
    id: 12,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1780169471/IMG_9724_ccfa1d.jpg',
    alt: 'Urban architecture lines intersecting clear blue sky'
  },
  {
    id: 13,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779527169/IMG_3669_vxsinw.jpg',
    alt: 'Detail macro shot of organic natural patterns and leaves'
  },
  {
    id: 14,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476602/IMG_1853_gt1paj.jpg',
    alt: 'Atmospheric evening street light reflecting on wet pavements'
  },
  {
    id: 15,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476599/IMG-20260414-WA0182_lurk9s.jpg',
    alt: 'Abstract shadow art of branch silhouettes on textured wall'
  }
];

const GalleryGrid = () => {
  return (
    <section className="gallery-grid-section">
      <div className="gallery-main-grid">
        {galleryItems.map((item, index) => {
          const isLandscapeRow = index % 5 === 3 || index % 5 === 4;
          return (
            <GalleryCard
              key={item.id}
              image={item.image}
              alt={item.alt}
              className={isLandscapeRow ? 'landscape' : 'portrait'}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GalleryGrid;


