import '../home.css';
import { FeaturedSection, BestSellersSection } from '../components/ProductSection';
import CategoryCard from '../components/CategoryCard';
import TailoringSection from '../components/TailoringSection';
import Footer from '../components/Footer';
import galleryImg from '../imports/DesktopHome/4bb9c4e9912ce93beab5418d5123a169c010d768.png';

const CATEGORIES = [
  {
    id: 1,
    tagline: 'Dresses',
    title: 'Effortless shapes for day and evening',
    description: 'From silk slips to structured wool. Pure form.',
  },
  {
    id: 2,
    tagline: 'Dresses',
    title: 'Effortless shapes for day and evening',
    description: 'From silk slips to structured wool. Pure form.',
  },
  {
    id: 3,
    tagline: 'Tops',
    title: 'The foundation of every look',
    description: 'Cashmere, cotton, and everything in between.',
  },
  {
    id: 4,
    tagline: 'Accessories',
    title: 'The final word in a considered outfit',
    description: 'Belts, scarves, and the small things that matter.',
  },
];

function CategorySection() {
  return (
    <section className="section-category">
      <div className="section-inner">
        <div className="section-container">
          <div className="section-title">
            <div className="section-tagline">
              <span className="tagline-text">Shop</span>
            </div>
            <div className="section-heading-group">
              <h2 className="section-heading">By category</h2>
              <p className="section-subheading">
                Find exactly what you need. Four doors to a better wardrobe.
              </p>
            </div>
          </div>
          <div className="category-row">
            {CATEGORIES.map((cat) => (
              <CategoryCard
                key={cat.id}
                tagline={cat.tagline}
                title={cat.title}
                description={cat.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FollowSection() {
  return (
    <section className="section-follow">
      <div className="section-inner">
        <div className="section-container">
          <div className="section-title">
            <div className="section-heading-group">
              <h2 className="section-heading">Follow us</h2>
              <p className="section-subheading">
                See how the community wears Elevé. Tag us for a feature.
              </p>
            </div>
          </div>
          <div className="gallery-content">
            <div className="gallery-col">
              <div className="gallery-img-square">
                <img src={galleryImg} alt="" />
              </div>
              <div className="gallery-img-square">
                <img src={galleryImg} alt="" />
              </div>
            </div>
            <div className="gallery-col">
              <div className="gallery-img-wide">
                <img src={galleryImg} alt="" />
              </div>
              <div className="gallery-img-wide">
                <img src={galleryImg} alt="" />
              </div>
              <div className="gallery-img-square">
                <img src={galleryImg} alt="" />
              </div>
            </div>
            <div className="gallery-col">
              <div className="gallery-img-square">
                <img src={galleryImg} alt="" />
              </div>
              <div className="gallery-img-square">
                <img src={galleryImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page-wrapper">
      <FeaturedSection />
      <BestSellersSection />
      <CategorySection />
      <TailoringSection />
      <FollowSection />
      <Footer />
    </div>
  );
}
