
import styles from "../styles/GestionTorneo.module.css";

export default function GestionTorneo() {
  return (
    <>
      <section className="container mx-auto py-2">
        <div className={styles.container}>
          <div>
            <h1 className={styles.titlePage}>Gestión torneo</h1>
          </div>
          <div className={styles.flexContainer}>
            {/*<div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Nombre
                <Input
                  id="tornament-name"
                  placeholder="Nombre del torneo"
                />
              </Label>
            </div>
            <div className={styles.input}>
              <Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Deporte
                <Input
                  id="tornament-sport"
                  placeholder="Deporte"
                />
              </Label>
            </div>*/}
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.playersContainer}>
              {/*<Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />*/}
            </div>
            <div className={styles.playersContainer}>
              {/*<Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />
              <Jugador />*/}
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.input}>
              {/*<Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Tipo de torneo
                <Input
                  id="tornament-type"
                  placeholder="Tipo de torneo"
                />
              </Label>*/}
            </div>
            <div className={styles.input}>
              {/*<Label
                className={styles.subtitlePage}
                htmlFor="new-input"
              >
                Añadir árbitro
                <Input
                  id="tornament-referee"
                  placeholder="Nombre del árbitro"
                />
              </Label>*/}
            </div>
          </div>
          <div className={styles.codeContainer}>
            {/*<InputCode
              titleU="Código de acceso"
              nameU="accessCode"
              placeholderU="Código"
              contentU="Generar código"
            />*/}
          </div>
        </div>
        <div className={styles.buttons}>
          {/*<Button variant="primary">
            <p>Aceptar</p>
          </Button>
          <Button variant="secondary">
            <p>Cancelar</p>
          </Button>*/}
        </div>
      </section>
    </>
  );
}

