import Image from "next/image"
export default function Section1() {
  return (
    <section className="py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Pourquoi choisir <span className="text-primary">MUSICPLAY</span> ?</h2>
            <p className="text-gray-600 mb-12">
            Une plateforme conçue pour apprendre la musique tout en s’amusant. Simple, interactive, et adaptée à tous.
            </p>    
        </div>

        <div className="mt-8 px-11 h-100 flex space-x-12 flex-wrap content-center">
            <div className="card bg-base-100 w-90 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Apprends à ton rythme 🎵</h2>
                    <p>Suis des leçons progressives adaptées à ton niveau, avec des quiz et des exercices</p>
                </div>
                <figure>
                    <Image src={'/heureuse-jeune-femme.jpg'} alt="music" width={500} height={500}></Image>
                </figure>
            </div>

            <div className="card bg-base-100 w-90 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Joue et progress 🎮</h2>
                    <p>Joue à des mini-jeux musicaux, gagne des étoiles, débloque des niveau</p>
                </div>
                <figure>
                    <Image src={'/heureuse-jeune-femme.jpg'} alt="music" width={500} height={500}></Image>
                </figure>
            </div>

            <div className="card bg-base-100 w-90 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Rappels et suivi 🔔</h2>
                    <p>Reçois des rappels doux et visualise tes progrès chaque semaine</p>
                </div>
                <figure>
                    <Image src={'/heureuse-jeune-femme.jpg'} alt="music" width={500} height={500}></Image>
                </figure>
            </div>
        </div>

        
    </section>

  )
}