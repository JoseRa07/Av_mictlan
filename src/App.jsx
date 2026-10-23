import { useState } from 'react'
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'
import { tema } from './estilos/tema'
import { recetas } from './datos/recetas'
import { ModalReceta } from './componentes/ModalReceta'
import { TarjetaReceta } from './componentes/TarjetaReceta'
import { IconoPlatillo } from './componentes/Iconos'
import './App.css'

function App() {
  const [recetaSelec, setRecetaSelec] = useState(null)

  const abrirReceta = (receta) => setRecetaSelec(receta)
  const cerrarReceta = () => setRecetaSelec(null)

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <Box className="pagina">
        <AppBar
          component="header"
          position="static"
          elevation={0}
          className="barraNavegacion"
        >
          <Toolbar className="contenedorBarra">
            <Box className="marcaSitio">
              <IconoPlatillo aria-hidden="true" />
              <Typography component="p" className="tituloSitio">
                PapuComida
              </Typography>
            </Box>
            <a className="enlaceInicio" href="#inicio">Inicio</a>
          </Toolbar>
        </AppBar>

        <main id="inicio">
          <Container className="contenido" maxWidth="md">
            <section className="encabezado" aria-labelledby="tituloPrincipal">
              <Typography component="h1" id="tituloPrincipal" variant="h3">
                Recetas fáciles para compartir
              </Typography>
              <Typography className="subtitulo" component="p">
                Dos opciones caseras, ricas y directas al plato.
              </Typography>
            </section>

            <section aria-label="Lista de recetas" className="listaRecetas">
              {recetas.map((receta) => (
                <TarjetaReceta
                  key={receta.id}
                  receta={receta}
                  alAbrir={abrirReceta}
                />
              ))}
            </section>
          </Container>
        </main>

        <ModalReceta receta={recetaSelec} alCerrar={cerrarReceta} />
      </Box>
    </ThemeProvider>
  )
}

export default App
