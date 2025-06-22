"use client"

import { Button } from "@/components";
import { useStoredUser } from "@/hooks";
import styles from "./page.module.css";

export default function Home() {
  const user = useStoredUser();

  console.log(user)

  return (
    <>
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

      <footer>
        <Button>
          Iniciar
        </Button>
      </footer>
    </>
  );
}
