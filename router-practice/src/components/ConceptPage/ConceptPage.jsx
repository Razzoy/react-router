import style from './ConceptPage.module.scss'
import { ConceptFigure } from '../ConceptPage/ConceptFigure'

export function ConceptPage() {
    return (
        <div className={style.conceptStyle}>
            <h1>Concept</h1>
            <p>Gran Turismo 7 brings the most authentic driving experience to players with a perfect blend of classic and modern elements from the series. Dive into a world of high-performance cars, detailed tracks, and an immersive racing experience.</p>

            <ConceptFigure src='GTConcept_1' alt='Silly Physics' figCap1='Realistic Car Physics:' figCap2='Experience unparalleled realism with advanced driving physics.' />
            <ConceptFigure src='GTConcept_2' alt='Cars' figCap1='Extensive Car Collection:' figCap2='Over 400 cars to collect, tune, and race.'/>
            <ConceptFigure src='GTConcept_3' alt='Rainy Race' figCap1='Dynamic Weather and Time:' figCap2='Races that change dynamically with weather and time.' />
        </div>
    )
}