import Button from "@/components/Button"
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="card bg-base-200 place-items-center w-96 shadow-sm">
            <div className="card-body">
                <form className="max-w-sm w-full">
                    <div className="mb-5 w-full">
                        <input type="name" className="input input-bordered w-full" placeholder="Nom et Prénom" />
                    </div>
                    <div className="mb-5 w-full">
                        <input type="username" className="input input-bordered w-full" placeholder="Nom d'utilisateur" />
                    </div>
                    <div className="mb-5 w-full">
                        <input type="profession" className="input input-bordered w-full" placeholder="Profession" />
                    </div>
                    <div className="mb-5 w-full">
                        <input type="email" className="input input-bordered w-full" placeholder="Email" />
                    </div>
                    <div className="mb-5 w-full">
                        <input type="password" className="input input-bordered w-full" placeholder="Password" />
                    </div>
                    <div className="mt-5 w-full">
                        <Button>Inscription</Button>
                    </div>
                </form>
                <p className="mt-5 text-center text-sm/6 text-gray-500">
                    <span className="mr-2">
                        Déjà Inscrit?
                    </span> 
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Connectez-vous</a>
                </p>
            </div>
        </div>
    </div>

  )
}