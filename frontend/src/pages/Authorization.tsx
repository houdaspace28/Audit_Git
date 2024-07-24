import { Link } from "react-router-dom"
import z from 'zod';
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";



const schema = z.object({
    email: z.string({required_error:"Email est requis"}).email({message: "L'email doit être valide"}),
    password: z.string({required_error:"Mot de passe est requis"}).min(8, {message: "Le mot de passe doit contenir au moins 8 caractères"}),  
});

type User = z.infer<typeof schema>;
const onSubmit = (data: User) =>{
    console.log(data);
}

const Authorization = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<User>({resolver: zodResolver(schema)});
  return (
        <div className="h-screen flex justify-center items-center bg-black">
        <div>
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-black  bg-white px-10 py-5 flex flex-col gap-5">
            <div>
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="email" id="email" className="border-2 border-black bg-white mt-2 p-2 " placeholder="Votre email" {...register("email")}/>
            </div>
            <div>
                <label htmlFor="password">Mot de passe:</label>
                <br/>
                <input type="password" id="password" className="border-2 border-black bg-white mt-2 p-2" placeholder="Votre mot de passe" {...register("password")}/>
            </div>
            <Link to='/home' className="bg-[#3399ff] text-white  w-fit self-center">
            <button type="submit" >
                Connexion
            </button>
            </Link>

        </form>
        </div>
        </div>

  )
}

export default Authorization