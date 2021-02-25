import styles from '../styles/components/ChallangeBox.module.css'

export function ChallangeBox() {
    return (
        <div className={styles.challangeBoxContainer}>
            <div className={styles.challangeNotActive}>
                <strong> Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avance de level completanto desafios
                </p>
            </div>
        </div>
    )
}