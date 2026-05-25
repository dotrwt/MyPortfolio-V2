import React from 'react';
import GalleryCard from '../../components/GalleryCard';
import './gallery.css';

const galleryItems = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475609/IMG_0761_yrqqx8.jpg'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779477363/IMG_0603_2_kl72bc.jpg'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475604/IMG_9644_bzsupp.jpg'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476610/IMG_0943_mlplua.jpg'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476596/IMG_0903_yfmby3.jpg'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779526523/IMG_0254_le0wym.jpg'
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779475618/IMG_9403_qka83x.jpg'
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779526530/IMG_0975_e2arux.jpg'
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476601/IMG_9821_pzhzfn.jpg'
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476612/IMG_9482_tckasd.jpg'
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779527174/IMG_0656_chvp57.jpg'
  },
  {
    id: 12,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779527168/IMG_3143_tnjk02.jpg'
  },
  {
    id: 13,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779527169/IMG_3669_vxsinw.jpg'
  },
  {
    id: 14,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476602/IMG_1853_gt1paj.jpg'
  },
  {
    id: 15,
    image: 'https://res.cloudinary.com/dph28qrrx/image/upload/f_auto,q_auto/v1779476599/IMG-20260414-WA0182_lurk9s.jpg'
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
              className={isLandscapeRow ? 'landscape' : 'portrait'}
            />
          );
        })}
      </div>
    </section>
  );
};

export default GalleryGrid;


