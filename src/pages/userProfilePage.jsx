import React, { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Greeting } from "../components/greeting";
import { User, Mail, Weight, Users, Ruler, ChevronDown, HeartPulse } from "lucide-react";
import { InputField } from "../components/inputField"; 
import { userData } from "../data/userData";  

export function UserProfilePage() {
    const [user, setUser] = useState(userData);

    const handleInputChange = (e, field) => {
        setUser({
            ...user,
            [field]: e.target.value
        });
    };

    // Verificar o valor de user antes de renderizar
    console.log("user:", user);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 mt-8 p-6 transition-all duration-300 md:ml-64">
                <h1 className="text-2xl md:text-3xl text-gray-600 tracking-tighter font-bold">
                    <Greeting />, {user.name}!  <HeartPulse className="inline ml-2 h-7 w-7"/>
                </h1>
                <p className="text-gray-500 text-sm md:text-base mb-2 leading-relaxed">
                    Aqui estão os seus dados de perfil.
                </p>

                <div className="mt-8 space-y-6">
                    <div className="container sm:mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Nome de Usuário"
                                name="username"
                                type="text"
                                placeholder="Nome de Usuário"
                                value={user.username} 
                                Icon={User}
                                onChange={(e) => handleInputChange(e, 'username')}
                                readonly={true}
                            />

                            <InputField
                                label="E-mail"
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                value={user.email}  
                                Icon={Mail}
                                onChange={(e) => handleInputChange(e, 'email')}
                                readonly={true}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <div className="container sm:mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Idade"
                                name="age"
                                type="number"
                                placeholder="Idade"
                                value={user.age}  
                                Icon={Users}
                                onChange={(e) => handleInputChange(e, 'age')}
                            />

                            <InputField
                                label="Peso"
                                name="weight"
                                type="number"
                                placeholder="Peso"
                                value={user.weight} 
                                Icon={Weight}
                                onChange={(e) => handleInputChange(e, 'weight')}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 space-y-6">
                    <div className="container sm:mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField
                                label="Altura"
                                name="height"
                                type="number"
                                placeholder="Altura"
                                value={user.height}  
                                Icon={Ruler}
                                onChange={(e) => handleInputChange(e, 'height')}
                            />

                            <InputField
                                label="Gênero"
                                name="gender"
                                type="text"
                                placeholder="Gênero"
                                value={user.gender === "man" ? "Homem" : user.gender === "woman" ? "Mulher" : "Outro"}  
                                Icon={ChevronDown}
                                onChange={(e) => handleInputChange(e, 'gender')}
                                readonly={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
