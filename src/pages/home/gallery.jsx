import React from 'react';
import BorderGlow from '../../components/borderglow/borderglow.jsx';
import { optimizeCloudinaryUrl } from '../../utils/cloudinary';

const galleryData = [
  // Column 1
  [
    {
      id: 1,
      ratio: '4/3',
      image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779475595/KAPI_Konica_260322105443697_ipftpb.jpg'
    },
    {
      id: 2,
      ratio: '1/1',
      image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779475614/Snapchat-863945398_zqrast.jpg'
    },
    {
      id: 3,
      ratio: '1/1',
      image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779476606/Screenshot_2023-09-01_205101_u3wxae.png'
    },
  ],
  // Column 2
  [
    {
      id: 4,
      ratio: '1/1',
      image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779475603/Picsart_26-03-07_20-29-08-063_mt2peo.jpg'
    },
    {
      id: 5,
      ratio: '1/1',
      image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779475602/20230626203800_IMG_1688_xh0kjt.jpg'
    },
    {
      id: 6,
      ratio: '1/1',
      image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779476609/Copy_of_20260307_063759_rcqcga.jpg'
    },
  ],
  // Column 3
  [
    {
      id: 7,
      ratio: '1/1',
      image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779475997/IMG_2401_ialvfh.jpg'
    },
    {
      id: 8,
      ratio: '1/1',
      image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779475601/IMG_20260117_155036664_fext1f.jpg'
    },
    {
      id: 9,
      ratio: '4/3',
      image: 'https://res.cloudinary.com/dph28qrrx/image/upload/v1779476607/20230702181702_IMG_2509_pefbny.jpg'
    },
  ]
];

const GallerySection = () => {
  return (
    <section id="gallery" className="home-section" style={{ minHeight: '100vh', padding: '8rem 0', position: 'relative', zIndex: 1 }}>
      <div className="projects-grid">

        {/* Top Label */}
        <div className="project-header">
          <span className="project-label">.gallery</span>
          <div className="project-line"></div>
        </div>

        {/* Masonry Grid */}
        <div style={{ gridColumn: '2 / 8' }}>
          <div className="gallery-grid-main">
            {galleryData.map((column, colIdx) => (
              <div key={colIdx} className="gallery-col">
                {column.map((item) => (
                  <div
                    key={item.id}
                    className="gallery-item-placeholder"
                    style={{
                      aspectRatio: item.ratio,
                      backgroundImage: `url(${optimizeCloudinaryUrl(item.image) || `https://picsum.photos/seed/${item.id * 15}/600/800`})`
                    }}
                  >
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="gallery-button-wrapper">
            <BorderGlow borderRadius={0} backgroundColor="#000" glowRadius={30} className="btn-glow-wrapper">
              <button className="gallery-btn">
                view gallery ↗
              </button>
            </BorderGlow>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
