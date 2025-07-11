export default function Section2() {
  return (
    <section className="py-15 bg-base-200">
      <div className="max-w-Z6xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Ce que tu peux apprendre</h2>
        <p className="text-gray-600 mb-12">
          Un parcours musical complet, conçu pour tous les niveaux. Explore, joue, et progresse à ton rythme !
        </p>
        
        <div className="mx-33 carousel flex object-none object-center w-250 space-x-6 rounded-box">
          <div className="carousel-item w-1/2"> 
              <div className="bg-blue-600 bg-opacity-25 p-4 w-full rounded-box shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">🎼</div>
                <h3 className="text-xl text-white font-semibold mb-2">Lecture de notes</h3>
                <p className="text-white">Lis les partitions comme un·e pro grâce à des jeux et des exercices adaptés.</p>
              </div>
          </div>

          <div className="carousel-item w-1/2"> 
              <div className="p-6 bg-purple-600 bg-opacity-25 w-full rounded-box shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">⏱️</div>
                <h3 className="text-xl text-white font-semibold mb-2">Rythme et tempo</h3>
                <p className="text-white">Sens le groove et travaille la régularité avec des animations interactives.</p>
              </div>
          </div>

          <div className="carousel-item w-1/2"> 
            <div className="p-6 bg-pink-600 bg-opacity-25 w-full rounded-box shadow hover:shadow-lg transition">
              <div className="text-4xl mb-3">🎤</div>
              <h3 className="text-xl text-white font-semibold mb-2">Technique vocale</h3>
              <p className="text-white">Échauffe ta voix, explore ta tessiture, et chante juste avec des retours vocaux.</p>
            </div>
          </div>

          <div className="carousel-item w-1/2"> 
              <div className="p-6 bg-indigo-600 bg-opacity-25 rounded-box W-full shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">🎧</div>
                <h3 className="text-xl text-white font-semibold mb-2">Entraînement de l’oreille</h3>
                <p className="text-white">Développe ton oreille musicale avec des jeux d'écoute et de reconnaissance sonore.</p>
              </div>
          </div>   
          
          <div className="carousel-item w-1/2"> 
              <div className="p-6 bg-yellow-600 bg-opacity-25 rounded-box shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">🎹</div>
                <h3 className="text-xl text-white font-semibold mb-2">Initiation aux instruments</h3>
                <p className="text-white">Explore les bases du piano, de la guitare ou des percussions avec des vidéos claires.</p>
              </div>
          </div>  

          <div className="carousel-item w-1/2"> 
              <div className="p-6 bg-green-600 bg-opacity-25 rounded-box shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="text-xl text-white font-semibold mb-2">Jeux musicaux</h3>
                <p className="text-white">Apprends en jouant ! Défis, récompenses et progression ludique.</p>
              </div>
          </div>   
        </div> 
      </div>

      
      
  </section>

  )
}