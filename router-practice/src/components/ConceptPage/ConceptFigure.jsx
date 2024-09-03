import style from '../ConceptPage/ConceptPage.module.scss'

export function ConceptFigure({ src, alt, figCap1, figCap2}) {
    return (
        <>
            <figure>
                <img src={`../src/assets/${src}.png`} alt={alt} />
                <figcaption>
                    <h3>{figCap1}</h3>
                    <p>{figCap2}</p>
                </figcaption>
            </figure>
        </>
    )

}