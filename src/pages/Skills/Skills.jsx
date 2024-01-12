import {
    BaseDeDatos,
    FooterSkills,
    HerramientasDesarrollo,
    SkillFrontend,
    SkillsBackend,
    Testing
} from "../../components";
import "./Skills.css";

export const Skills = () => {
    return (
        <>
            <main className="informacion">
                <section className="container-habilidades">
                    <SkillFrontend />
                    <SkillsBackend />
                    <Testing />
                    <BaseDeDatos />
                    <HerramientasDesarrollo />
                </section>
                <FooterSkills />
            </main>
        </>
    )
}
