import "./Skills.css";
import BaseDeDatos from "../../components/Skills/BaseDeDatos"
import HerramientasDesarrollo from "../../components/Skills/HerramientasDesarrollo"
import FooterSkills from "../../components/Skills/FooterSkills"
import SkillFrontend from "../../components/Skills/SkillFrontend"
import SkillsBackend from "../../components/Skills/SkillsBackend"
import Testing from "../../components/Skills/Testing"
const Skills = () => {
    return (
        <>
            <section className="informacion">
                <section className="container-habilidades" id="container-habilidades">
                    <SkillFrontend />
                    <SkillsBackend />
                    <Testing />
                    <BaseDeDatos />
                    <HerramientasDesarrollo />
                </section>
                <FooterSkills />
            </section>
        </>
    )
}

export default Skills