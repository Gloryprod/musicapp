/**
 * The Hero component is a simple, responsive hero section that displays a heading,
 * some text, and a button. It is designed to be used as a landing page component.
 *
 * @returns A JSX element representing the Hero component.
 */
import Button from "./Button"
export default function Hero() {
  return (
    <div
        className="hero min-h-screen"
        style={{
            backgroundImage:
            "url('/createur-de-contenu-parental.jpg')",
        }}
        >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
            <h1 className="mb-10 text-7xl font-bold">MUSICPLAY</h1>
            <p className="mb-15">
                Apprends la musique en t’amusant !
                Notes, rythmes, voix… découvre le monde musical avec des jeux, des leçons interactives et des défis motivants. 🎶
            </p>
            <Button size="lg">Commencer</Button>
            </div>
        </div>
    </div>
  )
}