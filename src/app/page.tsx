import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1>
        Você está preso.
        <br />
        Precisa cumprir três desafios para escapar.
        <br />
        Boa sorte.
      </h1>

      <p>
        A ideia desse desafio é que você consiga solucionar três enigmas sequenciais, para que ao final você consiga “escapar”.
        <br />
        É obrigatório passar pelos três estágios.
        <br />
        É possível tentar quantas vezes precisar.
        <br />
        Em caso de respostas erradas, avisaremos. Nas certas, também.
        <br />
        Ao final, você será avisado se cumprir o desafio com sucesso.
      </p>
    </main>
  );
}
