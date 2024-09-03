import style from './AboutPage.module.scss'

export function AboutPage() {
    return (
        <div className={style.aboutStyle}>
            <h1>About</h1>
            <article>
                <h2>About Polyphony Digital</h2>
                <p>Gran Turismo 7 is developed by Polyphony Digital, led by Kazunori Yamauchi, a passionate car enthusiast and visionary in the racing game industry. </p>
                <p>Since the inception of the series, Polyphony Digital has been at the forefront of pushing the boundaries of racing simulations, combining cutting-edge technology with an unrivaled attention to detail.</p>
            </article>
            <article>
                <h2>The Legacy of Gran Turismo</h2>
                <p>The journey began in 1997 with the original Gran Turismo on PlayStation, which revolutionized racing games with its advanced graphics and realistic vehicle physics.</p>
                <p>Over the years, the series has evolved significantly, with each new release enhancing gameplay and expanding its features.</p>
                <p>Gran Turismo 7 builds on this rich history, incorporating the latest advancements in gaming technology to deliver a visually stunning and highly immersive experience.</p>
            </article>
            <article>
                <h2>New Features in Gran Turismo 7</h2>
                <ul>
                    <li>Extensive Car Collection: Experience a diverse range of meticulously detailed vehicles, from classic models to the latest high-performance cars.</li>
                    <li>Gran Turismo Café: Explore automotive culture and history in this engaging hub, offering new ways to interact with the game’s content.</li>
                    <li>Enhanced Gameplay: Enjoy improvements in both single-player and multiplayer modes, featuring deeper customization and more dynamic racing experiences.</li>
                </ul>
            </article>
            <article>
                <h2>Impact and Influence</h2>
                <p>Gran Turismo 7 not only upholds the series’ legacy of realism and innovation but also sets new benchmarks in the racing genre. Whether you’re a long-time fan or new to the series, Gran Turismo 7 promises a thrilling and authentic racing experience.</p>
                <p>Explore the site to stay updated on the latest news, events, and strategies related to Gran Turismo 7. Immerse yourself in the world of precision racing and discover all that this incredible game has to offer.</p>
            </article>
        </div>
    )
}