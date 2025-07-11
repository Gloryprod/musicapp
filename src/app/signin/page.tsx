import Button from "@/components/Button"
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-200">
        <div className="card bg-base-200 place-items-center w-96 shadow-sm">
            <div className="card-body items-center">
                <form className="max-w-sm w-full">
                    <div className="mb-5 w-full">
                        <input type="email" className="input input-bordered w-full" placeholder="Email" />
                    </div>
                    <div className="mb-5 w-full">
                        <input type="password" className="input input-bordered w-full" placeholder="Password" />
                    </div>
                    <div className="mt-5 w-full">
                        <Button>Connexion</Button>
                    </div>
                </form>
                <p className="mt-5 text-center text-sm/6 text-gray-500">
                    <span className="mr-2">
                        Nouveau sur MusicPlay?
                    </span> 
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Inscrivez-vous</a>
                </p>
            </div>
        </div>
    </div>

  )
}