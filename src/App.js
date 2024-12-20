import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Carrousel from './components/carousel';
import photo from './photo/photoPresentation.jpg';
import cv from './photo/CV-Lutringer-Kevin.pdf';
import Competences from './components/competences';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      
      <section id="presentation" className="presentation">
        <h2>Présentation</h2>
        <div className="presentation-container">
          <div className="image">
            <img src={photo} alt="Mon portrait" />
          </div>
          <div className="text">
            <p>
              Passionné par la lecture, les jeux vidéo et l'informatique, je suis en pleine reconversion professionnelle dans le développement web.
              Curieux et avide d’apprendre, je me suis plongé dans cet univers avec enthousiasme, motivé par l’envie de créer des solutions innovantes et intuitives.
              Grâce à ma formation de developpeur web chez OpenClassroom, j’ai pu développer une approche créative et structurée des projets, tout en cultivant ma capacité à m’adapter rapidement à mon environnement.
              Que ce soit en équipe ou en solo, j’aime relever de nouveaux défis et approfondir mes connaissances.
              Mon objectif ? Apporter ma créativité et mon savoir-faire technique pour contribuer à des projets captivants, tout en continuant à évoluer dans un domaine en constante évolution.
            </p>
            <a href={cv} download="CV-Lutringer-Kevin" className="download-btn">Mon CV</a>
          </div>
        </div>
      </section>

      <section id="projets" className="projets">
        <h2>Mes projets</h2>
        <Carrousel />
      </section>

      <section id="competences" className='competences'>
        <Competences />
      </section>
      
      <Footer />
    </div>
  );
};

export default App;
