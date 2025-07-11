export default function Section3() {
  return (
    <section className="py-15 bg-base-200">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-4 text-gray-900">À qui s’adresse MUSICPLAY ?</h2>
    <p className="text-gray-600 mb-12">
      Que tu sois petit curieux ou grand passionné, débutant ou confirmé, MUSICPLAY est conçu pour toi 🎵
    </p>

    <div className="grid gap-10 md:grid-cols-2">
      {/* Enfants */}
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <div className="text-4xl mb-3">👶</div>
        <h3 className="text-xl font-semibold mb-2">Enfants</h3>
        <p className="text-gray-600">Des jeux simples et amusants pour découvrir la musique en s’amusant.</p>
      </div>

      {/* Ados */}
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <div className="text-4xl mb-3">🎧</div>
        <h3 className="text-xl font-semibold mb-2">Adolescents</h3>
        <p className="text-gray-600">Développe ton oreille et ta voix avec des défis motivants et modernes.</p>
      </div>

      {/* Adultes */}
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <div className="text-4xl mb-3">🧑‍🎤</div>
        <h3 className="text-xl font-semibold mb-2">Adultes</h3>
        <p className="text-gray-600">(Re)découvre la musique à ton rythme avec des parcours adaptés à tous les niveaux.</p>
      </div>

      {/* Enseignants (optionnel) */}
      <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <div className="text-4xl mb-3">👩‍🏫</div>
        <h3 className="text-xl font-semibold mb-2">Éducateurs</h3>
        <p className="text-gray-600">Une ressource complémentaire pour initier les élèves à la musique de manière ludique.</p>
      </div>
    </div>
  </div>
</section>

  )
}