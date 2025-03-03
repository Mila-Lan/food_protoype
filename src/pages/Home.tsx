import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainVegetableShape from '../components/shapes/MainVegetableShape';
import { OnionShape, BroccoliShape, CarrotShape, LettuceShape, PepperShape } from '../components/shapes/SmallShapes';

function Home() {
  return (
    <div>
      <nav className="nav">
        <button className="nav-button">Lorem</button>
        <button className="nav-button">Lorem</button>
        <button className="nav-button">Waste less Eat more</button>
        <button className="nav-button">Lorem</button>
        <button className="nav-button">Lorem</button>
      </nav>

      <section className="main-section">
        <div className="content">
          <h1 className="title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/statistics" className="cta-button">
            Lorem <ArrowRight size={20} />
          </Link>
        </div>

        <div className="vegetable-display">
          <img 
            src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80"
            alt="Fresh vegetables in organic shape"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '120px 80px 140px 90px'
            }}
          />
        </div>
      </section>

      <div className="small-shapes">
        <div>
          <div className="small-shape">
            <img 
              src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?auto=format&fit=crop&w=200&q=80"
              alt="Red onion"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '60% 40% 50% 45%'
              }}
            />
          </div>
          <p className="small-shape-text">Lorem ipsum dolor sit amet</p>
        </div>
        {/* Repeat for other vegetables with similar structure */}
        <div>
          <div className="small-shape">
            <img 
              src="https://images.unsplash.com/photo-1583663848850-46af132dc08e?auto=format&fit=crop&w=200&q=80"
              alt="Broccoli"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '55% 45% 50% 40%'
              }}
            />
          </div>
          <p className="small-shape-text">Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <div className="small-shape">
            <img 
              src="https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=200&q=80"
              alt="Carrot"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '40% 60% 45% 55%'
              }}
            />
          </div>
          <p className="small-shape-text">Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <div className="small-shape">
            <img 
              src="https://images.unsplash.com/photo-1622205313162-be1d5712a43c?auto=format&fit=crop&w=200&q=80"
              alt="Lettuce"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '45% 55% 40% 60%'
              }}
            />
          </div>
          <p className="small-shape-text">Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <div className="small-shape">
            <img 
              src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=200&q=80"
              alt="Yellow bell pepper"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50% 45% 55% 40%'
              }}
            />
          </div>
          <p className="small-shape-text">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
}

export default Home;