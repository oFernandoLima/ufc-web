import React from "react"
import styles from "./MeusDados.module.css"

const MeusDados = () => {
    return(
        <div className={styles.card}>
            <h1 className={styles.name}>Luis Fernando Batista Lima</h1>
            <h1 className={styles.course}>Engenharia de Software</h1>
            <h1 className={styles.university}>Universidade Federal do Ceará - Campus Quixadá</h1>
        </div>
    )
}

// function MeusDados() {
//     return(
//         <div className={styles.card}>
//             <h1 className={styles.name}>Luis Fernando Batista Lima</h1>
//             <h1 className={styles.course}>Engenharia de Software</h1>
//             <h1 className={styles.university}>Universidade Federal do Ceará - Campus Quixadá</h1>
//         </div>
//     )
// }

// const MeusDados = () => 
//     <div className={styles.card}>
//         <h1 className={styles.name}>Luis Fernando Batista Lima</h1>
//         <h1 className={styles.course}>Engenharia de Software</h1>
//         <h1 className={styles.university}>Universidade Federal do Ceará - Campus Quixadá</h1>
//     </div>


// class MeusDados extends React.Component {
//     render() {
//         return(
//             <div className={styles.card}>
//                 <h1 className={styles.name}>Luis Fernando Batista Lima</h1>
//                 <h1 className={styles.course}>Engenharia de Software</h1>
//                 <h1 className={styles.university}>Universidade Federal do Ceará - Campus Quixadá</h1>
//             </div>
//         )
//     }
// }

export default MeusDados;