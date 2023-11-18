import {
    BaseDeDatos,
    FooterSkills,
    HerramientasDesarrollo,
    SkillFrontend,
    SkillsBackend,
    Testing
} from "../../components/Skills";
import "./Skills.css";

const Skills = () => {
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

export default Skills